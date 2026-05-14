import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero section-container">
      <p className="eyebrow">Train harder. Live stronger.</p>

      <h1>Build Your Dream Body With FitZone</h1>

      <p className="hero-text">
        A modern gym website starter with simple pages, a BMI calculator, and
        workout programs we will connect to a backend in the next steps.
      </p>

      <div className="hero-actions">
        <Link className="button primary" to="/register">
          Join Now
        </Link>

        <Link className="button secondary" to="/programs">
          View Programs
        </Link>
      </div>
    </section>
  );
}