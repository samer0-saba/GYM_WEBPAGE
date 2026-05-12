import PlanCard from "./PlanCard";

export default function Plans() {

  const plans = [
    {
      title: "Basic",
      price: "$20 / month",
      features: ["Gym Access", "Basic Equipment"],
      highlight: false
    },
    {
      title: "Pro",
      price: "$40 / month",
      features: ["Full Access", "Trainer Support", "Diet Plan"],
      highlight: true
    },
    {
      title: "Elite",
      price: "$70 / month",
      features: ["All Access", "1-on-1 Coach", "Custom Plan"],
      highlight: false
    }
  ];

  return (
    <section className="plans">

      <h1>Membership Plans</h1>

      <div className="plans-container">

        {plans.map((plan, i) => (
          <PlanCard
            key={i}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            highlight={plan.highlight}
          />
        ))}

      </div>

    </section>
  );
}