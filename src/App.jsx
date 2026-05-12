import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import BMIPage from "./pages/BMIPage";
import TrainersPage from "./pages/TrainersPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bmi" element={<BMIPage />} />
        <Route path="/trainers" element={<TrainersPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;