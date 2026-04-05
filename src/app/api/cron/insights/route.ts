import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';
import { scrapeAllSources } from '@/lib/insights/scraper';
import { rewriteArticle } from '@/lib/insights/rewriter';

export const maxDuration = 300; // 5 minutes

export async function GET(req: NextRequest) {
  // Verify cron secret
  const secret = req.headers.get('x-cron-secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServerClient();
  const results = { scraped: 0, written: 0, skipped: 0, errors: 0 };

  try {
    // 1. Scrape top 10 articles
    console.log('Scraping sources...');
    const articles = await scrapeAllSources();
    results.scraped = articles.length;

    // 2. Set decision deadline: 9am HKT today
    const now = new Date();
    const deadline = new Date();
    deadline.setUTCHours(1, 0, 0, 0); // 9am HKT = 1am UTC
    if (deadline <= now) deadline.setDate(deadline.getDate() + 1); // push to tomorrow if past 9am

    // 3. Process each article
    for (const article of articles) {
      // Check if URL already exists
      const { data: existing } = await supabase
        .from('insights')
        .select('id')
        .eq('source_url', article.url)
        .single();

      if (existing) {
        results.skipped++;
        continue;
      }

      // AI rewrite
      const rewritten = await rewriteArticle(article);
      if (!rewritten) {
        results.errors++;
        continue;
      }

      // Ensure unique slug
      let slug = rewritten.slug;
      const { data: slugExists } = await supabase
        .from('insights')
        .select('id')
        .eq('slug', slug)
        .single();

      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }

      // Save to database
      const { error } = await supabase.from('insights').insert({
        source_url: article.url,
        source_name: article.sourceName,
        original_title: article.title,
        heat_score: article.heatScore,
        read_count: article.readCount,
        featured_image: article.imageUrl || null,

        title_en: rewritten.title_en,
        title_zh_hk: rewritten.title_zh_hk,
        title_zh_cn: rewritten.title_zh_cn,

        content_en: rewritten.content_en,
        content_zh_hk: rewritten.content_zh_hk,
        content_zh_cn: rewritten.content_zh_cn,

        summary_en: rewritten.summary_en,

        meta_title_en: rewritten.meta_title_en,
        meta_desc_en: rewritten.meta_desc_en,
        meta_title_zh_hk: rewritten.meta_title_zh_hk,
        meta_desc_zh_hk: rewritten.meta_desc_zh_hk,

        tags: rewritten.tags,
        keywords: rewritten.keywords,
        slug,

        author_type: 'team', // default
        status: 'pending',
        decision_deadline: deadline.toISOString(),
      });

      if (error) {
        console.error('DB insert error:', error);
        results.errors++;
      } else {
        results.written++;
      }
    }

    // 4. Send email notification to Jones
    const pendingCount = results.written;
    if (pendingCount > 0) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cdmcgroup.com';
      await fetch(`${siteUrl}/api/notify-insights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-cron-secret': process.env.CRON_SECRET! },
        body: JSON.stringify({ count: pendingCount }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true, ...results });
  } catch (err) {
    console.error('Cron error:', err);
    return NextResponse.json({ error: String(err), ...results }, { status: 500 });
  }
}
