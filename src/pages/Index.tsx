import { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-dark-slate">
      {/* Hero Section */}
      <header className="bg-light-gray py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-dark-slate mb-4">
            Three ways to accelerate your business
          </h1>
          <p className="text-xl text-neutral-gray mb-8">
            From automation that eliminates manual work, to reliable hosting that scales with you, to healthcare platforms that transform patient care.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-primary-blue text-white px-6 py-3 rounded-md flex items-center hover:bg-opacity-90 transition"
            >
              <Mail className="mr-2"/> Contact Me
            </button>
            <a 
              href="https://www.linkedin.com/in/rwelamiladenis/" 
              target="_blank" 
              className="border border-primary-blue text-primary-blue px-6 py-3 rounded-md flex items-center hover:bg-primary-blue hover:text-white transition"
            >
              <Linkedin className="mr-2"/> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <ServicesSection />

      {/* How It Works Section */}
      {/* <HowItWorksSection /> */}

      {/* Why Me Section */}
      {/* <WhyMeSection /> */}

      {/* Final CTA */}
      <section className="bg-dark-slate text-white text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-6">
          Ready to transform your business?
        </h2>
        <button 
          onClick={() => setIsContactFormOpen(true)}
          className="bg-primary-blue text-white px-8 py-4 rounded-md text-xl hover:bg-opacity-90 transition"
        >
          Contact Me
        </button>
      </section>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        subject="Inquiring for Experimental Plan"
        defaultMessage="Hi Denis, I'm interested in the Experimental hosting plan. Can you provide more details and help me get started?"
      />
    </div>
  );
};

export default Index;
