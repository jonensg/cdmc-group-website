import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { createServerClient } from '@/lib/supabase-server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

async function getInsight(slug: string) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('insights')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  return data;
}

async function getRelated(tags: string[], currentSlug: string) {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('insights')
    .select('title_en, title_zh_hk, slug, author_type, published_at')
    .eq('status', 'published')
    .neq('slug', currentSlug)
    .overlaps('tags', tags)
    .order('published_at', { ascending: false })
    .limit(3);
  return data || [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return { title: 'Not Found' };

  return {
    title: insight.meta_title_en || insight.title_en,
    description: insight.meta_desc_en || insight.summary_en?.slice(0, 160),
    openGraph: {
      title: insight.meta_title_en || insight.title_en,
      description: insight.meta_desc_en,
      images: insight.featured_image ? [insight.featured_image] : [],
      type: 'article',
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-HK', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function renderContent(text: string) {
  // Convert simple paragraph breaks to paragraphs
  return text.split(/\n\n+/).filter(Boolean).map((para, i) => (
    <p key={i} style={{
      fontSize: 17,
      color: '#ccc',
      lineHeight: 1.9,
      margin: '0 0 24px',
      fontFamily: 'Georgia, serif',
    }}>
      {para.trim()}
    </p>
  ));
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) notFound();

  const related = await getRelated(insight.tags || [], slug);

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title_en,
    description: insight.summary_en,
    author: {
      '@type': 'Person',
      name: insight.author_type === 'jones' ? 'Jones Ng' : 'CHIWA Team',
      url: 'https://cdmcgroup.com/about',
      affiliation: {
        '@type': 'Organization',
        name: 'CDMC Group',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'CDMC Group',
      url: 'https://cdmcgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cdmcgroup.com/logos/cdmc.png',
      },
    },
    datePublished: insight.published_at,
    dateModified: insight.published_at,
    mainEntityOfPage: `https://cdmcgroup.com/insights/${slug}`,
    keywords: insight.keywords?.join(', '),
    image: insight.featured_image || undefined,
    inLanguage: 'en',
    about: {
      '@type': 'Thing',
      name: 'Digital Marketing in Hong Kong',
    },
  };

  return (
    <>
      <Header />
      <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {/* Article header */}
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '60px 32px' }}>
          {/* Byline & meta */}
          <div style={{ marginBottom: 32 }}>
            <Link href="/insights" style={{
              fontSize: 12, color: '#555', textDecoration: 'none', letterSpacing: 1,
              display: 'inline-block', marginBottom: 24,
            }}>
              ← CDMC INSIGHTS
            </Link>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
              {insight.author_type === 'jones' ? (
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: 2,
                  background: '#A8842A', color: '#fff', padding: '4px 12px',
                }}>FOUNDER&apos;S TAKE</span>
              ) : (
                <span style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: 2,
                  border: '1px solid #333', color: '#666', padding: '4px 12px',
                }}>CHIWA TEAM</span>
              )}
              <span style={{ fontSize: 12, color: '#555' }}>
                {insight.published_at ? formatDate(insight.published_at) : ''}
              </span>
              <span style={{ fontSize: 12, color: '#333' }}>via {insight.source_name}</span>
            </div>

            <h1 style={{
              fontFamily: 'Georgia, "DM Serif Display", serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#F7F4EF',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}>
              {insight.title_en}
            </h1>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: 18,
              color: '#666',
              margin: '0 0 24px',
            }}>
              {insight.title_zh_hk}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {insight.tags?.map((tag: string) => (
                <span key={tag} style={{
                  fontSize: 11, border: '1px solid #222', color: '#555', padding: '3px 10px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured image */}
          {insight.featured_image && (
            <div style={{ marginBottom: 40, background: '#111', overflow: 'hidden' }}>
              <img
                src={insight.featured_image}
                alt={insight.title_en}
                style={{ width: '100%', display: 'block', opacity: 0.9 }}
              />
            </div>
          )}

          {/* GEO Summary block */}
          <div style={{
            background: '#0d0d0d',
            borderLeft: '3px solid #A8842A',
            padding: '20px 24px',
            marginBottom: 40,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: '#A8842A', marginBottom: 12 }}>
              KEY TAKEAWAY
            </div>
            <p style={{ fontSize: 15, color: '#aaa', margin: 0, lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>
              {insight.summary_en}
            </p>
          </div>

          {/* English content */}
          <div style={{ marginBottom: 56 }}>
            {renderContent(insight.content_en)}
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #1a1a1a', margin: '40px 0' }} />

          {/* Bilingual section */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 24 }}>
              繁體中文版
            </div>
            {renderContent(insight.content_zh_hk)}
          </div>

          <div style={{ borderTop: '1px solid #1a1a1a', margin: '40px 0' }} />

          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 24 }}>
              简体中文版
            </div>
            {renderContent(insight.content_zh_cn)}
          </div>

          {/* Author card */}
          <div style={{
            border: '1px solid #1a1a1a',
            padding: '28px',
            background: '#0d0d0d',
            marginTop: 48,
          }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{
                width: 56, height: 56, background: '#A8842A', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, color: '#fff', fontFamily: 'Georgia, serif',
              }}>
                {insight.author_type === 'jones' ? 'J' : 'C'}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#F7F4EF', marginBottom: 4 }}>
                  {insight.author_type === 'jones' ? 'Jones Ng' : 'CHIWA Team'}
                </div>
                <div style={{ fontSize: 12, color: '#555', marginBottom: 10 }}>
                  {insight.author_type === 'jones'
                    ? 'Founder, CDMC Group · 18+ years in digital marketing · HK\'s leading Xiaohongshu KOC strategist'
                    : 'CDMC Group\'s editorial team — tracking ORM, AI, and brand reputation across HK and Asia'}
                </div>
                <Link href="/qualify" style={{
                  fontSize: 12, color: '#A8842A', textDecoration: 'none', letterSpacing: 0.5,
                }}>
                  Work with CDMC →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <div style={{
            borderTop: '1px solid #1a1a1a',
            padding: '48px 32px 64px',
            maxWidth: 760,
            margin: '0 auto',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 28 }}>
              RELATED INSIGHTS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/insights/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '20px',
                    background: '#0d0d0d',
                    border: '1px solid #1a1a1a',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}>
                    <div style={{
                      fontSize: 10, letterSpacing: 2, color: r.author_type === 'jones' ? '#A8842A' : '#555',
                      marginBottom: 10,
                    }}>
                      {r.author_type === 'jones' ? 'FOUNDER' : 'CHIWA'}
                    </div>
                    <h4 style={{
                      fontFamily: 'Georgia, serif', fontSize: 14, color: '#F7F4EF',
                      margin: '0 0 6px', lineHeight: 1.4,
                    }}>
                      {r.title_en}
                    </h4>
                    <p style={{ fontSize: 12, color: '#666', margin: 0, fontFamily: 'Georgia, serif' }}>
                      {r.title_zh_hk}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{
          background: '#0a0a0a', borderTop: '1px solid #1a1a1a',
          padding: '64px 32px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 16 }}>READY TO ACT?</div>
          <h2 style={{
            fontFamily: 'Georgia, serif', fontSize: 28, color: '#F7F4EF',
            margin: '0 0 12px',
          }}>
            Your brand reputation can&apos;t wait.
          </h2>
          <p style={{ fontSize: 15, color: '#666', margin: '0 0 32px' }}>
            See if CDMC&apos;s Find + Fix method is right for your brand.
          </p>
          <Link href="/qualify" style={{
            display: 'inline-block', background: '#A8842A', color: '#fff',
            padding: '14px 32px', textDecoration: 'none', fontSize: 14,
            fontWeight: 600, letterSpacing: 1,
          }}>
            GET QUALIFIED →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
