'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const GREETING = "Hi, I'm CDMC's AI advisor. Ask me anything about online reputation management, social intelligence, or our services across Asia.";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [configured, setConfigured] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'model', text: GREETING }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: 'user', text };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated
            .filter(m => m.role !== 'model' || m.text !== GREETING)
            .map(m => ({
              role: m.role,
              parts: [{ text: m.text }],
            })),
        }),
      });

      const data = await res.json();
      if (res.status === 503) {
        setConfigured(false);
        setMessages(prev => prev.slice(0, -1));
        return;
      }
      setMessages(prev => [...prev, { role: 'model', text: data.text ?? 'Sorry, something went wrong.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: 'Connection error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center transition-all duration-300"
        style={{
          background: open ? '#4A4540' : '#0F0F0F',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        }}
        aria-label="Open AI chat"
      >
        {open
          ? <X size={20} style={{ color: '#F7F4EF' }} />
          : <MessageCircle size={20} style={{ color: '#F7F4EF' }} />
        }
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] flex flex-col"
          style={{
            background: '#F7F4EF',
            boxShadow: '0 8px 48px rgba(0,0,0,0.16)',
            maxHeight: '520px',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{ borderBottom: '1px solid rgba(15,15,15,0.08)', background: '#0F0F0F' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#A8842A' }} />
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: '#F7F4EF' }}>CDMC AI Advisor</p>
              <p className="text-[10px]" style={{ color: 'rgba(247,244,239,0.4)' }}>Powered by Gemini</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4" style={{ minHeight: '300px', maxHeight: '360px' }}>
            {!configured ? (
              <p className="text-sm text-center py-8" style={{ color: '#8A8078' }}>
                AI chat is not configured yet. Please add your Gemini API key.
              </p>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[80%] px-4 py-3 text-sm leading-relaxed"
                      style={{
                        background: msg.role === 'user' ? '#0F0F0F' : '#EDEAE4',
                        color: msg.role === 'user' ? '#F7F4EF' : '#0F0F0F',
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-3" style={{ background: '#EDEAE4' }}>
                      <Loader2 size={14} className="animate-spin" style={{ color: '#8A8078' }} />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Input */}
          {configured && (
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask a question…"
                className="flex-1 text-sm bg-transparent outline-none"
                style={{ color: '#0F0F0F' }}
                disabled={loading}
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-8 h-8 flex items-center justify-center transition-opacity disabled:opacity-30"
                style={{ background: '#0F0F0F' }}
              >
                <Send size={13} style={{ color: '#F7F4EF' }} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
