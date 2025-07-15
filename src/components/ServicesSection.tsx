import { useState } from 'react';
import { 
  Workflow, 
  Server, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const ServicesSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactClick = (service: string) => {
    setContactSubject(`${service} Inquiry`);
    setContactMessage(`Hi Denis, I'm interested in learning more about your ${service.toLowerCase()} services. Can you provide more details?`);
    setIsContactFormOpen(true);
  };

  const services = [
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Streamline workflows, eliminate manual tasks, and connect your systems seamlessly.",
      features: ["Workflow Automation", "Data Sync Between Tools", "Internal Approval & Reporting", "System Integrations"],
      cta: "Automate Now",
      link: "/automation"
    },
    {
      icon: Server,
      title: "Web Hosting & Development",
      description: "From experimental projects to enterprise solutions, we scale with your needs.",
      features: ["Custom Development", "Cloud Infrastructure", "Vercel Deployments", "24/7 Support"],
      cta: "View Plans",
      link: "/hosting-plans"
    },
    {
      icon: Heart,
      title: "Healthcare Platform",
      description: "Transform patient care with our comprehensive healthcare management system.",
      features: ["Patient Management", "Appointment Scheduling", "Health Records", "Telemedicine"],
      cta: "Visit Platform",
      link: "https://afyahewani.io"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark-slate">
          Three Services. One Mission. Your Success.
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-soft-blue p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">
                <service.icon size={64} className="text-primary-blue" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-dark-slate">
                {service.title}
              </h3>
              <p className="text-neutral-gray mb-6">
                {service.description}
              </p>
              <ul className="text-left text-neutral-gray mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link ? (
                service.link.startsWith('http') ? (
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-blue text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-opacity-90 transition"
                  >
                    {service.cta}
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                ) : (
                  <Link 
                    to={service.link}
                    className="bg-primary-blue text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-opacity-90 transition"
                  >
                    {service.cta}
                  </Link>
                )
              ) : (
                <button 
                  onClick={() => handleContactClick(service.title)}
                  className="bg-primary-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
                >
                  {service.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        subject={contactSubject}
        defaultMessage={contactMessage}
      />
    </section>
  );
};

export default ServicesSection;
