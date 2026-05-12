export default function TrainersPage() {

  const trainers = [
    {
      name: "Ahmed",
      role: "Bodybuilding Coach",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
    },
    {
      name: "Sara",
      role: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
    },
    {
      name: "Mohamed",
      role: "Strength Trainer",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
    },
    {
      name: "Lina",
      role: "Yoga Trainer",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    }
  ];

  return (
    <div className="page">

      <h1>Our Trainers</h1>

      <div className="trainers-grid">

        {trainers.map((t, i) => (
          <div className="trainer-card" key={i}>

            <img src={t.image} alt={t.name} />

            <h2>{t.name}</h2>

            <p>{t.role}</p>

          </div>
        ))}

      </div>

    </div>
  );
}