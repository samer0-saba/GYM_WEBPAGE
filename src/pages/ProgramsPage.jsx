const programs = [
  "Strength Starter",
  "Fat Loss Circuit",
  "Muscle Builder",
];

export default function ProgramsPage() {
  return (
    <section className="section-container page-section">
      <div className="section-heading">
        <p className="eyebrow">Workout Programs</p>
        <h1>Simple programs to start your journey.</h1>
        <p>
          These are temporary frontend cards. Later, the admin will add them
          from MongoDB.
        </p>
      </div>

      <div className="card-grid">
        {programs.map((program) => (
          <article className="card" key={program}>
            <h3>{program}</h3>
            <p>3 days per week · Beginner friendly · Coach approved</p>
          </article>
        ))}
      </div>
    </section>
  );
}