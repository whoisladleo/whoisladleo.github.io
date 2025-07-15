import { useState } from 'react';
import { Mail, ArrowLeft, Check, Zap, Rocket, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const HostingPlans = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanContact = (planName: string) => {
    setSelectedPlan(planName);
    setIsContactFormOpen(true);
  };

  const plans = [
    {
      name: "Experimental",
      icon: Zap,
      price: "$315",
      period: "annually",
      condition: "Website built by me",
      testPrice: "$105",
      testPeriod: "test environment",
      description: "Perfect for testing new ideas and small projects",
      features: [
        "Basic hosting infrastructure",
        "SSL certificate included",
        "Monthly backups",
        "Email support",
        "Up to 5GB storage",
        "Basic analytics",
        "99.9% uptime guarantee"
      ],
      highlight: false
    },
    {
      name: "Builder",
      icon: Rocket,
      price: "$473",
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
        "Database backup & restore",
        "99.95% uptime guarantee"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "$4,725",
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
        "SLA guarantee (99.99% uptime)",
        "Dedicated account manager",
        "Custom development hours included",
        "White-label options",
        "Priority feature requests"
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-white min-h-screen text-dark-slate">
      {/* Header */}
      <header className="bg-light-gray py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-blue hover:text-opacity-80 transition mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-dark-slate mb-4">
            Hosting Plans That Scale With You
          </h1>
          <p className="text-xl text-neutral-gray">
            From experimental projects to enterprise solutions - choose the plan that fits your needs
          </p>
        </div>
      </header>

      {/* Plans Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-neutral-gray mb-8">
            All prices are tax inclusive (5% VAT included)
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-lg relative border-2 ${
                  plan.highlight ? 'border-primary-blue' : 'border-gray-200'
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
                  <plan.icon size={56} className="text-primary-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-dark-slate mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-blue">{plan.price}</span>
                    <span className="text-neutral-gray ml-2">{plan.period}</span>
                    <p className="text-xs text-neutral-gray mt-1">(VAT included)</p>
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
                    <li key={idx} className="flex items-start">
                      <Check size={16} className="text-primary-blue mr-3 flex-shrink-0 mt-1" />
                      <span className="text-neutral-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanContact(plan.name)}
                  className={`w-full py-3 rounded-md transition font-semibold ${
                    plan.highlight 
                      ? 'bg-primary-blue text-white hover:bg-opacity-90' 
                      : 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark-slate">
            Why Choose Our Hosting?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-slate">Lightning Fast</h3>
              <p className="text-neutral-gray">
                Optimized infrastructure with CDN and caching for maximum performance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-slate">Scalable</h3>
              <p className="text-neutral-gray">
                From small projects to enterprise applications - we scale with you
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-slate">Reliable</h3>
              <p className="text-neutral-gray">
                99.9%+ uptime guarantee with 24/7 monitoring and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-slate mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-neutral-gray mb-8">
            Let's discuss your specific requirements and create a tailored hosting plan
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                setSelectedPlan('Custom');
                setIsContactFormOpen(true);
              }}
              className="bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition inline-flex items-center"
            >
              <Mail className="mr-2" size={20} />
              Contact for Custom Plan
            </button>
            <Link 
              to="/" 
              className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-md hover:bg-primary-blue hover:text-white transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        subject={
          selectedPlan === 'Custom' 
            ? 'Custom Hosting Plan Request' 
            : selectedPlan 
              ? `Inquiring for ${selectedPlan} Plan`
              : 'Hosting Plan Inquiry'
        }
        defaultMessage={
          selectedPlan === 'Custom' 
            ? "Hi Denis, I need a custom hosting solution. Here are my requirements:\n\n- [Please describe your needs]\n\nCan we discuss a tailored plan?"
            : selectedPlan 
              ? `Hi Denis, I'm interested in the ${selectedPlan} hosting plan. Can you provide more details and help me get started?`
              : "Hi Denis, I'm interested in your hosting plans. Can you provide more details and help me get started?"
        }
      />
    </div>
  );
};

export default HostingPlans;