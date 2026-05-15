import { motion } from "framer-motion";

const trainers = [
  {
    name: "Ahmed",
    specialty: "Bodybuilding & Hypertrophy",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sara",
    specialty: "Functional Fitness & Mobility",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Mohamed",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Trainers() {
  return (
    <section className="trainers section-container">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        style={{ marginInline: "auto", textAlign: "center" }}
      >
        <p className="eyebrow" style={{ justifyContent: "center" }}>Our Team</p>
        <h2>Meet the experts behind your success.</h2>
        <p style={{ marginInline: "auto" }}>
          Our certified coaches bring years of experience and a passion for
          helping you achieve your best self safely and effectively.
        </p>
      </motion.div>

      <div className="trainers-container">
        {trainers.map((t, i) => (
          <motion.div
            className="trainer-card"
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <div className="trainer-img-wrap">
              <img src={t.image} alt={`Coach ${t.name}`} loading="lazy" />
            </div>

            <div className="trainer-info">
              <h2>{t.name}</h2>
              <span className="trainer-specialty-badge">{t.specialty}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}