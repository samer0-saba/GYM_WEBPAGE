import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <section className="section-container auth-page">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div>
          <p className="eyebrow">Welcome Back</p>
          <h1>Login to your account</h1>
          <p style={{ marginTop: "0.5rem" }}>
            Enter your details below to access your dashboard and workout plans.
          </p>
        </div>

        <div className="auth-divider" />

        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>

        <button
          className="button primary"
          type="button"
          style={{ width: "100%", marginTop: "0.5rem" }}
        >
          Sign In
        </button>

        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Don&apos;t have an account?{" "}
          <Link className="text-link" to="/register" style={{ marginTop: 0 }}>
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
}