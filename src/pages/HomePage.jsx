import AboutPreview from "../components/AboutPreview.jsx";
import BMI from "../components/BMI.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Plans from "../components/Plans.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Plans />
      <BMI />
      <Footer />
    </>
  );
}