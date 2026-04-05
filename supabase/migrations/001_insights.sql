-- CDMC Insights table
-- Run this in Supabase Dashboard → SQL Editor

create table if not exists public.insights (
  id uuid primary key default gen_random_uuid(),

  -- Source metadata
  source_url text not null unique,
  source_name text not null,
  original_title text not null,
  heat_score integer not null default 0,
  read_count integer not null default 0,
  featured_image text,

  -- Multilingual content
  title_en text not null,
  title_zh_hk text not null,
  title_zh_cn text not null,

  content_en text not null,
  content_zh_hk text not null,
  content_zh_cn text not null,

  summary_en text not null,

  -- SEO meta
  meta_title_en text,
  meta_desc_en text,
  meta_title_zh_hk text,
  meta_desc_zh_hk text,

  -- Taxonomy
  tags text[] default '{}',
  keywords text[] default '{}',
  slug text not null unique,

  -- Workflow
  author_type text not null default 'team' check (author_type in ('jones', 'team')),
  status text not null default 'pending' check (status in ('pending', 'published', 'discarded')),
  decision_deadline timestamptz not null,
  published_at timestamptz,
  scraped_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Indexes
create index if not exists insights_status_idx on public.insights (status);
create index if not exists insights_published_at_idx on public.insights (published_at desc);
create index if not exists insights_slug_idx on public.insights (slug);
create index if not exists insights_deadline_idx on public.insights (decision_deadline);

-- Row Level Security
alter table public.insights enable row level security;

-- Public can read published articles
create policy "Published insights are public"
  on public.insights for select
  using (status = 'published');

-- Service role has full access (used by server-side cron and admin)
-- (Service role bypasses RLS by default in Supabase)
