import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaProjectDiagram, FaBook } from 'react-icons/fa';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome, type: 'scroll', order: 0 },
    { name: 'About', href: '#about', icon: FaUser, type: 'scroll', order: 0 },
    { name: 'Projects', href: '/projects', icon: FaBriefcase, type: 'page', order: 1 },
    { name: 'Case Studies', href: '/case-studies', icon: FaProjectDiagram, type: 'page', order: 2 },
    { name: 'Blog', href: '/blog', icon: FaBook, type: 'page', order: 3 },
    { name: 'Contact', href: '/contact', icon: FaEnvelope, type: 'page', order: 4 },
  ];

  // Get current page order for directional transitions
  const getCurrentPageOrder = () => {
    if (location.pathname === '/') return 0;
    const currentItem = navItems.find(item => item.href === location.pathname);
    return currentItem ? currentItem.order : 0;
  };

  // Navigation handler for both scroll and page navigation
  const handleNavigation = (item: any) => {
    if (item.type === 'scroll') {
      // Check if we're on the home page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (item.type === 'page') {
      // Determine transition direction based on page order
      const currentOrder = getCurrentPageOrder();
      const targetOrder = item.order;
      const isForward = targetOrder > currentOrder;
      
      // Set transition direction
      const exitDirection = isForward ? '-100%' : '100%';
      
      // Page transition with directional logic
      document.body.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      document.body.style.transform = `translateX(${exitDirection})`;
      
      setTimeout(() => {
        // Store navigation direction for entrance animation
        sessionStorage.setItem('transitionDirection', isForward ? 'forward' : 'backward');
        navigate(item.href);
        // Reset transform after navigation
        setTimeout(() => {
          document.body.style.transform = 'translateX(0)';
        }, 30);
      }, 250);
    }
  };

  // Determine if navigation item is active
  const isActiveNavItem = (item: any) => {
    if (item.type === 'scroll') {
      // Only highlight scroll items when we're on the home page
      return location.pathname === '/' && activeSection === item.href.substring(1);
    } else {
      return location.pathname === item.href;
    }
  };

  // Track active section on scroll (only for scroll-type nav items)
  useEffect(() => {
    const handleScroll = () => {
      const scrollItems = navItems.filter(item => item.type === 'scroll');
      const sections = scrollItems.map(item => ({
        id: item.href.substring(1),
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Ensure we're listening to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  // Keyboard and click outside support for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const menuContainer = target.closest('.mobile-dot-menu');
      if (!menuContainer && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Top Header */}
      <motion.header 
        className="sticky top-0 left-0 right-0 z-[90] nav:hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-corporate-200 px-3 sm:px-4 py-2.5 sm:py-3">
          <div className="flex items-center justify-center">
            {/* Mobile Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-base sm:text-lg font-bold text-executive-600 font-mono tracking-wider">&lt;Dhairya-Sharma.dev/&gt;</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Desktop Navigation */}
      <motion.header 
        className="sticky top-6 left-0 right-0 z-[100] px-6 hidden nav:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center max-w-7xl mx-auto relative">
          {/* Name/Logo - Left (absolute positioned) */}
          <motion.div 
            className="absolute left-0 px-4 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm font-bold text-executive-600 font-mono tracking-wider">&lt;Dhairya-Sharma.dev/&gt;</span>
          </motion.div>
          
          {/* Navigation - Center */}
          <motion.nav 
            className="flex items-center bg-white/95 backdrop-blur-xl shadow-corporate-lg rounded-full border border-corporate-200 px-3 py-1 gap-1"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={`flex items-center justify-center px-4 py-1.5 rounded-full transition-all duration-200 group relative ${
                isActiveNavItem(item)
                  ? 'bg-executive-600 text-white shadow-corporate' 
                  : 'text-corporate-600 hover:text-executive-600 hover:bg-corporate-100'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <item.icon className="text-sm mr-1.5" />
              <span className="text-xs font-medium">{item.name}</span>
            </motion.button>
          ))}
        </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Dot Menu Navigation - Left Side - Always Visible */}
      <motion.div 
        className="nav:hidden mobile-dot-menu"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ 
          position: 'fixed',
          right: '16px',
          top: '16px',
          transform: 'translateY(-50%)',
          zIndex: 99999,
          pointerEvents: 'auto'
        }}
      >
        {/* Dot Menu Toggle Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }
          }}
          className="w-12 h-12 bg-executive-600 backdrop-blur-xl rounded-full shadow-corporate-lg flex items-center justify-center text-white border border-executive-500 transition-all duration-300 hover:scale-105 hover:bg-executive-700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center gap-1"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                scale: isMobileMenuOpen ? 0.8 : 1,
                opacity: isMobileMenuOpen ? 0.7 : 1 
              }}
            />
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                scale: isMobileMenuOpen ? 1.2 : 1,
                opacity: isMobileMenuOpen ? 1 : 1 
              }}
            />
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                scale: isMobileMenuOpen ? 0.8 : 1,
                opacity: isMobileMenuOpen ? 0.7 : 1 
              }}
            />
          </motion.div>
        </motion.button>

        {/* Navigation Items - Vertical List */}
        <motion.div
          className="flex flex-col gap-3 mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? 0 : -20,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => {
                handleNavigation(item);
                setIsMobileMenuOpen(false); // Close menu after navigation
              }}
              className={`relative w-12 h-12 rounded-full shadow-corporate-lg flex items-center justify-center transition-all duration-300 group backdrop-blur-xl border-2 ${
                isActiveNavItem(item)
                  ? 'bg-executive-600 text-white shadow-executive-lg border-executive-400'
                  : 'bg-white/95 text-corporate-600 border-corporate-200 hover:border-executive-400 hover:text-executive-600 hover:scale-110 hover:shadow-executive'
              }`}
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -30,
                scale: isMobileMenuOpen ? 1 : 0.8
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMobileMenuOpen ? index * 0.05 + 0.1 : 0,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              aria-label={item.name}
              title={item.name}
            >
              {/* Active indicator ring */}
              {isActiveNavItem(item) && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              
              {/* Icon */}
              <item.icon className="text-lg relative z-10" />
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-executive-900/95 backdrop-blur-xl text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-corporate-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-20"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                {item.name}
                {/* Tooltip arrow */}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-executive-900/95"></div>
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        {/* Click outside overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </motion.div>
    </>
  );
};

export default Header;
