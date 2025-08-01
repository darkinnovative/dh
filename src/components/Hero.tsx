import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const navigate = useNavigate();

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    navigate('/case-studies');
  };

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="py-16 sm:py-20 md:py-24 lg:py-28 section-corporate relative overflow-hidden">
      {/* Corporate Grid Background */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px sm:60px sm:60px'
        }}></div>
      </div>
      
      {/* Subtle Corporate Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-executive-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-executive-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-executive-600 rounded-full animate-float opacity-70" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Hero Content */}
      <div className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="card-glass p-6 sm:p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-executive-800 via-executive-600 to-executive-800 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Dhairya Sharma
                </motion.h1>

                <motion.h2 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-corporate-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Senior Product Manager & Strategic Leader
                </motion.h2>

                <motion.p 
                  className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-corporate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Transforming complex business challenges into innovative product solutions. 
                  Specialized in driving cross-functional teams, data-driven strategy, and delivering 
                  exceptional user experiences that scale.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    className="btn-cta px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-corporate-lg"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToCaseStudies}
                  >
                    View Portfolio
                  </motion.button>
                  <motion.button 
                    className="btn-outline px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                  >
                    Schedule a Call
                  </motion.button>
                  <motion.button 
                    className="btn-secondary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/resume')}
                  >
                    <FaFileAlt className="text-sm" />
                    Resume
                  </motion.button>
                </motion.div>

                {/* Professional Highlights */}
                <motion.div 
                  className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-executive-600 mb-1">5+</div>
                    <div className="text-xs text-corporate-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-executive-600 mb-1">25+</div>
                    <div className="text-xs text-corporate-600 font-medium">Products Launched</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-executive-600 mb-1">98%</div>
                    <div className="text-xs text-corporate-600 font-medium">User Satisfaction</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex justify-center lg:justify-start space-x-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  {[
                    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: FaEnvelope, href: 'mailto:dhairya.sharma@example.com', label: 'Email' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-corporate-100 rounded-lg flex items-center justify-center text-base text-corporate-600 hover:bg-executive-600 hover:text-white transition-all duration-300 shadow-corporate group"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Professional Image Side */}
              <motion.div
                className="flex justify-center lg:justify-end order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-executive-600 to-executive-800 rounded-2xl flex items-center justify-center shadow-corporate-xl overflow-hidden border-2 border-corporate-200/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    {!imageError ? (
                      <div className="relative w-full h-full">
                        {imageLoading && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-pulse">
                              DS
                            </div>
                            <div className="text-lg font-medium opacity-80">Dhairya Sharma</div>
                          </div>
                        )}
                        <img 
                          src="/file.jpeg" 
                          alt="Dhairya Sharma - Senior Product Manager" 
                          className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                            imageLoading ? 'opacity-0' : 'opacity-100'
                          }`}
                          onLoad={() => setImageLoading(false)}
                          onError={() => setImageError(true)}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white">
                        <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                          DS
                        </div>
                        <div className="text-lg font-medium opacity-80">Dhairya Sharma</div>
                        <div className="text-sm opacity-60 mt-2">Product Manager</div>
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Professional decorative elements */}
                  <motion.div 
                    className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 rounded-xl shadow-corporate-lg flex items-center justify-center"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-executive-400 rounded-xl shadow-corporate"
                    animate={{ 
                      y: [0, 8, 0],
                      x: [0, 4, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  <motion.div 
                    className="absolute top-1/3 -left-6 w-4 h-4 bg-executive-600 rounded-xl shadow-corporate"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                      rotate: [0, 45, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Professional badge */}
                  <motion.div
                    className="absolute -bottom-2 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-corporate border border-corporate-200"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <div className="text-xs font-semibold text-executive-600">Senior PM</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 1.5 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            onClick={scrollToNext}
          >
            <FaArrowDown className="text-2xl text-corporate-600 hover:text-executive-600 transition-colors duration-300" />
          </motion.div>
                </div>
      </div>
    </section>
  );
};

export default Hero;
