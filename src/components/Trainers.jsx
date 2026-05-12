export default function Trainers() {

  const trainers = [
    {
      name: "Ahmed",
      specialty: "Bodybuilding",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
    },
    {
      name: "Sara",
      specialty: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
    },
    {
      name: "Mohamed",
      specialty: "Strength Training",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
    }
  ];

  return (
    <section className="trainers">

      <h1>Our Trainers</h1>

      <div className="trainers-container">

        {trainers.map((t, i) => (
          <div className="trainer-card" key={i}>

            <img src={t.image} alt={t.name} />

            <h2>{t.name}</h2>

            <p>{t.specialty}</p>

          </div>
        ))}

      </div>

    </section>
  );
}