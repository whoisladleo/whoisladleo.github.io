
import React from 'react';
import { 
  Workflow, 
  Database, 
  CheckCircle, 
  Link2 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline your processes and eliminate repetitive tasks."
    },
    {
      icon: Database,
      title: "Data Sync Between Tools",
      description: "Ensure seamless data flow across your tech stack."
    },
    {
      icon: CheckCircle,
      title: "Internal Approval & Reporting",
      description: "Automate approvals and generate reports effortlessly."
    },
    {
      icon: Link2,
      title: "System Integrations and Alerts",
      description: "Connect your systems and get real-time notifications."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-purple">
          Fix What Slows Your Business Down
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-soft-purple p-6 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <service.icon size={48} className="text-primary-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-purple">
                {service.title}
              </h3>
              <p className="text-neutral-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
