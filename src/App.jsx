import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BMIPage from "./pages/BMIPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProgramsPage from "./pages/ProgramsPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <BrowserRouter basename="/GYM_WEBPAGE">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;