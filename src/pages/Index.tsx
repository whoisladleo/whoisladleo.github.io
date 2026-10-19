import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

const channels = [
  { name: 'TikTok', handle: '@whoisladleo', href: 'https://www.tiktok.com/@whoisladleo' },
  { name: 'Instagram', handle: '@whoisladleo', href: 'https://www.instagram.com/whoisladleo' },
  { name: 'YouTube', handle: '@whoisladleo', href: 'https://www.youtube.com/@whoisladleo' },
  { name: 'X', handle: '@whoisladleo', href: 'https://x.com/whoisladleo' },
  { name: 'WhatsApp Channel', handle: 'Denis w AI', href: 'https://whatsapp.com/channel/0029Vb9cSaN47XeIH2y5yA3x' },
];

const help = [
  {
    title: 'Find where AI saves you hours',
    body: 'We go through how your team actually works and pick the few tasks where AI pays off first.',
  },
  {
    title: 'Set up the tools and workflows',
    body: 'Practical setups your staff can use on Monday: prompts, assistants and simple automations.',
  },
  {
    title: 'Train your team to use it well',
    body: 'Hands-on sessions in Swahili or English, built around your own documents and processes.',
  },
];

const ClockRing = () => (
  <div className="relative w-56 h-56 sm:w-72 sm:h-72 shrink-0" aria-hidden="true">
    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="6" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line
          key={i}
          x1="60"
          y1={i % 5 === 0 ? 2 : 4}
          x2="60"
          y2="7"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth={i % 5 === 0 ? 1.2 : 0.6}
          transform={`rotate(${i * 6} 60 60)`}
        />
      ))}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="#F2B705"
        strokeWidth="6"
        strokeLinecap="round"
        pathLength={100}
        className="minute-sweep"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <span className="text-6xl sm:text-7xl font-bold tracking-tight tabular-nums">1:00</span>
      <span className="text-base text-white/70 mt-1">dakika moja</span>
    </div>
  </div>
);

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-sun focus:text-ink">
        Skip to content
      </a>

      <header className="bg-ocean text-white">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold tracking-tight">
            Denis w AI
          </a>
          <div className="flex items-center gap-5 text-sm sm:text-base">
            <a href="#watch" className="hidden sm:inline hover:text-sun">Watch</a>
            <a href="#clinic" className="hidden sm:inline hover:text-sun">AI Business Clinic</a>
            <a href="#work" className="hover:text-sun">Work with me</a>
          </div>
        </nav>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 sm:pt-16 sm:pb-28 flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">
          <div className="max-w-2xl">
            <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(3rem,9vw,6.5rem)]">
              AI kwa Dakika Moja
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-white/85 leading-snug max-w-xl">
              One-minute lessons on using AI for real work, in Swahili and English.
            </p>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              I'm Denis Rwelamila. I build fintech and business software in Tanzania, and I help
              teams here put AI to work without the hype.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://www.tiktok.com/@whoisladleo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sun text-ink font-semibold px-6 py-3 rounded-full hover:brightness-105"
              >
                Watch the series
              </a>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:border-white hover:bg-white/10"
              >
                Book an AI consultation
              </button>
            </div>
          </div>
          <ClockRing />
        </section>
      </header>

      <main id="main">
        <section id="watch" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Follow along</h2>
              <p className="mt-4 text-lg text-muted-ink max-w-md">
                A new short every day. Each one stands on its own: one tool, one idea, one minute.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-5 hover:text-ocean"
                  >
                    <span className="text-xl sm:text-2xl font-semibold">{c.name}</span>
                    <span className="text-muted-ink group-hover:text-ocean">{c.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="clinic" className="bg-sun">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                AI Business Clinic
              </h2>
              <p className="mt-5 text-xl max-w-xl leading-relaxed">
                A 10-week, hands-on programme for business owners and teams who want to use AI
                properly. No lectures, no fluff: you work on your own business every week.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href="https://ellipsis.co.tz/programmes/ai-business-clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink text-white font-semibold px-7 py-4 rounded-full hover:bg-ocean"
              >
                See the programme and sign up
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Work with me</h2>
          <p className="mt-4 text-lg text-muted-ink max-w-2xl">
            AI consultations for businesses in Tanzania and East Africa. Tell me what's slowing your
            team down and I'll tell you honestly whether AI can help.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {help.map((h) => (
              <div key={h.title} className="border-t-4 border-ocean pt-5">
                <h3 className="text-xl font-semibold">{h.title}</h3>
                <p className="mt-3 text-muted-ink leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="bg-ocean text-white font-semibold px-7 py-4 rounded-full hover:bg-ink"
            >
              Send me a message
            </button>
            <a
              href="https://ig.me/m/whoisladleo"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-ocean text-ocean font-semibold px-7 py-4 rounded-full hover:bg-ocean hover:text-white"
            >
              DM me on Instagram
            </a>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <p className="text-lg text-muted-ink max-w-3xl leading-relaxed">
              By day I'm CTO at Tunzaa and Flowteller and CEO of Taskflow OS, building payment,
              travel and business platforms. Everything I teach comes from using AI in that work.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-wrap justify-between gap-4 text-sm">
          <span>© {new Date().getFullYear()} Denis Rwelamila</span>
          <a href="https://www.linkedin.com/in/rwelamiladenis/" target="_blank" rel="noopener noreferrer" className="hover:text-sun">
            LinkedIn
          </a>
        </div>
      </footer>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        subject="AI consultation inquiry"
        defaultMessage=""
      />
    </div>
  );
};

export default Index;
