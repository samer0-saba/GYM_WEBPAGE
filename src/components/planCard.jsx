export default function PlanCard(props) {
  return (
    <div className={`plan-card ${props.highlight ? "highlight" : ""}`}>

      {props.highlight && <span className="badge">Most Popular</span>}

      <h2>{props.title}</h2>

      <p className="price">{props.price}</p>

      <ul>
        {props.features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      <button>Subscribe</button>

    </div>
  );
}