import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="section-container auth-page">
      <div className="form-card auth-card">
        <p className="eyebrow">Welcome Back</p>
        <h1>Login</h1>

        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Your password" />
        </label>

        <button className="button primary" type="button">
          Login
        </button>

        <p>
          New here?{" "}
          <Link className="text-link" to="/register">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}