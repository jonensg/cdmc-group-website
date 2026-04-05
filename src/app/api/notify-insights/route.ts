import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { count } = await req.json();

  const resendKey = process.env.RESEND_API_KEY;
  const jonesEmail = process.env.JONES_EMAIL || 'jones@cdmcgroup.com';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cdmcgroup.com';

  if (!resendKey) {
    console.warn('RESEND_API_KEY not set — skipping email notification');
    return NextResponse.json({ success: true, skipped: true });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'CDMC Insights <noreply@cdmcgroup.com>',
      to: jonesEmail,
      subject: `📰 ${count} new insight${count > 1 ? 's' : ''} ready for review`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #080808; color: #F7F4EF;">
          <h1 style="font-size: 24px; margin-bottom: 8px; color: #F7F4EF;">Good morning, Jones.</h1>
          <p style="font-size: 16px; color: #999; margin-bottom: 24px;">
            ${count} article${count > 1 ? 's have' : ' has'} been scraped and rewritten for today's Insights column.
          </p>
          <p style="font-size: 15px; color: #F7F4EF; margin-bottom: 16px;">
            You have until <strong>9:00 AM HKT</strong> to:
          </p>
          <ul style="font-size: 15px; color: #ccc; margin-bottom: 32px; padding-left: 20px; line-height: 1.8;">
            <li>Mark articles as your <strong>Founder's Take</strong> (published under Jones Ng)</li>
            <li>Keep as <strong>CHIWA Team</strong> content</li>
            <li>Discard any that aren't relevant</li>
          </ul>
          <a href="${siteUrl}/admin/insights"
             style="display: inline-block; background: #A8842A; color: #fff; text-decoration: none; padding: 14px 28px; font-size: 15px; font-weight: 600; letter-spacing: 0.5px;">
            Review Now →
          </a>
          <p style="font-size: 13px; color: #555; margin-top: 40px;">
            Articles not reviewed by 9:00 AM will auto-publish as CHIWA Team content.
          </p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
