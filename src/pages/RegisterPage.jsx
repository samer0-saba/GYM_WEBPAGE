import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <section className="section-container auth-page">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div>
          <p className="eyebrow">Start Today</p>
          <h1>Create your account</h1>
          <p style={{ marginTop: "0.5rem" }}>
            Join FitZone today and take the first step towards a stronger,
            healthier you.
          </p>
        </div>

        <div className="auth-divider" />

        <label>
          Full Name
          <input type="text" placeholder="e.g. Alex Johnson" />
        </label>

        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Create a strong password" />
        </label>

        <button
          className="button primary"
          type="button"
          style={{ width: "100%", marginTop: "0.5rem" }}
        >
          Create Account
        </button>

        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Already have an account?{" "}
          <Link className="text-link" to="/login" style={{ marginTop: 0 }}>
            Sign in
          </Link>
        </p>
      </motion.div>
    </section>
  );
}