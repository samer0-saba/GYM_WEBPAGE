import { motion } from "framer-motion";

const programs = [
  {
    id: "strength-starter",
    title: "Strength Starter",
    desc: "A foundational 3-day split designed to build core strength and teach proper lifting mechanics for complete beginners.",
    tags: ["Beginner", "3 Days/Week", "Full Body"],
  },
  {
    id: "fat-loss",
    title: "Fat Loss Circuit",
    desc: "High-intensity metabolic conditioning mixed with light resistance to maximize calorie burn and improve cardiovascular health.",
    tags: ["Intermediate", "4 Days/Week", "Cardio + Weights"],
  },
  {
    id: "muscle-builder",
    title: "Muscle Builder Pro",
    desc: "Advanced hypertrophy programming focused on progressive overload and targeted muscle isolation for maximum growth.",
    tags: ["Advanced", "5 Days/Week", "Hypertrophy"],
  },
];

export default function ProgramsPage() {
  return (
    <section className="section-container page-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Workout Programs</p>
        <h1>Expertly crafted routines.</h1>
        <p>
          Whether your goal is to build strength, lose fat, or pack on muscle,
          we have a structured program ready for you. Choose a path and start
          tracking your progress today.
        </p>
      </motion.div>

      <div className="card-grid">
        {programs.map((program, i) => (
          <motion.article
            className="card program-card"
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{program.title}</h3>
            <p>{program.desc}</p>

            <div className="program-meta">
              {program.tags.map((tag) => (
                <span className="program-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            
            <button className="button secondary" style={{ width: "100%", marginTop: "2rem" }}>
              View Details
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}