import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

const channels = [
  { name: 'TikTok', handle: '@whoisladleo', href: 'https://www.tiktok.com/@whoisladleo' },
  { name: 'Instagram', handle: '@whoisladleo', href: 'https://www.instagram.com/whoisladleo' },
  { name: 'YouTube', handle: '@whoisladleo', href: 'https://www.youtube.com/@whoisladleo' },
  { name: 'X', handle: '@whoisladleo', href: 'https://x.com/whoisladleo' },
  { name: 'WhatsApp Channel', handle: 'whoisladleo', href: 'https://whatsapp.com/channel/0029Vb9cSaN47XeIH2y5yA3x' },
];

const pains = [
  {
    title: 'The same questions, all day',
    body: 'Prices, availability, "where is my order?" Your staff answer them one WhatsApp message at a time while the real work waits.',
  },
  {
    title: 'Reports that eat a whole day',
    body: 'Someone copies numbers from three places into one spreadsheet every week. It is slow, it is boring, and it still has mistakes.',
  },
  {
    title: 'You tried ChatGPT. Nothing changed.',
    body: 'A few people use it to write emails. The business runs exactly like it did last year.',
  },
];

const steps = [
  {
    title: 'Find the hours',
    body: 'I sit with your team, map how the work really gets done, and pick the two or three tasks where AI pays off fastest. You get a short plan, not a 60-page report.',
  },
  {
    title: 'Set it up',
    body: 'We build it into the tools you already use: WhatsApp, Google Workspace, Excel, your own system. Prompts, assistants and simple automations your staff can use the next morning.',
  },
  {
    title: 'Make it stick',
    body: 'Hands-on training in Swahili or English, using your own documents and your own customers. People keep using what they understand.',
  },
];

const reasons = [
  {
    title: 'I build real systems',
    body: "I'm CTO at Tunzaa and Flowteller and CEO of Taskflow OS. I put AI into payment, travel and business platforms that real customers use every day.",
  },
  {
    title: 'I teach it in public',
    body: 'AI kwa Dakika Moja breaks down one practical AI idea a day, in plain Swahili and English. Watch a few and you will know how I explain things before we ever meet.',
  },
  {
    title: "I'll tell you when AI is the wrong answer",
    body: 'Some problems need a better process, not a new tool. If that is your situation, I will say so and save you the money.',
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
  const [form, setForm] = useState<{ open: boolean; subject: string; message: string }>({
    open: false,
    subject: 'AI consultation inquiry',
    message: '',
  });

  const openConsultation = () =>
    setForm({ open: true, subject: 'AI consultation inquiry', message: '' });

  const openTask = () =>
    setForm({
      open: true,
      subject: 'Can AI do this task?',
      message: 'The task my team spends too much time on is: ',
    });

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
            <a href="#how" className="hidden sm:inline hover:text-sun">How it works</a>
            <a href="#clinic" className="hidden sm:inline hover:text-sun">AI Business Clinic</a>
            <a href="#watch" className="hidden sm:inline hover:text-sun">Watch</a>
            <button onClick={openConsultation} className="font-semibold text-sun hover:underline">
              Book a consultation
            </button>
          </div>
        </nav>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 sm:pt-16 sm:pb-28 flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">
          <div className="max-w-2xl">
            <h1 className="font-bold leading-[1.02] tracking-tight text-[clamp(2.6rem,7vw,5rem)]">
              Your team is doing work AI could finish in a minute.
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-white/85 leading-snug max-w-xl">
              I help businesses in Tanzania find those hours, set AI up inside the tools they already
              use, and train their people to actually use it. In Swahili or English.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={openConsultation}
                className="bg-sun text-ink font-semibold px-6 py-3 rounded-full hover:brightness-105"
              >
                Book an AI consultation
              </button>
              <a
                href="#how"
                className="border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:border-white hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-white/65">
              Denis Rwelamila. CTO, founder, and host of AI kwa Dakika Moja.
            </p>
          </div>
          <ClockRing />
        </section>
      </header>

      <main id="main">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            Does this sound like your office?
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {pains.map((p) => (
              <div key={p.title}>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-ink leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl sm:text-2xl font-semibold max-w-3xl leading-snug">
            None of this needs more staff. It needs the right AI set up in the right place, and a
            team that knows how to use it.
          </p>
        </section>

        <section id="how" className="bg-white border-y border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How we work together</h2>
            <p className="mt-4 text-lg text-muted-ink max-w-2xl">
              Three steps. The first one already gives you something you can use.
            </p>
            <ol className="mt-12 grid md:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <li key={s.title} className="border-t-4 border-ocean pt-5">
                  <span className="text-5xl font-bold text-sun tabular-nums" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-ink leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <button
                onClick={openConsultation}
                className="bg-ocean text-white font-semibold px-7 py-4 rounded-full hover:bg-ink"
              >
                Book an AI consultation
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why work with me</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-muted-ink leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="clinic" className="bg-sun">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Rather learn it yourself?
              </h2>
              <p className="mt-5 text-xl max-w-xl leading-relaxed">
                The AI Business Clinic is 10 weeks of hands-on work for owners and teams. Every week
                you take one real problem from your business and leave with it solved. No lectures,
                no theory you will forget by Friday.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href="https://ellipsis.co.tz/programmes/ai-business-clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink text-white font-semibold px-7 py-4 rounded-full hover:bg-ocean"
              >
                Join the AI Business Clinic
              </a>
            </div>
          </div>
        </section>

        <section id="watch" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Not ready to talk? Watch first.
              </h2>
              <p className="mt-4 text-lg text-muted-ink max-w-md">
                AI kwa Dakika Moja: one practical AI idea a day, in under a minute. Pick one and
                try it this afternoon.
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

        <section className="bg-ocean text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
              Tell me one task your team hates doing.
            </h2>
            <p className="mt-5 text-xl text-white/85 max-w-2xl leading-relaxed">
              I'll reply with whether AI can take it off their plate, and roughly how. No sales
              pitch, just a straight answer.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={openTask}
                className="bg-sun text-ink font-semibold px-7 py-4 rounded-full hover:brightness-105"
              >
                Send me the task
              </button>
              <a
                href="https://ig.me/m/whoisladleo"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/60 text-white font-semibold px-7 py-4 rounded-full hover:border-white hover:bg-white/10"
              >
                DM me on Instagram
              </a>
            </div>
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
        key={form.subject + String(form.open)}
        isOpen={form.open}
        onClose={() => setForm((f) => ({ ...f, open: false }))}
        subject={form.subject}
        defaultMessage={form.message}
      />
    </div>
  );
};

export default Index;
