import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or suggestion? Want to collaborate? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 flex items-center justify-center rounded-lg text-white font-medium transition-all 
                      ${isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-purple-600 hover:bg-purple-700 transform hover:scale-[1.01]'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;