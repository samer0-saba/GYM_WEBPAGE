
import Hero from "../components/Hero.jsx";
import Plans from "../components/plans.jsx";
import BMI from "../components/BMI.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
       
      <AboutPreview />

      <Plans />
      
      <BMI />
      <Footer />
    </div>
  );
}