import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <section className="section-container auth-page">
      <div className="form-card auth-card">
        <p className="eyebrow">Start Today</p>
        <h1>Register</h1>

        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>

        <button className="button primary" type="button">
          Create Account
        </button>

        <p>
          Already a member?{" "}
          <Link className="text-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}