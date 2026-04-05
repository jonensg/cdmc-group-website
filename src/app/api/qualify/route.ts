import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const goalLabels: Record<string, string> = {
  A: 'Brand Awareness — get more people to discover them',
  B: 'Customer Advocacy — build a positive, trusted image',
  C: 'Crisis Management — protect against negative PR',
  D: 'Direct Acquisition — generate leads and close deals',
  E: 'All of the Above — full-spectrum reputation management',
};

const budgetLabels: Record<string, string> = {
  A: 'No formal budget yet',
  B: 'Under HK$10,000 / month',
  C: 'HK$20,000 – 50,000 / month',
  D: 'HK$50,000 – 100,000 / month',
  E: 'Over HK$100,000 / month',
};

const clientTypeLabels: Record<string, string> = {
  A: 'New / Awareness-focused',
  B: 'Defensive / Reputation-building',
  C: 'Risk-aware',
  D: 'Results-oriented',
  E: 'Ideal CDMC Client — Full Spectrum',
};

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { competitors, wantCompetitorMentions, wantBrandMentions, socialMediaGoal, ormBudget } = body;

  const goalLabel = goalLabels[socialMediaGoal] ?? socialMediaGoal;
  const budgetLabel = budgetLabels[ormBudget] ?? ormBudget;
  const clientType = clientTypeLabels[socialMediaGoal] ?? 'Unknown';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Georgia', serif; background: #F7F4EF; color: #0F0F0F; margin: 0; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 48px; }
    .rule { width: 32px; height: 1px; background: #A8842A; margin-bottom: 32px; }
    h1 { font-size: 28px; margin: 0 0 8px; font-weight: 400; }
    .badge { display: inline-block; background: #A8842A; color: #fff; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; margin-bottom: 32px; }
    .section-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #8A8078; margin-bottom: 6px; font-family: sans-serif; }
    .value { font-size: 16px; margin-bottom: 24px; color: #0F0F0F; }
    .divider { border: none; border-top: 1px solid rgba(15,15,15,0.08); margin: 24px 0; }
    .competitors { display: flex; gap: 12px; flex-wrap: wrap; }
    .competitor-tag { background: #EDEAE4; padding: 6px 14px; font-size: 14px; }
    .yes { color: #2A7A2A; font-weight: 600; }
    .no { color: #8A8078; }
    .footer { margin-top: 40px; font-size: 11px; color: #8A8078; font-family: sans-serif; letter-spacing: 0.05em; }
  </style>
</head>
<body>
  <div class="container">
    <div class="rule"></div>
    <h1>New KYC Lead</h1>
    <div class="badge">Client Type: ${clientType}</div>

    <hr class="divider" />

    <div class="section-label">Competitors Named</div>
    <div class="competitors">
      ${competitors.filter(Boolean).map((c: string) => `<span class="competitor-tag">${c}</span>`).join('')}
    </div>

    <hr class="divider" />

    <div class="section-label">Interested in Competitor Mention Tracking?</div>
    <div class="value ${wantCompetitorMentions ? 'yes' : 'no'}">${wantCompetitorMentions ? 'Yes' : 'No'}</div>

    <div class="section-label">Interested in Brand Mention Tracking?</div>
    <div class="value ${wantBrandMentions ? 'yes' : 'no'}">${wantBrandMentions ? 'Yes' : 'No'}</div>

    <hr class="divider" />

    <div class="section-label">Primary Social Media Goal</div>
    <div class="value"><strong>${socialMediaGoal}.</strong> ${goalLabel}</div>

    <div class="section-label">Monthly ORM Budget</div>
    <div class="value"><strong>${ormBudget}.</strong> ${budgetLabel}</div>

    <hr class="divider" />
    <div class="footer">Submitted via cdmcgroup.com KYC Form</div>
  </div>
</body>
</html>
  `.trim();

  try {
    await resend.emails.send({
      from: 'CDMC KYC <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL ?? 'hello@cdmcgroup.com',
      subject: `New KYC Lead — ${socialMediaGoal}: ${budgetLabel}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
