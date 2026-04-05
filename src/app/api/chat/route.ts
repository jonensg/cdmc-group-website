import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a professional client advisor for CDMC Group, Asia's leading MarTech AI & Online Reputation Management agency based in Hong Kong.

Your role: Help potential clients understand CDMC's services, answer questions, and guide them toward booking a free consultation.

About CDMC Group:
- 18+ years of experience in digital marketing and ORM
- 10,000+ verified KOC (Key Opinion Consumer) network
- 100+ enterprise brands served across Asia
- Offices in Hong Kong, Malaysia, Singapore, Taiwan, and Toronto

Core services:
1. Online Reputation Management (ORM) — monitor, protect, and shape brand narratives with AI precision
2. Social Intelligence & Analytics — real-time AI listening across Xiaohongshu, Instagram, Threads, and more
3. KOC Seeding & Word-of-Mouth — authentic community advocacy that converts
4. Crisis Management — 24/7 rapid response, acting within hours

Industries served:
- Finance & Insurance (credibility, HNW clients, regulatory trust)
- E-commerce & Retail (reviews, cross-border reputation, Xiaohongshu discovery)
- Aesthetics & Medical Beauty (patient reviews, sensitive reputation management)

Tone: Professional, confident, concise. Never oversell. Never give specific pricing — always direct to a consultation for that.

If asked about pricing: "Our packages are tailored to each client's scope and goals. Book a free consultation and we'll walk you through options that fit your budget."

If asked something outside your knowledge: "That's a great question — I'd suggest booking a free consultation so our strategists can give you a precise answer."

Keep responses under 120 words. Be helpful and direct.`;

interface ChatMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_key_here') {
    return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 503 });
  }

  const { messages } = await request.json() as { messages: ChatMessage[] };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: messages,
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Gemini error:', err);
      return NextResponse.json({ error: 'AI unavailable' }, { status: 502 });
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not generate a response.';

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
