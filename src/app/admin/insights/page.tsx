'use client';

import { useState, useEffect, useCallback } from 'react';

interface Insight {
  id: string;
  original_title: string;
  source_name: string;
  heat_score: number;
  title_en: string;
  title_zh_hk: string;
  content_en: string;
  content_zh_hk: string;
  summary_en: string;
  tags: string[];
  author_type: 'jones' | 'team';
  status: 'pending' | 'published' | 'discarded';
  decision_deadline: string;
  slug: string;
  featured_image: string | null;
}

export default function InsightsAdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'pending' | 'published' | 'discarded' | 'all'>('pending');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [saving, setSaving] = useState<string | null>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const fetchInsights = useCallback(async (pw: string, f: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/insights?status=${f}`, {
        headers: { 'x-admin-password': pw },
      });
      if (!res.ok) throw new Error('Auth failed');
      const { data } = await res.json();
      setInsights(data || []);
    } catch {
      alert('Wrong password or error loading insights.');
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthed(true);
    fetchInsights(password, filter);
  };

  const handleFilterChange = (f: typeof filter) => {
    setFilter(f);
    fetchInsights(password, f);
  };

  const update = async (id: string, updates: Partial<Insight>) => {
    setSaving(id);
    try {
      const res = await fetch('/api/admin/insights', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({ id, ...updates }),
      });
      if (!res.ok) throw new Error('Update failed');
      const { data } = await res.json();
      setInsights(prev => prev.map(i => (i.id === id ? { ...i, ...data } : i)));
    } catch (err) {
      alert('Error saving: ' + err);
    } finally {
      setSaving(null);
    }
  };

  const handlePublish = (insight: Insight, author: 'jones' | 'team') => {
    update(insight.id, { author_type: author, status: 'published' });
  };

  const handleDiscard = (id: string) => {
    update(id, { status: 'discarded' });
  };

  const timeLeft = (deadline: string) => {
    const diff = new Date(deadline).getTime() - now.getTime();
    if (diff <= 0) return <span style={{ color: '#ef4444' }}>Deadline passed</span>;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const color = diff < 1800000 ? '#ef4444' : diff < 3600000 ? '#f59e0b' : '#22c55e';
    return <span style={{ color }}>{h}h {m}m {s}s</span>;
  };

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh', background: '#080808', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif',
      }}>
        <div style={{ width: 360 }}>
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <div style={{ fontSize: 13, letterSpacing: 3, color: '#A8842A', marginBottom: 12 }}>CDMC</div>
            <h1 style={{ fontSize: 28, color: '#F7F4EF', fontFamily: 'Georgia, serif', margin: 0 }}>
              Insights Admin
            </h1>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '14px 16px', background: '#111',
                border: '1px solid #222', color: '#F7F4EF', fontSize: 15,
                outline: 'none', boxSizing: 'border-box', marginBottom: 12,
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%', padding: '14px', background: '#A8842A',
                color: '#fff', border: 'none', fontSize: 15, fontWeight: 600,
                cursor: 'pointer', letterSpacing: 0.5,
              }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#F7F4EF', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #1a1a1a', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A' }}>CDMC</span>
          <h1 style={{ fontSize: 22, fontFamily: 'Georgia, serif', margin: '4px 0 0', color: '#F7F4EF' }}>
            Insights Review
          </h1>
        </div>
        <div style={{ fontSize: 13, color: '#555' }}>
          {now.toLocaleTimeString('en-HK', { timeZone: 'Asia/Hong_Kong' })} HKT
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '20px 32px 0', display: 'flex', gap: 8 }}>
        {(['pending', 'published', 'discarded', 'all'] as const).map(f => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            style={{
              padding: '8px 18px', fontSize: 13, cursor: 'pointer', border: 'none',
              background: filter === f ? '#A8842A' : '#111',
              color: filter === f ? '#fff' : '#777',
              fontWeight: filter === f ? 600 : 400,
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
        <div style={{ marginLeft: 'auto', color: '#555', fontSize: 13, alignSelf: 'center' }}>
          {insights.length} article{insights.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Articles list */}
      <div style={{ padding: '20px 32px', maxWidth: 1000 }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#555' }}>Loading...</div>
        ) : insights.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#555' }}>No articles</div>
        ) : (
          insights.map(insight => (
            <div key={insight.id} style={{
              border: '1px solid #1a1a1a', marginBottom: 12,
              background: '#0d0d0d',
            }}>
              {/* Summary row */}
              <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                {/* Heat score */}
                <div style={{
                  minWidth: 52, textAlign: 'center', padding: '8px 0',
                  background: insight.heat_score > 150 ? '#7c2d12' : insight.heat_score > 100 ? '#451a03' : '#111',
                  borderRadius: 4,
                }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#f97316' }}>{insight.heat_score}</div>
                  <div style={{ fontSize: 10, color: '#555', letterSpacing: 1 }}>HEAT</div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#A8842A', letterSpacing: 1 }}>
                      {insight.source_name.toUpperCase()}
                    </span>
                    {insight.status === 'pending' && (
                      <span style={{ fontSize: 11, color: '#555' }}>
                        Deadline: {timeLeft(insight.decision_deadline)}
                      </span>
                    )}
                    {insight.status === 'published' && (
                      <span style={{ fontSize: 11, background: '#14532d', color: '#22c55e', padding: '2px 8px' }}>
                        {insight.author_type === 'jones' ? '✦ Jones Ng' : 'CHIWA Team'}
                      </span>
                    )}
                    {insight.status === 'discarded' && (
                      <span style={{ fontSize: 11, background: '#1c1c1c', color: '#555', padding: '2px 8px' }}>
                        Discarded
                      </span>
                    )}
                  </div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 16, color: '#F7F4EF', fontFamily: 'Georgia, serif', lineHeight: 1.4 }}>
                    {insight.title_en}
                  </h3>
                  <p style={{ margin: '0 0 8px', fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                    {insight.title_zh_hk}
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {insight.tags?.slice(0, 4).map(tag => (
                      <span key={tag} style={{
                        fontSize: 11, background: '#111', border: '1px solid #222',
                        color: '#666', padding: '2px 8px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 160 }}>
                  {insight.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handlePublish(insight, 'jones')}
                        disabled={saving === insight.id}
                        style={{
                          padding: '9px 12px', background: '#A8842A', border: 'none',
                          color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer',
                          letterSpacing: 0.5,
                        }}
                      >
                        ✦ JONES&apos; TAKE
                      </button>
                      <button
                        onClick={() => handlePublish(insight, 'team')}
                        disabled={saving === insight.id}
                        style={{
                          padding: '9px 12px', background: '#111', border: '1px solid #333',
                          color: '#F7F4EF', fontSize: 12, cursor: 'pointer',
                        }}
                      >
                        Publish as CHIWA
                      </button>
                      <button
                        onClick={() => handleDiscard(insight.id)}
                        disabled={saving === insight.id}
                        style={{
                          padding: '9px 12px', background: 'transparent', border: '1px solid #1a1a1a',
                          color: '#555', fontSize: 12, cursor: 'pointer',
                        }}
                      >
                        Discard
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setExpanded(expanded === insight.id ? null : insight.id)}
                    style={{
                      padding: '9px 12px', background: 'transparent', border: '1px solid #1a1a1a',
                      color: '#666', fontSize: 12, cursor: 'pointer',
                    }}
                  >
                    {expanded === insight.id ? 'Collapse ▲' : 'Preview ▼'}
                  </button>
                </div>
              </div>

              {/* Expanded preview */}
              {expanded === insight.id && (
                <div style={{ borderTop: '1px solid #1a1a1a', padding: '24px', background: '#0a0a0a' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#A8842A', letterSpacing: 2, marginBottom: 12 }}>ENGLISH</div>
                      <div style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                        {insight.content_en}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#A8842A', letterSpacing: 2, marginBottom: 12 }}>繁體中文</div>
                      <div style={{ fontSize: 13, color: '#ccc', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                        {insight.content_zh_hk}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 24, padding: '16px', background: '#111', borderLeft: '3px solid #A8842A' }}>
                    <div style={{ fontSize: 11, color: '#A8842A', letterSpacing: 2, marginBottom: 8 }}>GEO SUMMARY</div>
                    <div style={{ fontSize: 13, color: '#aaa', lineHeight: 1.7 }}>{insight.summary_en}</div>
                  </div>
                  <div style={{ marginTop: 16, fontSize: 12, color: '#444' }}>
                    Slug: <code style={{ color: '#666' }}>{insight.slug}</code>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
