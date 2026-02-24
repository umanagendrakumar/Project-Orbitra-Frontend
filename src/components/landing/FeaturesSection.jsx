const FeaturesSection = () => {
  const features = [
    {
      title: "Application Tracking",
      desc: "Monitor every stage from Applied to Offer."
    },
    {
      title: "Status Timeline",
      desc: "Visualize interview progress clearly."
    },
    {
      title: "Smart Filters",
      desc: "Search, filter, and sort instantly."
    }
  ];

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto bg-purple-600 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Everything You Need To Stay Organized
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;