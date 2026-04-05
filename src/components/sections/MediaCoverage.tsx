const mediaItems = [
  {
    outlet: 'TVB 新聞',
    outletEn: 'TVB News',
    type: 'Television',
    description: 'Featured in TVB 新聞透視 — Hong Kong\'s most-watched news programme covering CDMC\'s influence marketing expertise.',
    url: 'https://news.tvb.com/tc/local/68a889be6d225b36177c77e3',
  },
  {
    outlet: '香港本地媒體',
    outletEn: 'Hong Kong Local Press',
    type: 'Print & Digital',
    description: 'Multiple feature coverages across major Hong Kong media outlets, recognising CDMC as the city\'s leading KOC marketing agency.',
    url: null,
  },
  {
    outlet: '內地媒體報道',
    outletEn: 'Mainland China Media',
    type: 'Digital Media',
    description: 'Featured across prominent mainland China digital media for GBA cross-border marketing innovation and Xiaohongshu expertise.',
    url: null,
  },
];

const founderStats = [
  { value: '220K+', label: 'Xiaohongshu followers' },
  { value: '#1', label: 'Cantonese Xiaohongshu educator' },
  { value: '18yr', label: 'China digital marketing' },
];

const founderChannels = [
  { name: 'YouTube', handle: '@jjdigitalchannel', url: 'https://www.youtube.com/@jjdigitalchannel' },
  { name: '小紅書', handle: '中士哥的草稿', url: null },
  { name: '視頻號', handle: '中士哥 · HeyYo香港', url: null },
];

const trainingClients = [
  { name: 'Hong Kong TDC', note: '香港好物節 — Official Instructor' },
  { name: 'HSBC', note: 'Digital Marketing Training' },
  { name: '香港廠商會', note: 'HKFMF — Social Media Workshop' },
  { name: 'HKGCC', note: 'HK General Chamber of Commerce' },
  { name: 'HKMA', note: 'HK Management Association' },
];

export default function MediaCoverage() {
  return (
    <section style={{ background: '#EDEAE4' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-5 mb-8">
              <div className="w-8 h-px" style={{ background: '#A8842A' }} />
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#A8842A' }}>
                Media Recognition
              </p>
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              Recognised by Asia's Leading Media
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
              From TVB News to mainland China digital press — CDMC's approach to KOC marketing and social intelligence has been independently recognised across the region.
            </p>
          </div>
        </div>

        {/* Media rows */}
        <div className="mb-20">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-start"
              style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }}
            >
              {/* Outlet */}
              <div className="lg:col-span-3">
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#A8842A' }}>
                  {item.type}
                </p>
                <p
                  className="text-2xl"
                  style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
                >
                  {item.outlet}
                </p>
                <p className="text-xs mt-1" style={{ color: '#8A8078' }}>{item.outletEn}</p>
              </div>

              {/* Description */}
              <div className="lg:col-span-7 lg:pl-4">
                <p className="text-base leading-relaxed" style={{ color: '#4A4540' }}>
                  {item.description}
                </p>
              </div>

              {/* Link */}
              <div className="lg:col-span-2 flex items-center justify-end">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-60"
                    style={{ color: '#0F0F0F' }}
                  >
                    Watch →
                  </a>
                ) : (
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                    Press
                  </span>
                )}
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
        </div>

        {/* Founder recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-4">

          {/* Left: Bio + channels */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#A8842A' }}>
              Founder · Jones Ng
            </p>
            <p
              className="text-2xl sm:text-3xl leading-tight mb-5"
              style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}
            >
              "小紅書第一人"
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A4540' }}>
              Recognised by Hong Kong media as the city's foremost Xiaohongshu authority. Creator of the first Cantonese Xiaohongshu tutorial series and founder of 香港購物血拼大全 — one of HK's most-followed WeChat public accounts.
            </p>

            {/* Channels */}
            <div className="space-y-3 mb-8">
              {founderChannels.map(ch => (
                <div key={ch.name} className="flex items-center gap-4">
                  <span className="text-xs tracking-widest uppercase w-16 shrink-0" style={{ color: '#A8842A' }}>
                    {ch.name}
                  </span>
                  {ch.url ? (
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-opacity hover:opacity-60"
                      style={{ color: '#0F0F0F' }}
                    >
                      {ch.handle}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: '#4A4540' }}>{ch.handle}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-8" style={{ borderTop: '1px solid rgba(15,15,15,0.08)' }}>
              {founderStats.map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl mb-1" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: '#8A8078' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Training clients */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#A8842A' }}>
              Training & Speaking Engagements
            </p>
            <div>
              {trainingClients.map((client, i) => (
                <div
                  key={client.name}
                  className="flex items-start justify-between py-5"
                  style={{ borderTop: i === 0 ? '1px solid rgba(15,15,15,0.1)' : '1px solid rgba(15,15,15,0.1)' }}
                >
                  <div>
                    <p className="text-base font-medium" style={{ fontFamily: 'var(--font-dm-serif)', color: '#0F0F0F' }}>
                      {client.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#8A8078' }}>{client.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(15,15,15,0.1)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
