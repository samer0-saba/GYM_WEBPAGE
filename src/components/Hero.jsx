import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

const stats = [
  { num: "2,400+", label: "Active Members" },
  { num: "35+",    label: "Expert Trainers" },
  { num: "98%",    label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section className="hero section-container">
      <motion.div className="hero-badge" {...fadeUp(0)}>
        ⚡ Premier Fitness &amp; Coaching
      </motion.div>

      <motion.h1 {...fadeUp(0.1)}>
        Build the Body <br />
        <span className="accent">You Deserve</span>
      </motion.h1>

      <motion.p className="hero-text" {...fadeUp(0.2)}>
        FitZone combines expert coaching, structured programs, and smart
        tracking — everything you need to transform your fitness and stay
        consistent for the long run.
      </motion.p>

      <motion.div className="hero-actions" {...fadeUp(0.3)}>
        <Link className="button primary" to="/register">
          Start Your Journey →
        </Link>
        <Link className="button secondary" to="/programs">
          Explore Programs
        </Link>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <p className="hero-stat-num">
              {s.num.replace(/\+|%/, "")}
              <span>{s.num.match(/[+%]/)?.[0] ?? ""}</span>
            </p>
            <p className="hero-stat-label">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}