export interface CaseStudy {
  slug: string;
  client: string;
  clientEn: string;
  industry: string;
  service: string;
  platform: string;
  duration?: string;
  metrics: {
    primary: { value: string; label: string };
    secondary?: { value: string; label: string };
  };
  intro: string;
  approach: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'hk-drum-festival',
    client: '香港鼓樂節',
    clientEn: 'Hong Kong Drum Festival',
    industry: 'Arts & Culture',
    service: 'KOC Seeding',
    platform: 'Weibo · Douyin · Xiaohongshu',
    metrics: {
      primary: { value: '2.16M', label: 'Total reads generated' },
      secondary: { value: '3,648', label: 'Total interactions' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Matched festival content with relevant KOC profiles across Weibo, Douyin, and Xiaohongshu',
      'Designed high-traffic post formats and store-visit scripts for each KOC',
      'Leveraged trending topics to amplify organic reach during the festival period',
      'Coordinated simultaneous publishing across platforms for maximum saturation',
    ],
    featured: true,
  },
  {
    slug: 'hiking-trail-eastern-kowloon',
    client: '山友同行 · 東九龍',
    clientEn: 'HK Hiking Community — Eastern Kowloon',
    industry: 'Tourism & Leisure',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: '189K', label: 'Reads generated' },
      secondary: { value: '20,002', label: 'Interactions' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Selected KOCs with active hiking and outdoor lifestyle audiences',
      'Produced location-specific content scripts for Eastern Kowloon trail routes',
      'Designed high-engagement post formats combining photography and personal narrative',
      'Monitored and optimised post timing for peak weekend discovery traffic',
    ],
    featured: false,
  },
  {
    slug: 'hkt',
    client: 'HKT',
    clientEn: 'HKT Limited',
    industry: 'Telecommunications',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    duration: '10 days',
    metrics: {
      primary: { value: '128K', label: 'Reads in 10 days' },
      secondary: { value: '3,348', label: 'Interactions' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Mobilised a curated KOC roster within 7 days of brief confirmation',
      'Briefed content on HKT service features relevant to mainland Chinese users in HK',
      'Coordinated publishing schedule for sustained daily coverage over 10 days',
      'Delivered real-time performance data throughout the campaign window',
    ],
    featured: true,
  },
  {
    slug: 'onedegree',
    client: 'OneDegree',
    clientEn: 'OneDegree (InsurTech)',
    industry: 'Insurance & FinTech',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    duration: '10 days',
    metrics: {
      primary: { value: '84K', label: 'Reads in 10 days' },
      secondary: { value: '1,536', label: 'Interactions' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Identified KOC voices with credibility in personal finance and lifestyle topics',
      'Developed authentic insurance education content in native Xiaohongshu format',
      'Managed the full workflow: briefing, draft review, scheduling, and reporting',
      'Targeted new Hong Kong arrivals actively researching insurance options',
    ],
    featured: true,
  },
  {
    slug: 'little-street-alliance',
    client: '小街道大聯盟',
    clientEn: 'Little Street Alliance',
    industry: 'Community & Retail',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: '11,831', label: 'Reads generated' },
      secondary: { value: '1,467', label: 'Interactions' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Recruited neighbourhood-focused KOCs aligned with community discovery content',
      'Scripted store-visit and street-exploration narratives for each participant',
      'Published content to coincide with campaign event dates for amplified relevance',
      'Collected and reported engagement data for each piece of KOC content',
    ],
    featured: false,
  },
  {
    slug: 'disney-hk',
    client: '迪士尼 · 香港',
    clientEn: 'Hong Kong Disneyland',
    industry: 'Entertainment & Theme Parks',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Seeding campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Deployed family and lifestyle KOCs to document the park experience authentically',
      'Created content formats native to Xiaohongshu discovery behaviour',
      'Targeted mainland Chinese visitors planning Hong Kong travel itineraries',
    ],
    featured: false,
  },
  {
    slug: 'new-town-plaza',
    client: 'New Town Plaza',
    clientEn: 'New Town Plaza (Shatin)',
    industry: 'Retail & Shopping Malls',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Traffic & seeding campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Organised KOC store visits timed to promotions and seasonal events',
      'Produced keyword-rich seeding posts to capture high-intent search traffic',
      'Coordinated multiple KOC voices publishing simultaneously for topic clustering',
    ],
    featured: false,
  },
  {
    slug: 'cuhk-hospital',
    client: '香港中文大學醫院',
    clientEn: 'CUHK Medical Centre',
    industry: 'Healthcare & Medical',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Medical seeding campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Selected KOCs with health, wellness, and lifestyle audiences in Hong Kong',
      'Developed sensitivity-compliant content formats appropriate for medical services',
      'Targeted mainland Chinese residents in HK seeking trusted medical providers',
    ],
    featured: false,
  },
  {
    slug: 'wifi-hk',
    client: 'Wi-Fi.HK',
    clientEn: 'Wi-Fi.HK (OGCIO)',
    industry: 'Government & Public Services',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Awareness campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Briefed KOCs to demonstrate Wi-Fi.HK usage in real Hong Kong locations',
      'Created practical, how-to style content for newly arrived mainland Chinese',
      'Published across peak travel and exploration content windows',
    ],
    featured: false,
  },
  {
    slug: 'abc-pathways-school',
    client: 'ABC Pathways School',
    clientEn: 'ABC Pathways International School',
    industry: 'Education',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Education seeding campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Identified parent KOCs with school-age children and education-focused audiences',
      'Produced campus visit and school-life content in authentic parent-voice format',
      'Targeted Hong Kong-based mainland Chinese families actively seeking schools',
    ],
    featured: false,
  },
  {
    slug: 'h-coffee',
    client: 'H Coffee',
    clientEn: 'H Coffee',
    industry: 'F&B',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Full-funnel F&B campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Ran store-visit (探店打卡) content with curated KOC storytellers',
      'Executed keyword-coverage (關鍵鋪蓋) to dominate search results for café discovery',
      'Built grassroots matrix (素人矩陣) of micro-KOCs for authentic reach',
      'Amplified via trending-topic hijacking (熱點借勢) for viral multiplier effect',
    ],
    featured: false,
  },
  {
    slug: 'esprit',
    client: 'Esprit',
    clientEn: 'Esprit Holdings',
    industry: 'Fashion & Retail',
    service: 'KOL / KOC Campaign',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOL/KOC', label: 'Fashion seeding campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Combined KOL (macro influencer) and KOC (authentic consumer) formats for layered reach',
      'Focused on fashion-forward mainland Chinese audiences in Hong Kong',
      'Delivered outfit and styling content native to Xiaohongshu discovery flow',
    ],
    featured: false,
  },
  {
    slug: 'magart',
    client: 'MAGART',
    clientEn: 'MAGART',
    industry: 'Art & Culture',
    service: 'KOC Seeding',
    platform: 'Xiaohongshu',
    metrics: {
      primary: { value: 'KOC', label: 'Art venue campaign' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Deployed KOC store-visit video content to showcase the gallery experience',
      'Produced seeding posts (KOC種草) driving intent and footfall',
      'Targeted culturally-engaged mainland Chinese audiences in Hong Kong',
    ],
    featured: false,
  },
  {
    slug: 'hku-space',
    client: 'HKU SPACE',
    clientEn: 'The University of Hong Kong — School of Professional and Continuing Education',
    industry: 'Education',
    service: 'Video Production',
    platform: 'Digital & Social',
    metrics: {
      primary: { value: 'Video', label: 'Promotional film production' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Produced a full-length promotional video for HKU SPACE course offerings',
      'Managed end-to-end production: concept, scripting, filming, and post-production',
      'Delivered broadcast-quality output optimised for social media distribution',
    ],
    featured: false,
  },
  {
    slug: 'cityu',
    client: 'City University of Hong Kong',
    clientEn: 'CityU',
    industry: 'Education',
    service: 'Documentary Production',
    platform: 'Digital & Social',
    metrics: {
      primary: { value: 'Film', label: 'Documentary production' },
    },
    intro: 'Photo and full campaign introduction coming soon.',
    approach: [
      'Directed and produced a documentary-format film for CityU',
      'Handled full production pipeline from pre-production planning through final delivery',
      'Crafted a narrative-driven format suited for institutional storytelling',
    ],
    featured: false,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(c => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(c => c.featured);
}
