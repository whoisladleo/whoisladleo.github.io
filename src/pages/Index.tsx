
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyMeSection from '@/components/WhyMeSection';

const Index = () => {
  return (
    <div className="bg-white min-h-screen text-dark-slate">
      {/* Hero Section */}
      <header className="bg-light-gray py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-dark-slate mb-4">
            I fix what slows your business down
          </h1>
          <p className="text-xl text-neutral-gray mb-8">
            Manual reporting, repetitive approvals, data chaos. I help teams automate backend processes so they can scale without burning out.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:denis@afyahewani.io" 
              className="bg-primary-blue text-white px-6 py-3 rounded-md flex items-center hover:bg-opacity-90 transition"
            >
              <Mail className="mr-2"/> Contact Me
            </a>
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
      <HowItWorksSection />

      {/* Why Me Section */}
      <WhyMeSection />

      {/* Final CTA */}
      <section className="bg-dark-slate text-white text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-6">
          Let's automate the work no one sees but everyone feels
        </h2>
        <a 
          href="mailto:denis@afyahewani.io" 
          className="bg-primary-blue text-white px-8 py-4 rounded-md text-xl hover:bg-opacity-90 transition inline-block"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default Index;
