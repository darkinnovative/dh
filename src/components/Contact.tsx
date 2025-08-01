import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaComments } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      console.error('Error:', data);
      alert(data?.errors?.[0]?.msg || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Network error. Please try again later.');
  }
};

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
      {/* Corporate Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 100, 200, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Floating Business Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-executive-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-corporate-300/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-executive-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-executive-100 text-executive-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-corporate"
          >
            <FaComments className="text-executive-600" />
            Let's Connect
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-executive-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In <span className="text-executive-600">Touch</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to collaborate on your next strategic initiative? Let's discuss how we can create exceptional products together.
          </motion.p>

          <motion.div
            className="bg-white/95 backdrop-blur-xl border border-corporate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-corporate"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-corporate-200 bg-white/90 backdrop-blur-sm text-corporate-900 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-executive-500 outline-none transition-all duration-300 placeholder-corporate-600 text-sm sm:text-base"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 border border-corporate-200 bg-white/90 backdrop-blur-sm text-corporate-900 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-executive-500 outline-none transition-all duration-300 placeholder-corporate-600 text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-corporate-200 bg-white/90 backdrop-blur-sm text-corporate-900 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-executive-500 outline-none transition-all duration-300 placeholder-corporate-600 text-sm sm:text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-corporate-200 bg-white/90 backdrop-blur-sm text-corporate-900 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-executive-500 outline-none transition-all duration-300 resize-none placeholder-corporate-600 text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="bg-executive-600 hover:bg-executive-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-corporate text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="text-sm sm:text-base" />
                  <span>Send Message</span>
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Contact Info Footer */}
            <motion.div
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-corporate-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-corporate-600 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-executive-600" />
                  <span>dhairya@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-executive-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-executive-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
