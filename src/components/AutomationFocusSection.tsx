import { 
  Workflow, 
  Database, 
  CheckCircle, 
  Link2,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';

const AutomationFocusSection = () => {
  const automationTypes = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline your processes and eliminate repetitive tasks",
      examples: ["Approval workflows", "Task assignments", "Status updates", "Notifications"]
    },
    {
      icon: Database,
      title: "Data Sync Between Tools",
      description: "Ensure seamless data flow across your tech stack",
      examples: ["CRM to marketing tools", "Sales to accounting", "Support to analytics", "Inventory tracking"]
    },
    {
      icon: CheckCircle,
      title: "Internal Approval & Reporting",
      description: "Automate approvals and generate reports effortlessly",
      examples: ["Expense approvals", "Leave requests", "Performance reports", "Compliance tracking"]
    },
    {
      icon: Link2,
      title: "System Integrations",
      description: "Connect your systems and get real-time notifications",
      examples: ["API integrations", "Webhook automation", "Real-time alerts", "Custom dashboards"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours/Week",
      description: "Eliminate manual tasks that eat up your team's time"
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Lower overhead by automating repetitive processes"
    },
    {
      icon: CheckCircle,
      title: "Increase Accuracy",
      description: "Eliminate human errors in data entry and processing"
    }
  ];

  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">
            Automation That Actually Works
          </h2>
          <p className="text-xl text-neutral-gray">
            Stop wasting time on manual tasks. Let technology handle the routine so you can focus on growth.
          </p>
        </div>

        {/* Automation Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {automationTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <type.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-slate mb-2">{type.title}</h3>
                  <p className="text-neutral-gray mb-3">{type.description}</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-sm text-neutral-gray mb-2">Common use cases:</p>
                <ul className="space-y-1">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-gray">
                      <ArrowRight size={12} className="text-primary-blue mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-dark-slate mb-2">{benefit.title}</h3>
              <p className="text-neutral-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-primary-blue text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get a free consultation and see how automation can transform your operations
          </p>
          <a 
            href="mailto:denis@afyahewani.io" 
            className="bg-white text-primary-blue px-8 py-3 rounded-md hover:bg-opacity-90 transition inline-block font-semibold"
          >
            Start Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default AutomationFocusSection;