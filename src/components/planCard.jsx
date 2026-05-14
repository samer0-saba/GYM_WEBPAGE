export default function PlanCard({ features, highlight, price, title }) {
  return (
    <article className={`card plan-card ${highlight ? "highlight" : ""}`}>
      {highlight && <span className="badge">Most Popular</span>}

      <h3>{title}</h3>
      <p className="price">{price}</p>

      <ul>
        {features.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>

      <button className="button secondary" type="button">
        Subscribe
      </button>
    </article>
  );
}