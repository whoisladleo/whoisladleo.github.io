import { useState } from 'react';
import { 
  Mail, 
  ArrowLeft, 
  Workflow, 
  Database, 
  CheckCircle, 
  Link2,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const Automation = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const automationTypes = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline your processes and eliminate repetitive tasks",
      examples: ["Approval workflows", "Task assignments", "Status updates", "Notifications"],
      benefits: ["Save 15-20 hours/week", "Reduce human error", "Faster decision making"]
    },
    {
      icon: Database,
      title: "Data Sync Between Tools",
      description: "Ensure seamless data flow across your tech stack",
      examples: ["CRM to marketing tools", "Sales to accounting", "Support to analytics", "Inventory tracking"],
      benefits: ["Real-time data sync", "Eliminate manual data entry", "Single source of truth"]
    },
    {
      icon: CheckCircle,
      title: "Internal Approval & Reporting",
      description: "Automate approvals and generate reports effortlessly",
      examples: ["Expense approvals", "Leave requests", "Performance reports", "Compliance tracking"],
      benefits: ["Faster approvals", "Automated compliance", "Real-time reporting"]
    },
    {
      icon: Link2,
      title: "System Integrations",
      description: "Connect your systems and get real-time notifications",
      examples: ["API integrations", "Webhook automation", "Real-time alerts", "Custom dashboards"],
      benefits: ["Unified systems", "Instant notifications", "Custom workflows"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We shadow your team for 1-2 days to understand current workflows and identify automation opportunities",
      duration: "2-3 days"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Create a detailed automation blueprint with prioritized implementations and ROI projections",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Build and deploy 1-3 custom automations with thorough testing and team training",
      duration: "2-3 weeks"
    },
    {
      step: "4",
      title: "Knowledge Transfer",
      description: "Provide complete documentation and training so your team can implement additional automations",
      duration: "1 week"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours/Week",
      description: "Eliminate manual tasks that eat up your team's time",
      stat: "Average time savings per employee"
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Lower overhead by automating repetitive processes",
      stat: "30-50% cost reduction in automated processes"
    },
    {
      icon: Users,
      title: "Improve Team Satisfaction",
      description: "Let your team focus on meaningful work, not repetitive tasks",
      stat: "85% of teams report higher job satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Increase Productivity",
      description: "Faster processing times and fewer bottlenecks",
      stat: "40% average productivity increase"
    },
    {
      icon: Shield,
      title: "Reduce Errors",
      description: "Eliminate human errors in data entry and processing",
      stat: "95% reduction in processing errors"
    },
    {
      icon: Zap,
      title: "Faster Decision Making",
      description: "Real-time data and automated reporting enable quicker decisions",
      stat: "60% faster decision-making process"
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
            Business Automation That Actually Works
          </h1>
          <p className="text-xl text-neutral-gray">
            Stop wasting time on manual tasks. Let technology handle the routine so you can focus on growth.
          </p>
        </div>
      </header>

      {/* Special Offer Banner */}
      {/* <section className="bg-primary-blue text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">🎯 Special Offer: 30-Day Automation Trial</h2>
          <p className="text-lg mb-4">Get real results in 30 days with custom automations at zero upfront cost</p>
          <p className="text-sm opacity-90">Payment: Just a referral and case study (if it delivers value)</p>
        </div>
      </section> */}

      {/* Automation Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark-slate">
            Four Ways We Automate Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-light-gray p-6 rounded-lg hover:shadow-lg transition"
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-primary-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <type.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-slate mb-2">{type.title}</h3>
                    <p className="text-neutral-gray mb-4">{type.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-dark-slate mb-2">Common use cases:</p>
                  <ul className="space-y-1 mb-4">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-gray">
                        <ArrowRight size={12} className="text-primary-blue mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-dark-slate mb-2">Key benefits:</p>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-primary-blue">
                        <CheckCircle size={12} className="mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark-slate">
            Our Proven 30-Day Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-dark-slate mb-2">{step.title}</h3>
                <p className="text-neutral-gray mb-3 text-sm">{step.description}</p>
                <p className="text-primary-blue font-semibold text-sm">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark-slate">
            The Impact of Automation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-soft-blue p-6 rounded-lg">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-2">{benefit.title}</h3>
                <p className="text-neutral-gray mb-3">{benefit.description}</p>
                <p className="text-primary-blue font-semibold text-sm">{benefit.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-dark-slate text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Quick ROI Calculator</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-primary-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Time Savings</h3>
              <p className="text-3xl font-bold mb-2">20 hours/week</p>
              <p className="text-sm opacity-90">Average per employee</p>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-3xl font-bold mb-2">$2,400/month</p>
              <p className="text-sm opacity-90">Per automated process</p>
            </div>
            <div className="bg-primary-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Payback Period</h3>
              <p className="text-3xl font-bold mb-2">2-3 months</p>
              <p className="text-sm opacity-90">Typical ROI timeline</p>
            </div>
          </div>
          <p className="text-lg mb-8 opacity-90">
            Based on average results from 15+ automation projects
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-slate mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-neutral-gray mb-8">
            Get a free consultation and see how automation can transform your operations
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition inline-flex items-center"
            >
              <Mail className="mr-2" size={20} />
              Start Today
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
        subject="Automation Consultation Request"
        defaultMessage="Hi Denis, I'm interested in learning more about business automation services. I'd like to schedule a consultation to discuss my needs."
      />
    </div>
  );
};

export default Automation;