import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-screen items-center justify-center">
      <div className="glass-panel rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-sm text-slate-400">
          The page you requested does not exist in this storefront demo.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
