import { CreditCard, MapPin, Package, ShieldCheck, User } from "lucide-react";

const cards = [
  {
    icon: Package,
    title: "Recent Orders",
    text: "Track deliveries, manage returns, and revisit purchase history from one clean dashboard.",
  },
  {
    icon: MapPin,
    title: "Saved Addresses",
    text: "Profile and shipping sections help the application feel closer to a real marketplace account area.",
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    text: "Show card management and payment readiness with polished section cards and trust UI.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Controls",
    text: "Communication preferences, password updates, and login security storytelling included.",
  },
];

export default function AccountPage() {
  return (
    <section className="section-wrap py-10 lg:py-16">
      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-500/20 text-brand-100">
            <User className="h-8 w-8" />
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-brand-200">My Account</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white">Abhishek Sharma</h1>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            This account page showcases the kind of dashboard areas expected in a complete e-commerce frontend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold text-white">14</p>
              <p className="mt-2 text-sm text-slate-400">Orders placed</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold text-white">3</p>
              <p className="mt-2 text-sm text-slate-400">Saved addresses</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="glass-panel rounded-[2rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
