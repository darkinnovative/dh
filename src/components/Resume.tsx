import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to your public folder
    link.download = 'Dhairya_Sharma_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-executive-100 text-executive-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-corporate"
          >
            <FaFileAlt className="text-executive-600" />
            Professional Resume
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-executive-900">
            Dhairya <span className="text-executive-600">Sharma</span>
          </h1>
          <p className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Senior Product Manager & Strategic Leader with expertise in transforming complex business challenges into innovative solutions.
          </p>

          {/* Download Button */}
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 bg-executive-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-executive-700 transition-all duration-300 shadow-corporate"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-corporate border border-corporate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <div className="text-center border-b border-corporate-200 pb-8 mb-8">
            <h1 className="text-3xl font-bold text-executive-900 mb-2">
              Dhairya Sharma
            </h1>
            <p className="text-xl text-corporate-700 mb-4">Senior Product Manager & Strategic Leader</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-corporate-600">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-executive-600" />
                <span>dhairya.sharma@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-executive-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-executive-600" />
                <span>linkedin.com/in/dhairya-sharma</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-executive-600" />
                <span>github.com/dhairya-sharma</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-executive-900 mb-3 border-l-4 border-executive-600 pl-4">
              Professional Summary
            </h2>
            <p className="text-corporate-700 leading-relaxed">
              Strategic Product Manager and Full-Stack Developer with 5+ years of experience building scalable web applications 
              and leading cross-functional teams. Proven track record of transforming complex business requirements into 
              user-centric solutions that drive growth and engagement. Expertise in React, Node.js, cloud architecture, 
              and agile product development methodologies.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-executive-900 mb-4 border-l-4 border-executive-600 pl-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-6 border border-corporate-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-lg font-semibold text-executive-900">Senior Product Manager</h3>
                  <span className="text-executive-600 font-medium text-sm">2022 - Present</span>
                </div>
                <p className="text-corporate-600 mb-3">TechCorp Solutions • San Francisco, CA</p>
                <ul className="text-corporate-700 space-y-1 text-sm">
                  <li>• Led product strategy for e-commerce platform serving 10M+ users</li>
                  <li>• Increased user engagement by 45% through data-driven feature development</li>
                  <li>• Managed cross-functional team of 12 engineers and designers</li>
                  <li>• Reduced customer acquisition cost by 30% through optimized user onboarding</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-6 border border-corporate-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-lg font-semibold text-executive-900">Full-Stack Developer</h3>
                  <span className="text-executive-600 font-medium text-sm">2020 - 2022</span>
                </div>
                <p className="text-corporate-600 mb-3">InnovateLabs • Remote</p>
                <ul className="text-corporate-700 space-y-1 text-sm">
                  <li>• Developed and maintained React-based web applications with Node.js backends</li>
                  <li>• Implemented microservices architecture reducing system latency by 60%</li>
                  <li>• Built real-time collaboration tools using WebSocket and Redis</li>
                  <li>• Achieved 99.9% uptime through robust testing and monitoring practices</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-6 border border-corporate-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-lg font-semibold text-executive-900">Software Engineer</h3>
                  <span className="text-executive-600 font-medium text-sm">2019 - 2020</span>
                </div>
                <p className="text-corporate-600 mb-3">StartupXYZ • Austin, TX</p>
                <ul className="text-corporate-700 space-y-1 text-sm">
                  <li>• Built mobile-first web applications using React and TypeScript</li>
                  <li>• Integrated third-party APIs and payment processing systems</li>
                  <li>• Optimized application performance resulting in 40% faster load times</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-executive-900 mb-4 border-l-4 border-executive-600 pl-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900 mb-3">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                    <span key={skill} className="bg-executive-100 text-executive-700 px-3 py-1 rounded-full text-sm border border-executive-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900 mb-3">Backend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'].map((skill) => (
                    <span key={skill} className="bg-executive-100 text-executive-700 px-3 py-1 rounded-full text-sm border border-executive-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900 mb-3">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map((skill) => (
                    <span key={skill} className="bg-executive-100 text-executive-700 px-3 py-1 rounded-full text-sm border border-executive-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900 mb-3">Product Management</h4>
                <div className="flex flex-wrap gap-2">
                  {['Agile', 'Scrum', 'Product Strategy', 'User Research', 'Analytics'].map((skill) => (
                    <span key={skill} className="bg-executive-100 text-executive-700 px-3 py-1 rounded-full text-sm border border-executive-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-executive-900 mb-4 border-l-4 border-executive-600 pl-4">
              Education
            </h2>
            <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-6 border border-corporate-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg font-semibold text-executive-900">Master of Science in Computer Science</h3>
                <span className="text-executive-600 font-medium text-sm">2017 - 2019</span>
              </div>
              <p className="text-corporate-600 mb-2">Stanford University • Stanford, CA</p>
              <p className="text-corporate-700 text-sm">Specialization: Software Engineering & Human-Computer Interaction</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xl font-bold text-executive-900 mb-4 border-l-4 border-executive-600 pl-4">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900">AWS Certified Solutions Architect</h4>
                <p className="text-executive-600 text-sm">Amazon Web Services • 2023</p>
              </div>
              <div className="bg-gradient-to-br from-executive-50 to-corporate-100 rounded-lg p-4 border border-corporate-200">
                <h4 className="font-semibold text-executive-900">Certified Scrum Product Owner</h4>
                <p className="text-executive-600 text-sm">Scrum Alliance • 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
