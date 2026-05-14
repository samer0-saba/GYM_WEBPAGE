import { useState } from "react";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  function calculateBMI() {
    if (!weight || !height) return;

    // The height input is in centimeters, so we convert it to meters first.
    const heightInMeters = Number(height) / 100;
    const result = Number(weight) / (heightInMeters * heightInMeters);
    const fixed = result.toFixed(1);

    let statusText = "Overweight";

    if (result < 18.5) {
      statusText = "Underweight";
    } else if (result < 25) {
      statusText = "Normal";
    }

    setBmi(fixed);
    setStatus(statusText);

    // For now, localStorage lets the dashboard read BMI data without a backend.
    localStorage.setItem("bmi", fixed);
    localStorage.setItem("status", statusText);
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("gender", gender);
  }

  return (
    <section className="section-container bmi-section">
      <div className="section-heading">
        <p className="eyebrow">BMI Calculator</p>
        <h2>Check your starting point.</h2>
        <p>Enter your weight and height to calculate a simple BMI result.</p>
      </div>

      <div className="form-card">
        <label>
          Weight (kg)
          <input
            type="number"
            placeholder="Example: 75"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </label>

        <label>
          Height (cm)
          <input
            type="number"
            placeholder="Example: 175"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </label>

        <label>
          Gender
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button
          className="button primary"
          type="button"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="bmi-result">
            <strong>Your BMI: {bmi}</strong>
            <span>Status: {status}</span>
          </div>
        )}
      </div>
    </section>
  );
}