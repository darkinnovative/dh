import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-corporate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <h3 className="text-xl font-bold text-executive-600 font-mono mb-4">
            &lt;Portfolio.dev/&gt;
          </h3>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-corporate-100 rounded-lg flex items-center justify-center text-corporate-600 hover:bg-executive-600 hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-corporate-100 rounded-lg flex items-center justify-center text-corporate-600 hover:bg-executive-600 hover:text-white transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@portfolio.dev"
              className="w-10 h-10 bg-corporate-100 rounded-lg flex items-center justify-center text-corporate-600 hover:bg-executive-600 hover:text-white transition-colors duration-300"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-corporate-600 text-sm">
            <span className="flex items-center justify-center gap-2">
              Crafted with <FaHeart className="text-accent-500 text-sm" /> © 2025 Portfolio
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
