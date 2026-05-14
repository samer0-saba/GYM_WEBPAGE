import { useState } from "react";

function readSavedFitnessData() {
  return {
    bmi: localStorage.getItem("bmi") || "",
    status: localStorage.getItem("status") || "",
    gender: localStorage.getItem("gender") || "",
  };
}

export default function Dashboard() {
  const [fitnessData] = useState(readSavedFitnessData);

  return (
    <section className="section-container page-section">
      <div className="section-heading">
        <p className="eyebrow">Dashboard</p>
        <h1>Your fitness snapshot.</h1>
        <p>
          This page currently reads BMI data from localStorage until we add the
          backend.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <h3>BMI</h3>
          <p>{fitnessData.bmi || "No data yet"}</p>
        </article>

        <article className="card">
          <h3>Status</h3>
          <p>{fitnessData.status || "No data yet"}</p>
        </article>

        <article className="card">
          <h3>Gender</h3>
          <p>{fitnessData.gender || "Not selected"}</p>
        </article>
      </div>
    </section>
  );
}