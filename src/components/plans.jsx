import PlanCard from "./PlanCard.jsx";

const plans = [
  {
    title: "Basic",
    price: "$20 / month",
    features: ["Gym Access", "Basic Equipment", "Locker Room"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$40 / month",
    features: ["Full Access", "Trainer Support", "Diet Plan"],
    highlight: true,
  },
  {
    title: "Elite",
    price: "$70 / month",
    features: ["All Access", "1-on-1 Coach", "Custom Plan"],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <p className="eyebrow">Memberships</p>
        <h2>Choose a plan that fits your goal.</h2>
      </div>

      <div className="card-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}