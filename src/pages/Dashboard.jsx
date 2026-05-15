import { useState } from "react";
import { motion } from "framer-motion";

function readSavedFitnessData() {
  return {
    bmi: localStorage.getItem("bmi") || "",
    status: localStorage.getItem("status") || "",
    weight: localStorage.getItem("weight") || "",
    height: localStorage.getItem("height") || "",
    gender: localStorage.getItem("gender") || "",
  };
}

export default function Dashboard() {
  const [fitnessData] = useState(readSavedFitnessData);

  return (
    <section className="section-container page-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Dashboard</p>
        <h1>Your fitness snapshot.</h1>
        <p>
          Welcome back! Here is a quick overview of your current metrics based
          on your latest BMI calculation. Keep pushing forward!
        </p>
      </motion.div>

      <div className="dashboard-grid">
        <motion.article
          className="stat-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="stat-label">Current BMI</div>
          {fitnessData.bmi ? (
            <div className="stat-value primary">{fitnessData.bmi}</div>
          ) : (
            <div className="stat-empty">No data calculated yet.</div>
          )}
        </motion.article>

        <motion.article
          className="stat-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="stat-label">Health Status</div>
          {fitnessData.status ? (
            <div className="stat-value" style={{ fontSize: "1.75rem" }}>
              {fitnessData.status}
            </div>
          ) : (
            <div className="stat-empty">Pending...</div>
          )}
        </motion.article>

        <motion.article
          className="stat-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="stat-label">Last Measurements</div>
          {fitnessData.weight && fitnessData.height ? (
            <div className="stat-value" style={{ fontSize: "1.75rem" }}>
              {fitnessData.weight}kg <span style={{ color: "var(--color-muted)", fontSize: "1.25rem" }}>/</span> {fitnessData.height}cm
            </div>
          ) : (
            <div className="stat-empty">Measurements needed.</div>
          )}
        </motion.article>
      </div>
    </section>
  );
}