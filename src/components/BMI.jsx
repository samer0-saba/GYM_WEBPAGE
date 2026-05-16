import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", color: "#60a5fa" };
  if (bmi < 25)   return { label: "Healthy Weight", color: "#4ade80" };
  if (bmi < 30)   return { label: "Overweight", color: "#fb923c" };
  return           { label: "Obese", color: "#f87171" };
}

export default function BMI() {
  const [weight, setWeight]   = useState("");
  const [height, setHeight]   = useState("");
  const [gender, setGender]   = useState("");
  const [result, setResult]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Load existing data from localStorage on mount
  useEffect(() => {
    const savedBmi = localStorage.getItem("bmi");
    const savedStatus = localStorage.getItem("status");
    const savedWeight = localStorage.getItem("weight");
    const savedHeight = localStorage.getItem("height");
    const savedGender = localStorage.getItem("gender");

    if (savedWeight) setWeight(savedWeight);
    if (savedHeight) setHeight(savedHeight);
    if (savedGender) setGender(savedGender);
    
    if (savedBmi && savedStatus) {
      const color = getBmiCategory(savedBmi).color;
      setResult({ bmi: savedBmi, label: savedStatus, color });
    }
  }, []);

  async function calculateBMI() {
    if (!weight || !height) return;
    const h = Number(height) / 100;
    const bmi = Number(weight) / (h * h);
    const fixed = bmi.toFixed(1);
    const category = getBmiCategory(bmi);

    setResult({ bmi: fixed, ...category });

    localStorage.setItem("bmi",    fixed);
    localStorage.setItem("status", category.label);
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("gender", gender);

    // Save to backend if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      setMessage("");
      try {
        const response = await fetch("http://localhost:5000/api/bmi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            weight: Number(weight),
            height: Number(height),
            bmiValue: Number(fixed),
            status: category.label
          })
        });

        if (response.ok) {
          setMessage("Saved to your account");
        }
      } catch (error) {
        console.error("Failed to save BMI", error);
      } finally {
        setLoading(false);
      }
    } else {
      setMessage("Saved locally (Login to sync)");
    }
  }

  return (
    <section className="section-container bmi-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">BMI Calculator</p>
        <h2>Know your starting point.</h2>
        <p>
          Enter your measurements below to instantly calculate your Body Mass
          Index and get a clear picture of where you stand today.
        </p>
      </motion.div>

      <motion.div
        className="form-card"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <label>
          Weight (kg)
          <input
            type="number"
            placeholder="e.g. 75"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="1"
          />
        </label>

        <label>
          Height (cm)
          <input
            type="number"
            placeholder="e.g. 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="1"
          />
        </label>

        <label>
          Gender
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button
          className="button primary"
          type="button"
          onClick={calculateBMI}
          disabled={!weight || !height || loading}
          style={{ opacity: !weight || !height || loading ? 0.55 : 1 }}
        >
          {loading ? "Saving..." : "Calculate BMI"}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              className="bmi-result"
              key="bmi-result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <strong style={{ color: result.color }}>BMI: {result.bmi}</strong>
              <span>
                Status:{" "}
                <span style={{ color: result.color, fontWeight: 600 }}>
                  {result.label}
                </span>
              </span>
              {message && (
                <span style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>
                  {message}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}