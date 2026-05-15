import { Link } from "react-router-dom";

export default function PlanCard({ features, highlight, price, title }) {
  return (
    <article className={`card plan-card ${highlight ? "highlight" : ""}`}>
      {highlight && <span className="badge">Most Popular</span>}

      <h3>{title}</h3>

      <p className="price">
        ${price}
        <span className="price-sub"> / month</span>
      </p>

      <ul>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link
        className="button secondary"
        to="/register"
        style={{ width: "100%", marginTop: "auto" }}
      >
        Get Started
      </Link>
    </article>
  );
}