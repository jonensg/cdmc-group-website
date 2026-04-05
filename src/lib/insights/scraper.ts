import { RSS_SOURCES, RELEVANCE_KEYWORDS, type RSSSource } from './sources';

export interface RawArticle {
  title: string;
  url: string;
  sourceName: string;
  sourceLanguage: string;
  publishedAt: string;
  content: string;
  heatScore: number;
  readCount: number;
  imageUrl?: string;
}

function parseXML(xml: string): Array<{ title: string; link: string; description: string; pubDate: string; content: string; imageUrl?: string }> {
  const items: Array<{ title: string; link: string; description: string; pubDate: string; content: string; imageUrl?: string }> = [];

  const itemMatches = xml.matchAll(/<item[^>]*>([\s\S]*?)<\/item>/gi);
  for (const match of itemMatches) {
    const item = match[1];

    const title = (item.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/) || [])[1]?.trim() || '';
    const link = (item.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/) || [])[1]?.trim() || '';
    const description = (item.match(/<description[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/) || [])[1]?.trim() || '';
    const pubDate = (item.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/) || [])[1]?.trim() || '';
    const contentEncoded = (item.match(/<content:encoded[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/) || [])[1]?.trim() || '';
    const imageUrl = (item.match(/<media:thumbnail[^>]*url="([^"]*)"/) || item.match(/<enclosure[^>]*url="([^"]*)"/) || [])[1] || undefined;

    if (title && link) {
      items.push({
        title,
        link,
        description,
        pubDate,
        content: contentEncoded || description,
        imageUrl,
      });
    }
  }

  return items;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 1500);
}

function calculateRelevanceScore(title: string, content: string): number {
  const text = (title + ' ' + content).toLowerCase();
  let score = 0;
  for (const keyword of RELEVANCE_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      score += 2;
    }
  }
  return score;
}

function calculateHeatScore(source: RSSSource, pubDate: string, relevance: number): number {
  const hoursAgo = pubDate
    ? (Date.now() - new Date(pubDate).getTime()) / (1000 * 60 * 60)
    : 24;

  // Recency score (fresher = higher, max 24h window)
  const recencyScore = Math.max(0, 100 - hoursAgo * 4);
  // Authority score
  const authorityScore = source.weight * 10;
  // Relevance score (capped at 60)
  const relevanceScore = Math.min(relevance * 5, 60);

  return Math.round(recencyScore + authorityScore + relevanceScore);
}

async function fetchSource(source: RSSSource): Promise<RawArticle[]> {
  try {
    const res = await fetch(source.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 CDMC-InsightBot/1.0' },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const items = parseXML(xml);

    return items.slice(0, 5).map(item => {
      const text = stripHtml(item.content || item.description);
      const relevance = calculateRelevanceScore(item.title, text);
      const heat = calculateHeatScore(source, item.pubDate, relevance);

      return {
        title: item.title,
        url: item.link,
        sourceName: source.name,
        sourceLanguage: source.language,
        publishedAt: item.pubDate || new Date().toISOString(),
        content: text,
        heatScore: heat,
        readCount: 0,
        imageUrl: item.imageUrl,
      };
    });
  } catch {
    console.error(`Failed to fetch ${source.name}`);
    return [];
  }
}

export async function scrapeAllSources(): Promise<RawArticle[]> {
  const results = await Promise.allSettled(RSS_SOURCES.map(fetchSource));

  const articles: RawArticle[] = [];
  for (const result of results) {
    if (result.status === 'fulfilled') {
      articles.push(...result.value);
    }
  }

  // Sort by heat score, take top 10
  return articles
    .sort((a, b) => b.heatScore - a.heatScore)
    .slice(0, 10);
}
