const HowItWorksSection = () => {
  const steps = [
    "Team interviews and shadowing to understand the current workflow",
    "Build 1 to a maximum of 3 custom automations",
    "Hand you a clear blueprint for your team to employ the rest of the automations"
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-slate">
          30 Days Real Result at 0 Cost
        </h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex items-center"
            >
              <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center mr-4 font-bold p-3">
                {index + 1}
              </div>
              <p className="text-lg text-neutral-gray">{step}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-xl text-dark-slate italic">
            Cost: Just a referral and a case study "if it delivers value"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
