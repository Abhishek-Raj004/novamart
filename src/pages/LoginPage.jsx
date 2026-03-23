import { Link } from "react-router-dom";
import AuthShell from "../components/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome Back"
      title="Login to continue shopping"
      description="Access your saved items, orders, and profile sections through a polished login screen."
      footer={
        <>
          New to NovaMart?{" "}
          <Link to="/signup" className="font-semibold text-brand-200">
            Create an account
          </Link>
        </>
      }
    >
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 px-5 py-4 font-semibold text-white transition hover:bg-brand-400"
        >
          Login
        </button>
      </form>
    </AuthShell>
  );
}
