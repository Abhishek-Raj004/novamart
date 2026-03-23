import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthShell({ eyebrow, title, description, children, footer }) {
  return (
    <div className="page-shell min-h-screen">
      <div className="section-wrap flex min-h-screen items-center justify-center py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden overflow-hidden bg-brand-700 p-10 lg:block">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-100">NovaMart</p>
                <h2 className="mt-5 font-display text-4xl font-bold text-white">
                  Commerce UI crafted to look production-ready.
                </h2>
              </div>
              <div className="rounded-[1.5rem] border border-white/20 bg-black/20 p-5 backdrop-blur-xl">
                <p className="text-sm leading-7 text-brand-50">
                  Sign in flows, polished forms, and premium visual treatment help the project
                  feel like a complete retail experience.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to store
            </Link>
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-brand-200">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white">{title}</h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">{description}</p>
            <div className="mt-8">{children}</div>
            <div className="mt-6 text-sm text-slate-400">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
