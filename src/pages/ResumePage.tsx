import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';

const ResumePage: React.FC = () => {
  useEffect(() => {
    // Get transition direction from sessionStorage
    const direction = sessionStorage.getItem('transitionDirection') || 'forward';
    const startPosition = direction === 'forward' ? '100%' : '-100%';
    
    // Page entrance animation from appropriate direction
    document.body.style.transform = `translateX(${startPosition})`;
    document.body.style.transition = 'none';
    
    setTimeout(() => {
      document.body.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      document.body.style.transform = 'translateX(0)';
    }, 30);
    
    // Clean up
    return () => sessionStorage.removeItem('transitionDirection');
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-corporate-50 to-executive-100 relative transition-colors duration-300 overflow-x-hidden">
        {/* Corporate Pattern Background */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 100, 200, 0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <motion.main
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="pt-20 relative z-10"
        >
          <Resume />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ResumePage;
