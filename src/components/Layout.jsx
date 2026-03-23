import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Account", to: "/account" },
  { label: "Support", to: "/support" },
];

export default function Layout() {
  const { cartCount, wishlistCount } = useShop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="page-shell min-h-screen">
      <div className="parallax-orb left-[-4rem] top-16 h-48 w-48 bg-brand-400/40" />
      <div className="parallax-orb right-[-5rem] top-96 h-72 w-72 bg-accent-300/20" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="section-wrap flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-lg font-extrabold text-white shadow-glow">
              N
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white">NovaMart</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Smart Commerce
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive ? "text-brand-300" : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="glass-panel flex w-full max-w-md items-center gap-3 rounded-full px-4 py-3">
              <Search className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-400">
                Explore trending gadgets, fashion, and home picks
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <NavLink
              to="/wishlist"
              className="glass-panel relative rounded-full p-3 text-slate-200 transition hover:border-brand-300/60 hover:text-white"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 rounded-full bg-accent-300 px-2 py-0.5 text-[10px] font-bold text-slate-950">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/cart"
              className="glass-panel relative rounded-full p-3 text-slate-200 transition hover:border-brand-300/60 hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 rounded-full bg-brand-400 px-2 py-0.5 text-[10px] font-bold text-slate-950">
                  {cartCount}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-300/60 hover:text-white"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              Get Started
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="glass-panel rounded-full p-3 text-slate-200 lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 lg:hidden">
            <div className="section-wrap space-y-4 py-4">
              <div className="glass-panel flex items-center gap-3 rounded-full px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400">
                  Search products, deals, and categories
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="rounded-2xl border border-white/10 px-4 py-3 font-semibold text-slate-200"
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/wishlist"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 font-semibold text-slate-200"
                >
                  <Heart className="h-4 w-4" /> Wishlist ({wishlistCount})
                </NavLink>
                <NavLink
                  to="/cart"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 font-semibold text-slate-200"
                >
                  <ShoppingBag className="h-4 w-4" /> Cart ({cartCount})
                </NavLink>
                <NavLink
                  to="/login"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 font-semibold text-slate-200"
                >
                  <User className="h-4 w-4" /> Login
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="section-wrap grid gap-8 py-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold">NovaMart</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
              A modern e-commerce concept inspired by high-volume retail platforms,
              crafted for assignment-ready demos and polished UI exploration.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              <Link to="/">Product Listing</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
              Support
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              <Link to="/support">Help Center</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Create Account</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
