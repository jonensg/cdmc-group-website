export interface RSSSource {
  name: string;
  url: string;
  language: 'zh' | 'en';
  category: string;
  weight: number; // authority weight 1-10
}

export const RSS_SOURCES: RSSSource[] = [
  // Chinese industry media
  {
    name: '虎嗅Pro',
    url: 'https://www.huxiu.com/rss/0.xml',
    language: 'zh',
    category: 'tech-marketing',
    weight: 9,
  },
  {
    name: '36Kr 营销',
    url: 'https://36kr.com/feed',
    language: 'zh',
    category: 'startup-marketing',
    weight: 8,
  },
  {
    name: '数英网',
    url: 'https://rsshub.app/digitaling/index',
    language: 'zh',
    category: 'creative-marketing',
    weight: 9,
  },
  {
    name: 'SocialBeta',
    url: 'https://socialbeta.com/feed',
    language: 'zh',
    category: 'social-marketing',
    weight: 8,
  },
  {
    name: '品玩',
    url: 'https://www.pingwest.com/feed',
    language: 'zh',
    category: 'tech-marketing',
    weight: 7,
  },

  // English industry media
  {
    name: 'Campaign Asia',
    url: 'https://www.campaignasia.com/rss',
    language: 'en',
    category: 'marketing',
    weight: 10,
  },
  {
    name: 'Marketing Interactive HK',
    url: 'https://www.marketing-interactive.com/feed',
    language: 'en',
    category: 'marketing',
    weight: 9,
  },
  {
    name: 'PR Week',
    url: 'https://www.prweek.com/rss',
    language: 'en',
    category: 'pr-orm',
    weight: 8,
  },
  {
    name: 'Digiday',
    url: 'https://digiday.com/feed/',
    language: 'en',
    category: 'digital-marketing',
    weight: 8,
  },
  {
    name: 'Marketing Week',
    url: 'https://www.marketingweek.com/feed/',
    language: 'en',
    category: 'marketing',
    weight: 7,
  },
];

// Keywords to filter for relevance
export const RELEVANCE_KEYWORDS = [
  // ORM / reputation
  'reputation', 'ORM', '口碑', '聲譽', 'brand crisis', '品牌危機',
  // Social media
  'xiaohongshu', '小紅書', 'instagram', 'threads', 'KOC', 'KOL', '種草',
  // AI / MarTech
  'AI marketing', 'MarTech', 'social listening', '社交聆聽', 'generative AI',
  // HK / Asia market
  'hong kong', 'hongkong', '香港', 'asia', 'china marketing', '大灣區',
  // Content / community
  'content marketing', 'community', 'influencer', 'word of mouth',
];
