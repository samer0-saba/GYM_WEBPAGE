import { useState, useEffect } from "react";

export default function Dashboard() {

  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setBmi(localStorage.getItem("bmi"));
    setStatus(localStorage.getItem("status"));
    setGender(localStorage.getItem("gender"));
  }, []);

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="card">
        <h2>BMI</h2>
        <p>{bmi || "No data yet"}</p>
      </div>

      <div className="card">
        <h2>Status</h2>
        <p>{status || "No data yet"}</p>
      </div>

      <div className="card">
        <h2>Gender</h2>
        <p>{gender || "Not selected"}</p>
      </div>

    </div>
  );
}