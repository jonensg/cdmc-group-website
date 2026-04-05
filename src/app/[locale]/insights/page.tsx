import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | CDMC Group',
  description: 'Industry insights on ORM, KOC seeding, AI marketing, and brand reputation in Hong Kong and Asia — by Jones Ng and the CHIWA Team.',
};

export const revalidate = 300; // revalidate every 5 minutes

async function getInsights() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from('insights')
    .select('id, title_en, title_zh_hk, summary_en, tags, author_type, slug, featured_image, published_at, source_name, heat_score')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(30);
  return data || [];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-HK', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default async function InsightsPage() {
  const articles = await getInsights();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <Header />
      <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>
        {/* Page header */}
        <section style={{
          borderBottom: '1px solid #1a1a1a',
          padding: '64px 48px 48px',
          maxWidth: 1080,
          margin: '0 auto',
        }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: '#A8842A', marginBottom: 16 }}>
            CDMC INSIGHTS
          </div>
          <h1 style={{
            fontFamily: 'Georgia, "DM Serif Display", serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: '#F7F4EF',
            margin: '0 0 16px',
            lineHeight: 1.15,
          }}>
            Industry Intelligence.<br />
            <span style={{ color: '#A8842A' }}>Unfiltered.</span>
          </h1>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 560, margin: 0, lineHeight: 1.7 }}>
            ORM, KOC, AI Marketing, and brand reputation in Hong Kong and Asia —
            curated daily by Jones Ng and the CHIWA Team.
          </p>
        </section>

        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 48px', color: '#555' }}>
            Insights coming soon. Check back daily.
          </div>
        ) : (
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px 80px' }}>
            {/* Featured article */}
            {featured && (
              <Link href={`/insights/${featured.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: featured.featured_image ? '1fr 380px' : '1fr',
                  gap: 40,
                  padding: '48px 0',
                  borderBottom: '1px solid #1a1a1a',
                  cursor: 'pointer',
                }}>
                  <div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                      {featured.author_type === 'jones' ? (
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
                        {featured.published_at ? formatDate(featured.published_at) : ''}
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      color: '#F7F4EF',
                      margin: '0 0 12px',
                      lineHeight: 1.25,
                    }}>
                      {featured.title_en}
                    </h2>
                    <p style={{ fontSize: 14, color: '#888', margin: '0 0 8px', fontFamily: 'Georgia, serif' }}>
                      {featured.title_zh_hk}
                    </p>
                    <p style={{ fontSize: 15, color: '#666', margin: '16px 0 24px', lineHeight: 1.75, maxWidth: 560 }}>
                      {featured.summary_en?.slice(0, 180)}…
                    </p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {featured.tags?.slice(0, 4).map((tag: string) => (
                        <span key={tag} style={{
                          fontSize: 11, border: '1px solid #222', color: '#555', padding: '3px 10px',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {featured.featured_image && (
                    <div style={{
                      background: '#111',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                      alignSelf: 'center',
                    }}>
                      <img
                        src={featured.featured_image}
                        alt={featured.title_en}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                      />
                    </div>
                  )}
                </div>
              </Link>
            )}

            {/* Grid of remaining articles */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 1,
              marginTop: 1,
              background: '#1a1a1a',
            }}>
              {rest.map(article => (
                <Link key={article.id} href={`/insights/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#080808',
                    padding: '32px 28px',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#0d0d0d')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#080808')}
                  >
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
                      {article.author_type === 'jones' ? (
                        <span style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: 2,
                          background: '#A8842A', color: '#fff', padding: '3px 8px',
                        }}>FOUNDER</span>
                      ) : (
                        <span style={{
                          fontSize: 10, letterSpacing: 2,
                          border: '1px solid #222', color: '#555', padding: '3px 8px',
                        }}>CHIWA</span>
                      )}
                      <span style={{ fontSize: 11, color: '#444' }}>
                        {article.published_at ? formatDate(article.published_at) : ''}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 17,
                      color: '#F7F4EF',
                      margin: '0 0 8px',
                      lineHeight: 1.4,
                    }}>
                      {article.title_en}
                    </h3>
                    <p style={{ fontSize: 13, color: '#666', margin: '0 0 16px', fontFamily: 'Georgia, serif' }}>
                      {article.title_zh_hk}
                    </p>
                    <p style={{ fontSize: 13, color: '#555', margin: 0, lineHeight: 1.7 }}>
                      {article.summary_en?.slice(0, 100)}…
                    </p>
                    <div style={{ marginTop: 16, fontSize: 11, color: '#A8842A', letterSpacing: 1 }}>
                      Read more →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
