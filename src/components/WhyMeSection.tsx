
import React from 'react';
import { Check } from 'lucide-react';

const WhyMeSection = () => {
  const reasons = [
    "Minimal team disruption",
    "Tailored, not templated",
    "Hands-on delivery",
    "Clear ROI or you walk away with working automations"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-purple">
          No Fluff, Just Functional Automations
        </h2>
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-center bg-soft-purple p-4 rounded-lg"
            >
              <Check className="text-primary-purple mr-4" />
              <p className="text-lg text-dark-purple">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
