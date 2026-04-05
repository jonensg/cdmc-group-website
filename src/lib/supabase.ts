import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type InsightStatus = 'pending' | 'published' | 'discarded';
export type AuthorType = 'jones' | 'team';

export interface Insight {
  id: string;
  source_url: string;
  source_name: string;
  original_title: string;
  heat_score: number;
  read_count: number;

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

  author_type: AuthorType;
  status: InsightStatus;

  slug: string;
  featured_image: string | null;
  scraped_at: string;
  decision_deadline: string;
  published_at: string | null;
  created_at: string;
}
