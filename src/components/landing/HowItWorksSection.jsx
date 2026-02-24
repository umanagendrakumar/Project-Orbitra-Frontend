const HowItWorksSection = () => {
  const steps = [
    "Login or Create Free account",
    "Add your job application",
    "Update status after each round",
    "Track progress & stay consistent"
  ];

  return (
    <section className="bg-gray-50 py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        How Orbitra Works
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-6 shadow-sm"
          >
            <span className="text-purple-600 font-bold text-xl">
              {index + 1}.
            </span>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;