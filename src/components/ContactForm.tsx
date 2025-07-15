import { useState } from 'react';
import { X, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
  defaultMessage?: string;
}

const ContactForm = ({ isOpen, onClose, subject = "Business Inquiry", defaultMessage = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subject,
    message: defaultMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_j9qp8jk', // Your Service ID
        'template_x0pfnbw', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'denis@afyahewani.io'
        },
        'VhfVy_twLxM2HtuqY' // Your Public Key
      );
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          name: '',
          email: '',
          subject: 'Business Inquiry',
          message: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-gray hover:text-dark-slate transition"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-dark-slate mb-6">Get in Touch</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-slate mb-1">
              <User className="inline w-4 h-4 mr-1" />
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-slate mb-1">
              <Mail className="inline w-4 h-4 mr-1" />
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-slate mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark-slate mb-1">
              <MessageSquare className="inline w-4 h-4 mr-1" />
              Message
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-neutral-gray hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
        
        <p className="text-sm text-neutral-gray mt-4 text-center">
          Or email directly at{' '}
          <a href="mailto:denis@afyahewani.io" className="text-primary-blue hover:underline">
            denis@afyahewani.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;