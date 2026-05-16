import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Restore BMI data if any
      try {
        const bmiRes = await fetch("http://localhost:5000/api/bmi", {
          headers: { "Authorization": `Bearer ${data.token}` }
        });
        if (bmiRes.ok) {
          const bmiData = await bmiRes.json();
          localStorage.setItem("bmi", bmiData.bmiValue);
          localStorage.setItem("status", bmiData.status);
          localStorage.setItem("weight", bmiData.weight);
          localStorage.setItem("height", bmiData.height);
        }
      } catch (err) {
        console.error("Failed to restore BMI data", err);
      }

      // Redirect to home or dashboard
      navigate("/");
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
          <p className="eyebrow">Welcome Back</p>
          <h1>Login to your account</h1>
          <p style={{ marginTop: "0.5rem" }}>
            Enter your details below to access your dashboard and workout plans.
          </p>
        </div>

        <div className="auth-divider" />

        {error && <p style={{ color: "#f87171", marginBottom: "1rem" }}>{error}</p>}

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
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          className="button primary"
          type="button"
          onClick={handleLogin}
          disabled={loading}
          style={{ width: "100%", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Signing In..." : "Sign In"}
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