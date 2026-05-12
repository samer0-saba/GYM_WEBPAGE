import { useState } from "react";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  function calculateBMI() {
     if (!weight || !height) return;

  const heightInMeters = height / 100;
  const result = weight / (heightInMeters * heightInMeters);
  const fixed = result.toFixed(1);

  let statusText = "";

  if (result < 18.5) {
    statusText = "Underweight";
  } else if (result < 25) {
    statusText = "Normal";
  } else {
    statusText = "Overweight";
  }

  setBmi(fixed);
  setStatus(statusText);

  localStorage.setItem("bmi", fixed);
  localStorage.setItem("status", statusText);
  localStorage.setItem("weight", weight);
  localStorage.setItem("height", height);
  localStorage.setItem("gender", gender);
  }

  return (
    <section className="bmi">

      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Height (m)"
        onChange={(e) => setHeight(e.target.value)}
      />

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button onClick={calculateBMI}>
        Calculate
      </button>

      {bmi && (
  <div className="bmi-result">

    <h2>Your BMI: {bmi}</h2>

    <h3 className={status.toLowerCase()}>
      Status: {status}
    </h3>

  </div>
)}
    </section>
  );
}