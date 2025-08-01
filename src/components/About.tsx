import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaUsers, FaRocket, FaHeart, FaCoffee } from 'react-icons/fa';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: '25+', label: 'Products Launched', icon: <FaRocket /> },
    { number: '5+', label: 'Years Experience', icon: <FaCode /> },
    { number: '98%', label: 'User Satisfaction', icon: <FaHeart /> },
  ];

  const features: Feature[] = [
    {
      icon: <FaLightbulb />,
      title: 'Strategic Vision',
      description: 'Developing comprehensive product roadmaps aligned with business objectives and user needs'
    },
    {
      icon: <FaUsers />,
      title: 'Cross-functional Leadership',
      description: 'Leading diverse teams of engineers, designers, and stakeholders to deliver exceptional products'
    },
    {
      icon: <FaCode />,
      title: 'Data-Driven Decisions',
      description: 'Using analytics and user research to guide product decisions and optimize user experiences'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-corporate-50 via-white to-corporate-100 relative">
      {/* Professional Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
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
      
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-executive-800 via-executive-600 to-executive-800 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.p 
            className="text-center text-base sm:text-lg md:text-xl text-corporate-700 font-medium max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Strategic product leader with a passion for innovation and driving business growth through exceptional user experiences
          </motion.p>

          {/* Main Content Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-corporate-xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 border border-corporate-200/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="space-y-5 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-corporate-900 mb-3 sm:mb-4 flex items-center gap-3">
                    <FaCoffee className="text-executive-600 text-lg sm:text-xl" />
                    <span className="text-executive-600">//</span> Professional Journey
                  </h3>
                  <p className="text-corporate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    Strategic Product Manager with 5+ years of experience transforming
                    innovative ideas into successful digital products. My expertise spans 
                    product strategy, user experience optimization, and cross-functional team leadership.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-corporate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    I specialize in data-driven decision making, market research,
                    competitive analysis, feature prioritization, and go-to-market strategies 
                    that drive measurable business outcomes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-corporate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    Passionate about mentoring emerging talent, exploring cutting-edge technologies, 
                    and continuous learning to stay ahead of industry trends and deliver exceptional results.
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4 sm:gap-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-corporate-200 hover:border-executive-400 hover:shadow-corporate-lg transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-executive-600 rounded-lg flex items-center justify-center text-white text-base sm:text-lg flex-shrink-0 shadow-corporate">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-corporate-900 mb-2 text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-corporate-700 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-corporate-xl text-center border border-corporate-200 hover:border-executive-400 hover:shadow-corporate-xl transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-executive-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl mx-auto mb-3 sm:mb-4 shadow-corporate"
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-executive-600 to-executive-800 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 1 + index * 0.15,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  className="text-corporate-700 font-medium text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
