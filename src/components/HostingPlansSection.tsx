import { Check, Zap, Rocket, Crown } from 'lucide-react';

const HostingPlansSection = () => {
  const plans = [
    {
      name: "Experimental",
      icon: Zap,
      price: "$300",
      period: "annually",
      condition: "Website built by me",
      testPrice: "$100",
      testPeriod: "test environment",
      description: "Perfect for testing new ideas and small projects",
      features: [
        "Basic hosting infrastructure",
        "SSL certificate included",
        "Monthly backups",
        "Email support",
        "Up to 5GB storage",
        "Basic analytics"
      ],
      highlight: false
    },
    {
      name: "Builder",
      icon: Rocket,
      price: "$450",
      period: "annually",
      description: "Everything you need to build and scale your web presence",
      features: [
        "Custom cloud instance",
        "Vercel deployments",
        "Advanced CI/CD pipeline",
        "Priority support",
        "Up to 50GB storage",
        "Advanced analytics",
        "Custom domain management",
        "Database backup & restore"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$4,500",
      period: "annually",
      description: "10x the Builder plan with enterprise-grade features",
      features: [
        "Dedicated cloud infrastructure",
        "Multi-region deployments",
        "Advanced security & compliance",
        "24/7 phone support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced monitoring & alerts",
        "SLA guarantee",
        "Dedicated account manager",
        "Custom development hours included"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-dark-slate">
          Hosting Plans That Scale With You
        </h2>
        <p className="text-xl text-neutral-gray text-center mb-12">
          From experimental projects to enterprise solutions
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-lg relative ${
                plan.highlight ? 'ring-2 ring-primary-blue' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <plan.icon size={48} className="text-primary-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-slate mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-blue">{plan.price}</span>
                  <span className="text-neutral-gray ml-2">{plan.period}</span>
                </div>
                
                {plan.condition && (
                  <div className="mb-4 p-3 bg-soft-blue rounded-md">
                    <p className="text-sm text-neutral-gray">{plan.condition}</p>
                    <p className="text-sm text-primary-blue font-semibold">
                      Or {plan.testPrice} for {plan.testPeriod}
                    </p>
                  </div>
                )}
                
                <p className="text-neutral-gray">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check size={16} className="text-primary-blue mr-3 flex-shrink-0" />
                    <span className="text-neutral-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-md transition ${
                plan.highlight 
                  ? 'bg-primary-blue text-white hover:bg-opacity-90' 
                  : 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-gray mb-4">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <a 
            href="mailto:denis@afyahewani.io" 
            className="bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition inline-block"
          >
            Contact for Custom Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default HostingPlansSection;