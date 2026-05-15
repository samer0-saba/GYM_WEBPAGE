import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
};

const highlights = [
  "Personalized training plans tailored to your goals",
  "Real-time progress tracking from your dashboard",
  "Expert coaches available 7 days a week",
];

export default function AboutPreview() {
  return (
    <section className="section-container two-column-section">
      <motion.div {...fadeLeft}>
        <p className="eyebrow">About FitZone</p>
        <h2>Where every goal becomes achievable.</h2>

        <ul style={{ marginTop: "1.5rem", display: "grid", gap: "0.75rem", listStyle: "none" }}>
          {highlights.map((h) => (
            <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--color-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              <span style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }}>✦</span>
              {h}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fadeRight}>
        <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
          At FitZone, we believe fitness is for everyone. Whether you&apos;re stepping
          into a gym for the first time or pushing past a plateau, our coaches
          meet you exactly where you are — with clear plans, honest feedback, and
          genuine support every step of the way.
        </p>

        <p style={{ color: "var(--color-muted)", fontSize: "1.0625rem", lineHeight: 1.8, marginTop: "1rem" }}>
          Built around simplicity and results, our platform removes the guesswork
          so you can focus entirely on showing up and getting stronger.
        </p>

        <Link className="text-link" to="/about">
          Learn more about us →
        </Link>
      </motion.div>
    </section>
  );
}