const HowItWorksSection = () => {
  const steps = [
    {
      title: "Discovery & Analysis",
      description: "We analyze your current processes and identify optimization opportunities across automation, hosting, or healthcare needs."
    },
    {
      title: "Custom Solution Design",
      description: "Based on your requirements, we design a tailored solution - whether it's workflow automation, hosting architecture, or healthcare platform integration."
    },
    {
      title: "Implementation & Delivery",
      description: "We build and deploy your solution with thorough testing, documentation, and team training to ensure smooth adoption."
    },
    {
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure your solution scales with your business growth."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark-slate">
          How We Work Together
        </h2>
        <p className="text-xl text-neutral-gray text-center mb-12">
          A proven process that delivers results across all our services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-light-gray p-6 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-slate">
                {step.title}
              </h3>
              <p className="text-neutral-gray">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-dark-slate mb-4">
            Special Offer: 30-Day Automation Trial
          </h3>
          <p className="text-lg text-neutral-gray mb-4">
            Get real results in 30 days with custom automations at zero upfront cost
          </p>
          <p className="text-primary-blue font-semibold">
            Payment: Just a referral and case study (if it delivers value)
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
