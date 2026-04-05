import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, company, email, phone, industry, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Georgia', serif; background: #F7F4EF; color: #0F0F0F; margin: 0; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 48px; }
    .rule { width: 32px; height: 1px; background: #A8842A; margin-bottom: 32px; }
    h1 { font-size: 26px; margin: 0 0 6px; font-weight: 400; }
    .sub { font-size: 13px; color: #8A8078; margin-bottom: 32px; font-family: sans-serif; }
    .label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #8A8078; margin-bottom: 5px; font-family: sans-serif; }
    .value { font-size: 16px; margin-bottom: 20px; color: #0F0F0F; }
    .message-box { background: #F7F4EF; padding: 20px; font-size: 15px; line-height: 1.7; margin-bottom: 20px; }
    hr { border: none; border-top: 1px solid rgba(15,15,15,0.08); margin: 20px 0; }
    .footer { margin-top: 40px; font-size: 11px; color: #8A8078; font-family: sans-serif; }
  </style>
</head>
<body>
  <div class="container">
    <div class="rule"></div>
    <h1>New Contact Enquiry</h1>
    <div class="sub">Submitted via cdmcgroup.com</div>
    <hr />
    <div class="label">Name</div>
    <div class="value">${name}</div>
    ${company ? `<div class="label">Company</div><div class="value">${company}</div>` : ''}
    <div class="label">Email</div>
    <div class="value"><a href="mailto:${email}" style="color:#A8842A">${email}</a></div>
    ${phone ? `<div class="label">Phone</div><div class="value">${phone}</div>` : ''}
    ${industry ? `<div class="label">Industry</div><div class="value">${industry}</div>` : ''}
    ${service ? `<div class="label">Service Interest</div><div class="value">${service}</div>` : ''}
    <hr />
    <div class="label">Message</div>
    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
    <div class="footer">CDMC Group Contact Form · cdmcgroup.com</div>
  </div>
</body>
</html>`.trim();

  try {
    await resend.emails.send({
      from: 'CDMC Contact <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL ?? 'hello@cdmcgroup.com',
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
