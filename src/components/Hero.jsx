import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "../data/products";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 lg:pb-24 lg:pt-20">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
            <Sparkles className="h-4 w-4" />
            Trending deals, immersive UI, assignment-ready experience
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            Discover products through a storefront that feels premium and alive.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Search, filter, compare, save to wishlist, explore product detail pages,
            and move through a modern commerce journey inspired by large-scale retail apps.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400"
            >
              Shop Collection <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-100 transition hover:border-brand-300/50 hover:bg-white/5"
            >
              Create Account
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            <div className="glass-panel rounded-full px-4 py-2">
              <Truck className="mr-2 inline h-4 w-4 text-brand-300" />
              Free express delivery
            </div>
            <div className="glass-panel rounded-full px-4 py-2">
              <ShieldCheck className="mr-2 inline h-4 w-4 text-brand-300" />
              Secure checkout simulation
            </div>
          </div>
        </div>

        <div className="relative" data-aos="zoom-in">
          <div
            className="absolute inset-0 rounded-[2rem] bg-brand-400/20 blur-3xl"
            style={{ transform: "translateY(-10%)" }}
          />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
              alt="Smart watch product"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/15 bg-slate-950/70 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-200">
                    Featured Drop
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-white">
                    Motion-led shopping UI
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
                  <p className="text-xs text-slate-400">Live Offers</p>
                  <p className="text-lg font-bold text-white">Up to 40% off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrap mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="glass-panel rounded-[1.5rem] p-5"
          >
            <p className="text-3xl font-extrabold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
