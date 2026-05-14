import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="section-container two-column-section">
      <div>
        <p className="eyebrow">About FitZone</p>
        <h2>Beginner-friendly coaching for real fitness goals.</h2>
      </div>

      <div>
        <p>
          FitZone helps members start with clear workout plans, simple progress
          tracking, and a clean dashboard. We are building it step by step so
          every file stays easy to understand.
        </p>

        <Link className="text-link" to="/about">
          Learn more →
        </Link>
      </div>
    </section>
  );
}