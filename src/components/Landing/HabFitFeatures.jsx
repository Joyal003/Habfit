export default function HabFitFeatures() {
    const features = [
      {
        title: "Science-Backed Training",
        description:
          "Every program is designed using proven, evidence-based fitness principles.",
      },
      {
        title: "Expert Coaches",
        description:
          "Our trainers are highly skilled professionals with deep expertise in fitness, nutrition, and habit formation.",
      },
      {
        title: "Personalized Plans",
        description:
          "Tailored workouts and nutrition guidance based on your goals, fitness level, and lifestyle.",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Train anytime, anywhere with customized plans that fit your routine.",
      },
      {
        title: "Affordable & Accessible",
        description:
          "Quality coaching at a price that makes fitness available to everyone.",
      },
      {
        title: "Holistic Approach",
        description:
          "We focus on overall well-being, including mindset, habit-building, and sustainable progress.",
      },
    ];
  
    return (
      <div className="bg-black text-green-400 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Makes HABFIT Unique?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  