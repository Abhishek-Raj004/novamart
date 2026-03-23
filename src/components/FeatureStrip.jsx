import { BadgePercent, CreditCard, Headphones, RefreshCcw } from "lucide-react";

const items = [
  {
    icon: BadgePercent,
    title: "Daily Offer Engine",
    text: "Flash deals, curated highlights, and category promotions surface across the storefront.",
  },
  {
    icon: CreditCard,
    title: "Smooth Checkout Flow",
    text: "Cart summary, trust markers, and payment-style sections keep the shopping path credible.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns Story",
    text: "Professional UI patterns for policy reassurance and customer confidence.",
  },
  {
    icon: Headphones,
    title: "Support-Ready",
    text: "Dedicated help center and account sections complete the application feel.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="section-wrap py-6 lg:py-10">
      <div className="grid gap-4 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass-panel rounded-[1.75rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
