import { Link } from "react-router-dom";
import AuthShell from "../components/AuthShell";

export default function SignupPage() {
  return (
    <AuthShell
      eyebrow="Create Account"
      title="Start your NovaMart profile"
      description="Set up a new customer account to save favorites, review order history, and personalize the storefront journey."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-brand-200">
            Sign in
          </Link>
        </>
      }
    >
      <form className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <input
          type="text"
          placeholder="Last name"
          className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="sm:col-span-2 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="sm:col-span-2 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 w-full rounded-full bg-brand-500 px-5 py-4 font-semibold text-white transition hover:bg-brand-400"
        >
          Create Account
        </button>
      </form>
    </AuthShell>
  );
}
