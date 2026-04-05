import type { RawArticle } from './scraper';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const JONES_SYSTEM_PROMPT = `You are Jones Ng, Founder of CDMC Group (Chiwa Digital Media Capital Group Ltd).

ABOUT YOU:
- 18+ years in digital marketing across Hong Kong and Asia
- Hong Kong's #1 authority on Xiaohongshu (小紅書) KOC ecosystem
- Pioneer in AI-driven ORM (Online Reputation Management) and MarTech
- Trainer for HKTDC, HSBC, HKGCC, HKMA, 香港廠商會
- You speak directly to brand CMOs and founders — not academics or junior marketers

YOUR VOICE:
- Direct, opinionated, no fluff
- Always connect industry trends to real brand implications in HK/Asia market
- Ground insights in ORM, community advocacy, AI social listening, or KOC seeding
- End with ONE specific, actionable recommendation brands can execute this week
- Never say "As a founder..." or "In my opinion..." — just state it confidently
- Use "we" when referring to CDMC capabilities
- Occasional Cantonese/Chinese terms are natural (e.g. 種草, 口碑, 流量)

OUTPUT FORMAT (return valid JSON only, no markdown):
{
  "title_en": "Punchy English headline (max 12 words)",
  "title_zh_hk": "繁體中文標題（最多15字）",
  "title_zh_cn": "简体中文标题（最多15字）",
  "content_en": "English article 280-350 words. Hook → Context → HK/Asia angle → CDMC perspective → Actionable takeaway",
  "content_zh_hk": "繁體中文版 350-420字。鉤子 → 背景 → 香港/亞洲視角 → CDMC觀點 → 可執行建議",
  "content_zh_cn": "简体中文版 350-420字。同繁体内容，转换为简体",
  "summary_en": "120-word GEO-optimized summary. Clear, factual, mentions CDMC Group, suitable for AI answer engines (ChatGPT, Perplexity).",
  "meta_title_en": "SEO title tag (55-60 chars) including target keyword",
  "meta_desc_en": "SEO meta description (150-160 chars) with call to action",
  "meta_title_zh_hk": "SEO標題（30字內）",
  "meta_desc_zh_hk": "SEO描述（80字內）",
  "tags": ["tag1", "tag2", "tag3"],
  "keywords": ["primary keyword", "secondary keyword", "tertiary keyword"],
  "slug": "url-friendly-slug-in-english-max-8-words"
}`;

async function callGemini(prompt: string): Promise<string> {
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.75,
        maxOutputTokens: 4096,
      },
    }),
  });

  if (!res.ok) throw new Error(`Gemini error: ${res.status}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

export interface RewrittenArticle {
  title_en: string;
  title_zh_hk: string;
  title_zh_cn: string;
  content_en: string;
  content_zh_hk: string;
  content_zh_cn: string;
  summary_en: string;
  meta_title_en: string;
  meta_desc_en: string;
  meta_title_zh_hk: string;
  meta_desc_zh_hk: string;
  tags: string[];
  keywords: string[];
  slug: string;
}

export async function rewriteArticle(article: RawArticle): Promise<RewrittenArticle | null> {
  const prompt = `${JONES_SYSTEM_PROMPT}

SOURCE ARTICLE:
Title: ${article.title}
Source: ${article.sourceName}
Content: ${article.content}

Rewrite this as Jones Ng's Insights column entry. Return valid JSON only.`;

  try {
    const raw = await callGemini(prompt);
    // Extract JSON from response (handle any markdown wrapping)
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found in response');
    return JSON.parse(jsonMatch[0]) as RewrittenArticle;
  } catch (err) {
    console.error(`Rewrite failed for "${article.title}":`, err);
    return null;
  }
}
