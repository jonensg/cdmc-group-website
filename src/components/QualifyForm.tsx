'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface FormData {
  competitors: [string, string, string];
  wantCompetitorMentions: boolean | null;
  wantBrandMentions: boolean | null;
  socialMediaGoal: string | null;
  ormBudget: string | null;
}

const goalOptions = [
  { key: 'A', label: 'Brand Awareness', sub: 'Get more people to discover you' },
  { key: 'B', label: 'Customer Advocacy', sub: 'Build a positive, trusted image' },
  { key: 'C', label: 'Crisis Management', sub: 'Protect against negative PR' },
  { key: 'D', label: 'Direct Acquisition', sub: 'Generate leads and close deals' },
  { key: 'E', label: 'All of the Above', sub: 'Full-spectrum reputation management' },
];

const budgetOptions = [
  { key: 'A', label: 'No formal budget yet' },
  { key: 'B', label: 'Under HK$10,000 / month' },
  { key: 'C', label: 'HK$20,000 – 50,000 / month' },
  { key: 'D', label: 'HK$50,000 – 100,000 / month' },
  { key: 'E', label: 'Over HK$100,000 / month' },
];

const TOTAL_STEPS = 5;

export default function QualifyForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    competitors: ['', '', ''],
    wantCompetitorMentions: null,
    wantBrandMentions: null,
    socialMediaGoal: null,
    ormBudget: null,
  });

  const setCompetitor = (i: number, val: string) => {
    const next = [...data.competitors] as [string, string, string];
    next[i] = val;
    setData({ ...data, competitors: next });
  };

  const next = () => setStep(s => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start max-w-xl">
        <div className="w-8 h-px mb-10" style={{ background: '#A8842A' }} />
        <div
          className="w-12 h-12 flex items-center justify-center mb-8"
          style={{ background: '#0F0F0F' }}
        >
          <Check size={20} style={{ color: '#F7F4EF' }} />
        </div>
        <h2
          className="text-4xl sm:text-5xl leading-[1.05] mb-6"
          style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
        >
          Thank you.
        </h2>
        <p className="text-base leading-relaxed mb-4" style={{ color: '#4A4540' }}>
          Our strategists will review your answers and reach out within one business day with a tailored overview.
        </p>
        <p className="text-sm" style={{ color: '#8A8078' }}>
          No commitment required — this is a discovery conversation.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      {/* Progress */}
      <div className="flex items-center gap-5 mb-14">
        <div className="w-8 h-px" style={{ background: '#A8842A' }} />
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
          {String(step).padStart(2, '0')} / {String(TOTAL_STEPS).padStart(2, '0')}
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(15,15,15,0.1)' }}>
          <div
            className="h-full transition-all duration-500"
            style={{ background: '#A8842A', width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1 — Competitors */}
      {step === 1 && (
        <div>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            Who are your 3 main competitors?
          </h2>
          <p className="text-sm mb-10" style={{ color: '#8A8078' }}>
            This helps us benchmark your brand's current standing.
          </p>
          <div className="space-y-4 mb-10">
            {[0, 1, 2].map(i => (
              <div key={i}>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#8A8078' }}>
                  Competitor {i + 1}
                </label>
                <input
                  type="text"
                  value={data.competitors[i]}
                  onChange={e => setCompetitor(i, e.target.value)}
                  placeholder={`e.g. Brand ${String.fromCharCode(65 + i)}`}
                  className="w-full px-0 py-3 text-base outline-none bg-transparent"
                  style={{
                    borderBottom: '1px solid rgba(15,15,15,0.2)',
                    color: '#0F0F0F',
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={next}
            disabled={!data.competitors[0].trim()}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity disabled:opacity-30"
            style={{ background: '#0F0F0F', color: '#F7F4EF' }}
          >
            Continue <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Step 2 — Competitor mentions */}
      {step === 2 && (
        <div>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            Want to know how many times your competitors were mentioned online in the past 30–90 days?
          </h2>
          <p className="text-sm mb-10" style={{ color: '#8A8078' }}>
            Our social intelligence can surface these numbers instantly.
          </p>
          <div className="flex gap-4 mb-10">
            {[true, false].map(val => (
              <button
                key={String(val)}
                onClick={() => { setData({ ...data, wantCompetitorMentions: val }); next(); }}
                className="px-10 py-4 text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  background: data.wantCompetitorMentions === val ? '#0F0F0F' : 'transparent',
                  color: data.wantCompetitorMentions === val ? '#F7F4EF' : '#0F0F0F',
                  border: '1px solid rgba(15,15,15,0.2)',
                }}
              >
                {val ? 'Yes' : 'No'}
              </button>
            ))}
          </div>
          <button onClick={back} className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
            <ArrowLeft size={12} /> Back
          </button>
        </div>
      )}

      {/* Step 3 — Brand mentions */}
      {step === 3 && (
        <div>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            Want to know how often your brand appears on social media in the past 30–90 days?
          </h2>
          <p className="text-sm mb-10" style={{ color: '#8A8078' }}>
            Including mentions, tags, and commentary across major platforms.
          </p>
          <div className="flex gap-4 mb-10">
            {[true, false].map(val => (
              <button
                key={String(val)}
                onClick={() => { setData({ ...data, wantBrandMentions: val }); next(); }}
                className="px-10 py-4 text-sm font-semibold tracking-wide transition-all duration-200"
                style={{
                  background: data.wantBrandMentions === val ? '#0F0F0F' : 'transparent',
                  color: data.wantBrandMentions === val ? '#F7F4EF' : '#0F0F0F',
                  border: '1px solid rgba(15,15,15,0.2)',
                }}
              >
                {val ? 'Yes' : 'No'}
              </button>
            ))}
          </div>
          <button onClick={back} className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
            <ArrowLeft size={12} /> Back
          </button>
        </div>
      )}

      {/* Step 4 — Social media goal */}
      {step === 4 && (
        <div>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            What is your primary goal for social media?
          </h2>
          <p className="text-sm mb-10" style={{ color: '#8A8078' }}>
            Select the one that best describes where you are right now.
          </p>
          <div className="space-y-3 mb-10">
            {goalOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => { setData({ ...data, socialMediaGoal: opt.key }); next(); }}
                className="w-full flex items-center gap-5 px-6 py-5 text-left transition-all duration-200"
                style={{
                  background: data.socialMediaGoal === opt.key ? '#0F0F0F' : 'transparent',
                  border: '1px solid rgba(15,15,15,0.15)',
                  color: data.socialMediaGoal === opt.key ? '#F7F4EF' : '#0F0F0F',
                }}
              >
                <span
                  className="text-xs font-medium tracking-widest shrink-0"
                  style={{ color: data.socialMediaGoal === opt.key ? '#A8842A' : '#A8842A' }}
                >
                  {opt.key}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{opt.label}</span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{ color: data.socialMediaGoal === opt.key ? 'rgba(247,244,239,0.6)' : '#8A8078' }}
                  >
                    {opt.sub}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <button onClick={back} className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
            <ArrowLeft size={12} /> Back
          </button>
        </div>
      )}

      {/* Step 5 — Budget */}
      {step === 5 && (
        <div>
          <h2
            className="text-3xl sm:text-4xl leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
          >
            What is your approximate monthly ORM budget?
          </h2>
          <p className="text-sm mb-10" style={{ color: '#8A8078' }}>
            This helps us recommend the right scope of engagement.
          </p>
          <div className="space-y-3 mb-10">
            {budgetOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setData({ ...data, ormBudget: opt.key })}
                className="w-full flex items-center gap-5 px-6 py-5 text-left transition-all duration-200"
                style={{
                  background: data.ormBudget === opt.key ? '#0F0F0F' : 'transparent',
                  border: '1px solid rgba(15,15,15,0.15)',
                  color: data.ormBudget === opt.key ? '#F7F4EF' : '#0F0F0F',
                }}
              >
                <span className="text-xs font-medium tracking-widest shrink-0" style={{ color: '#A8842A' }}>
                  {opt.key}
                </span>
                <span className="text-sm font-semibold">{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={handleSubmit}
              disabled={!data.ormBudget || submitting}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-opacity disabled:opacity-30"
              style={{ background: '#0F0F0F', color: '#F7F4EF' }}
            >
              {submitting ? 'Sending…' : 'Submit'} {!submitting && <ArrowRight size={14} />}
            </button>
            <button onClick={back} className="inline-flex items-center gap-2 text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
              <ArrowLeft size={12} /> Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
