export default function Home() {
  const faqs = [
    {
      q: 'How does the salary data get extracted?',
      a: 'We scrape LinkedIn job postings using AI-powered parsing to identify and normalize salary ranges, even when listed in different formats or currencies.'
    },
    {
      q: 'How fresh is the data?',
      a: 'Job postings are scraped continuously. Your dashboard reflects salary trends from the past 30 days so you always see current market rates.'
    },
    {
      q: 'Is my LinkedIn account at risk?',
      a: 'No. We use our own infrastructure with rate limiting and proxy rotation. Your personal account is never involved in the scraping process.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Exactly What the Market Pays
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          We analyze thousands of LinkedIn job postings to surface real salary ranges for any role and location — so you negotiate from facts, not guesses.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9 / month
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No LinkedIn account required.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Unlimited salary searches</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>AI-parsed salary extraction</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Role &amp; location filters</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>30-day rolling market trends</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>CSV export</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
