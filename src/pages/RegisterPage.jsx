import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Automatically redirect to login page
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

        {error && <p style={{ color: "#f87171", marginBottom: "1rem" }}>{error}</p>}

        <label>
          Full Name
          <input type="text" placeholder="e.g. Alex Johnson" />
        </label>

        <label>
          Email address
          <input 
            type="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password
          <input 
            type="password" 
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          className="button primary"
          type="button"
          onClick={handleRegister}
          disabled={loading}
          style={{ width: "100%", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Creating Account..." : "Create Account"}
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