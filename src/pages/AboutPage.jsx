import Trainers from "../components/Trainers.jsx";

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: "4rem" }}>
      <section className="section-container page-section" style={{ minHeight: "60vh", display: "grid", placeContent: "center" }}>
        <p className="eyebrow">Our Mission</p>
        <h1 style={{ maxWidth: "800px" }}>We help beginners train with confidence and clarity.</h1>

        <p style={{ maxWidth: "680px", fontSize: "1.125rem" }}>
          FitZone is more than just a gym — it&apos;s a community built around 
          results and simplicity. We remove the intimidation of fitness by 
          providing clear workout structures, accessible coaching, and an 
          environment that supports your growth every single day.
        </p>
      </section>

      <Trainers />
    </div>
  );
}