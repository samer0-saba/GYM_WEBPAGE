import { motion } from "framer-motion";
import PlanCard from "./PlanCard.jsx";

const plans = [
  {
    title: "Starter",
    price: "20",
    features: [
      "Full gym access",
      "Standard equipment",
      "Locker & showers",
      "Mobile check-in",
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "40",
    features: [
      "Everything in Starter",
      "Dedicated trainer support",
      "Personalised diet plan",
      "Priority class booking",
    ],
    highlight: true,
  },
  {
    title: "Elite",
    price: "70",
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions",
      "Custom training programme",
      "Monthly body analysis",
    ],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section className="section-container">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Memberships</p>
        <h2>Find the plan that fits your goals.</h2>
        <p>No hidden fees. Cancel anytime. Start seeing results from day one.</p>
      </motion.div>

      <div className="card-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <PlanCard {...plan} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}