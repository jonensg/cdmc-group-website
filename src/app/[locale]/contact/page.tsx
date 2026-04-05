'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const industries = [
  'Finance & Insurance',
  'E-Commerce & Retail',
  'Aesthetics & Medical Beauty',
  'Technology',
  'Hospitality & Tourism',
  'Education',
  'Other',
];

const services = [
  'Online Reputation Management',
  'Social Intelligence & Analytics',
  'KOC Seeding & Word-of-Mouth',
  'Crisis Management',
  'Not sure yet',
];

const offices = [
  { city: 'Hong Kong', address: 'Unit 2, 10/F, Tower 1, Admiralty Centre, 18 Harcourt Rd, Admiralty', tel: '+852 3001 8888' },
  { city: 'Malaysia', address: 'Kuala Lumpur', tel: null },
  { city: 'Singapore', address: 'Singapore', tel: null },
  { city: 'Taiwan', address: 'Taipei', tel: null },
  { city: 'Toronto', address: 'Toronto, Canada', tel: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', company: '', email: '', phone: '', industry: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    background: '#F7F4EF',
    border: '1px solid rgba(15,15,15,0.12)',
    color: '#0F0F0F',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: 2,
    color: '#8A8078',
    display: 'block',
    marginBottom: 6,
    textTransform: 'uppercase',
  };

  return (
    <>
      <Header />
      <main style={{ background: '#080808', minHeight: '100vh', paddingTop: '80px' }}>

        {/* Hero */}
        <section style={{
          padding: '72px 48px 64px',
          maxWidth: 1080,
          margin: '0 auto',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: '#A8842A', marginBottom: 16 }}>
            CONTACT
          </div>
          <h1 style={{
            fontFamily: 'Georgia, "DM Serif Display", serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: '#F7F4EF',
            margin: '0 0 16px',
            lineHeight: 1.15,
          }}>
            Let&apos;s talk about<br />
            your reputation.
          </h1>
          <p style={{ fontSize: 17, color: '#555', maxWidth: 480, margin: 0, lineHeight: 1.7 }}>
            Whether you&apos;re ready to start or just exploring — reach out and we&apos;ll
            come back within one business day.
          </p>
        </section>

        {/* Main grid */}
        <div style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: '64px 48px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 72,
        }}>

          {/* Form */}
          <div>
            {status === 'sent' ? (
              <div style={{
                padding: '48px 40px',
                background: '#0d0d0d',
                border: '1px solid #1a1a1a',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>✦</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 24,
                  color: '#F7F4EF',
                  margin: '0 0 12px',
                }}>
                  Message received.
                </h2>
                <p style={{ fontSize: 15, color: '#666', margin: '0 0 32px', lineHeight: 1.7 }}>
                  We&apos;ll review your enquiry and reply within one business day.
                  For urgent matters, WhatsApp us directly.
                </p>
                <a
                  href="https://wa.me/85230018888"
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    background: '#25D366',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 13,
                    fontWeight: 600,
                    marginRight: 12,
                  }}
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    padding: '12px 28px',
                    background: 'transparent',
                    border: '1px solid #333',
                    color: '#666',
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      style={inputStyle}
                      placeholder="Jones Ng"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => set('company', e.target.value)}
                      style={inputStyle}
                      placeholder="CDMC Group"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      style={inputStyle}
                      placeholder="hello@brand.com"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      style={inputStyle}
                      placeholder="+852 xxxx xxxx"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Industry</label>
                    <select
                      value={form.industry}
                      onChange={e => set('industry', e.target.value)}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select industry</option>
                      {industries.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Service Interest</label>
                    <select
                      value={form.service}
                      onChange={e => set('service', e.target.value)}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    placeholder="Tell us about your brand, your challenge, or what you'd like to explore..."
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 13, color: '#ef4444', margin: 0 }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      padding: '14px 36px',
                      background: '#A8842A',
                      color: '#fff',
                      border: 'none',
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: status === 'sending' ? 0.7 : 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <span style={{ fontSize: 12, color: '#444' }}>
                    We reply within 1 business day
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

            {/* Quick actions */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 20 }}>
                QUICK CONTACT
              </div>
              <a
                href="https://wa.me/85230018888"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '18px 20px',
                  background: '#0d0d0d',
                  border: '1px solid #1a1a1a',
                  textDecoration: 'none',
                  marginBottom: 10,
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{
                  width: 36, height: 36, background: '#25D366',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>💬</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#F7F4EF', marginBottom: 2 }}>
                    WhatsApp
                  </div>
                  <div style={{ fontSize: 12, color: '#555' }}>+852 3001 8888</div>
                </div>
              </a>
              <a
                href="mailto:hello@cdmcgroup.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '18px 20px',
                  background: '#0d0d0d',
                  border: '1px solid #1a1a1a',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: 36, height: 36, background: '#A8842A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>✉</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#F7F4EF', marginBottom: 2 }}>
                    Email
                  </div>
                  <div style={{ fontSize: 12, color: '#555' }}>hello@cdmcgroup.com</div>
                </div>
              </a>
            </div>

            {/* Free consultation CTA */}
            <div style={{
              padding: '28px',
              background: '#0d0d0d',
              border: '1px solid #1a1a1a',
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: '#A8842A', marginBottom: 12 }}>
                PREFERRED
              </div>
              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 18,
                color: '#F7F4EF',
                margin: '0 0 10px',
              }}>
                Book a Free<br />Consultation
              </h3>
              <p style={{ fontSize: 13, color: '#666', margin: '0 0 20px', lineHeight: 1.7 }}>
                30-minute strategy session. We&apos;ll audit your current brand reputation
                and identify the biggest opportunities.
              </p>
              <Link href="/qualify" style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                background: '#A8842A',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}>
                Start Here →
              </Link>
            </div>

            {/* Offices */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: '#A8842A', marginBottom: 20 }}>
                OFFICES
              </div>
              {offices.map(office => (
                <div key={office.city} style={{
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: '1px solid #111',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#F7F4EF', marginBottom: 4 }}>
                    {office.city}
                  </div>
                  <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>{office.address}</div>
                  {office.tel && (
                    <a href={`tel:${office.tel.replace(/\s/g, '')}`}
                      style={{ fontSize: 12, color: '#A8842A', textDecoration: 'none' }}>
                      {office.tel}
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
