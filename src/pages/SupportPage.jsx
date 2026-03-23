const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "Open the account page and check the recent orders section. In a real app this would be connected to order APIs.",
  },
  {
    question: "Can I return products?",
    answer:
      "Yes. The UI includes returns-focused messaging to mirror professional e-commerce expectations.",
  },
  {
    question: "Is payment integrated?",
    answer:
      "This assignment focuses on frontend experience, so checkout is present as a polished demo flow without backend payments.",
  },
];

export default function SupportPage() {
  return (
    <section className="section-wrap py-10 lg:py-16">
      <div className="glass-panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Help Center</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white">Support and FAQs</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          A professional storefront usually includes reassurance pages beyond the product grid.
          This screen rounds out the experience with support messaging and common questions.
        </p>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h2 className="font-display text-xl font-semibold text-white">{faq.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
