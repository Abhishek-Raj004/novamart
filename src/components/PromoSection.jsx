export default function PromoSection() {
  return (
    <section className="section-wrap py-12">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          data-aos="fade-right"
          className="relative overflow-hidden rounded-[2rem] border border-white/10 p-8"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(34,168,132,0.22), rgba(10,16,31,0.92)), url(https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-100">Parallax Deal</p>
          <h3 className="mt-4 max-w-md font-display text-4xl font-bold text-white">
            Bring motion and depth into your storefront presentation.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
            This promotional block uses a fixed background treatment to simulate
            parallax and make the page feel more cinematic.
          </p>
        </div>
        <div data-aos="fade-left" className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent-200">Professional Flow</p>
          <h3 className="mt-4 font-display text-3xl font-bold text-white">
            More than cards: account, support, saved items, and checkout-ready interactions.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            The app includes login, signup, account overview, cart management, wishlist
            handling, and product detail pages so the assignment feels complete rather than isolated.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="mt-2 text-sm text-slate-400">Support storytelling blocks</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold text-white">One-click</p>
              <p className="mt-2 text-sm text-slate-400">Wishlist and cart actions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
