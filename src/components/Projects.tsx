import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaClock, FaArrowRight, FaTimes, FaCode, FaMobile, FaDesktop, FaServer, FaDatabase, FaRocket } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Full Stack' | 'Desktop';
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  completionDate: string;
  duration: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform with Microservices",
      excerpt: "A scalable e-commerce platform built with React, Node.js, and MongoDB featuring microservices architecture, real-time notifications, and advanced analytics.",
      description: `
        <h3>Project Overview</h3>
        <p>Built a comprehensive e-commerce platform from the ground up using modern web technologies and microservices architecture. The platform handles thousands of concurrent users and processes millions of transactions.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>User authentication and authorization with JWT</li>
          <li>Real-time shopping cart with Redis caching</li>
          <li>Payment integration with Stripe and PayPal</li>
          <li>Order tracking and notification system</li>
          <li>Admin dashboard with analytics and reporting</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The backend consists of multiple microservices including user management, product catalog, order processing, and payment handling. Used Docker for containerization and Kubernetes for orchestration.</p>
        
        <h3>Challenges & Solutions</h3>
        <p>Implemented complex state management using Redux Toolkit, optimized database queries for performance, and ensured secure payment processing with PCI compliance.</p>
      `,
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe', 'Docker', 'Kubernetes'],
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      image: '/projects/ecommerce-platform.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Users Handled', value: '10K+' },
        { label: 'Response Time', value: '<200ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Conversion Rate', value: '12%' }
      ],
      completionDate: '2024-01-15',
      duration: '4 months'
    },
    {
      id: 2,
      title: "Real-Time Collaboration App",
      excerpt: "A modern team collaboration platform with real-time messaging, file sharing, video calls, and project management tools built with React and Socket.io.",
      description: `
        <h3>Project Overview</h3>
        <p>Developed a comprehensive collaboration platform that enables teams to communicate, share files, and manage projects in real-time. The application supports unlimited users and integrates with popular productivity tools.</p>
        
        <h3>Core Features</h3>
        <ul>
          <li>Real-time messaging with typing indicators</li>
          <li>File sharing with drag-and-drop interface</li>
          <li>Video conferencing integration</li>
          <li>Kanban-style project boards</li>
          <li>Calendar integration and scheduling</li>
          <li>Mobile-responsive design</li>
        </ul>
        
        <h3>Technical Architecture</h3>
        <p>Built using React for the frontend with Material-UI for consistent design. Backend powered by Node.js with Socket.io for real-time communication and MongoDB for data persistence.</p>
        
        <h3>Performance Optimization</h3>
        <p>Implemented message pagination, file compression, and lazy loading to ensure smooth performance even with large teams and extensive message history.</p>
      `,
      category: 'Full Stack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI', 'WebRTC'],
      github: 'https://github.com/username/collaboration-app',
      demo: 'https://collab-demo.com',
      image: '/projects/collaboration-app.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Active Users', value: '5K+' },
        { label: 'Messages/Day', value: '50K+' },
        { label: 'File Transfers', value: '1TB+' },
        { label: 'User Rating', value: '4.8★' }
      ],
      completionDate: '2024-01-10',
      duration: '3 months'
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      excerpt: "An intelligent analytics dashboard using machine learning for predictive insights, built with React, Python, and TensorFlow for data visualization and analysis.",
      description: `
        <h3>Project Overview</h3>
        <p>Created an advanced analytics dashboard that leverages machine learning algorithms to provide predictive insights and automated reporting for business intelligence.</p>
        
        <h3>Key Capabilities</h3>
        <ul>
          <li>Real-time data visualization with D3.js</li>
          <li>Predictive analytics using TensorFlow</li>
          <li>Automated report generation</li>
          <li>Custom dashboard creation</li>
          <li>Data export and sharing features</li>
          <li>Multi-source data integration</li>
        </ul>
        
        <h3>ML Implementation</h3>
        <p>Integrated TensorFlow models for time series forecasting, anomaly detection, and trend analysis. The Python backend processes large datasets and serves predictions via RESTful APIs.</p>
        
        <h3>Data Processing</h3>
        <p>Built ETL pipelines to handle data from multiple sources including databases, APIs, and file uploads. Implemented real-time data streaming with Apache Kafka.</p>
      `,
      category: 'Frontend',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Apache Kafka'],
      github: 'https://github.com/username/ai-dashboard',
      demo: 'https://ai-dashboard-demo.com',
      image: '/projects/ai-dashboard.jpg',
      featured: false,
      keyMetrics: [
        { label: 'Data Points', value: '1M+' },
        { label: 'Accuracy', value: '94%' },
        { label: 'Processing Speed', value: '5ms' },
        { label: 'Cost Savings', value: '40%' }
      ],
      completionDate: '2024-01-05',
      duration: '6 months'
    },
    {
      id: 4,
      title: "Mobile Fitness Tracking App",
      excerpt: "A comprehensive fitness tracking mobile application with workout planning, nutrition tracking, and social features built using React Native and Firebase.",
      description: `
        <h3>Project Overview</h3>
        <p>Developed a feature-rich mobile fitness application that helps users track workouts, monitor nutrition, and connect with a fitness community. Available on both iOS and Android platforms.</p>
        
        <h3>Main Features</h3>
        <ul>
          <li>Workout tracking with timer and progress monitoring</li>
          <li>Nutrition logging with barcode scanning</li>
          <li>Social features and community challenges</li>
          <li>Goal setting and achievement tracking</li>
          <li>Integration with health apps and wearables</li>
          <li>Offline mode for uninterrupted tracking</li>
        </ul>
        
        <h3>Technical Stack</h3>
        <p>Built with React Native for cross-platform compatibility, Firebase for real-time database and authentication, and integrated third-party APIs for nutrition data and exercise libraries.</p>
        
        <h3>User Experience</h3>
        <p>Focused on intuitive design with smooth animations, easy navigation, and accessibility features. Implemented push notifications and gamification elements to increase user engagement.</p>
      `,
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
      github: 'https://github.com/username/fitness-app',
      demo: 'https://fitness-app-demo.com',
      image: '/projects/fitness-app.jpg',
      featured: false,
      keyMetrics: [
        { label: 'Downloads', value: '25K+' },
        { label: 'Daily Active Users', value: '3K+' },
        { label: 'App Store Rating', value: '4.7★' },
        { label: 'Retention Rate', value: '78%' }
      ],
      completionDate: '2023-12-20',
      duration: '5 months'
    }
  ];

  // Separate featured and regular projects
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'bg-executive-100 text-executive-700 border border-executive-200',
      'Backend': 'bg-corporate-100 text-corporate-700 border border-corporate-200',
      'Mobile': 'bg-accent-100 text-accent-700 border border-accent-200',
      'Full Stack': 'bg-executive-200 text-executive-800 border border-executive-300',
      'Desktop': 'bg-corporate-200 text-corporate-800 border border-corporate-300'
    };
    return colors[category] || 'bg-corporate-100 text-corporate-700 border border-corporate-200';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'Frontend': <FaDesktop className="text-sm" />,
      'Backend': <FaServer className="text-sm" />,
      'Mobile': <FaMobile className="text-sm" />,
      'Full Stack': <FaDatabase className="text-sm" />,
      'Desktop': <FaDesktop className="text-sm" />
    };
    return icons[category] || <FaCode className="text-sm" />;
  };

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-corporate-lg overflow-hidden border border-corporate-200 hover:border-executive-300 hover:shadow-corporate-xl transition-all duration-500 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -4, 
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 ${getCategoryColor(project.category)}`}>
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
          <div className="text-corporate-500 text-sm">{project.duration}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-executive-900 mb-3 group-hover:text-executive-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-corporate-700 mb-6 leading-relaxed text-sm">
          {project.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
            <motion.div
              key={metricIndex}
              className="bg-gradient-to-br from-executive-50 to-corporate-100 p-3 rounded-lg border border-corporate-200 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + metricIndex * 0.1,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-bold text-executive-600">{metric.value}</div>
              <div className="text-xs text-corporate-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 6).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-corporate-100 text-corporate-700 border border-corporate-200 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-corporate-500 text-sm">
            <FaCalendar className="text-executive-600" />
            {formatDate(project.completionDate)}
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-corporate-100 hover:bg-corporate-200 text-corporate-700 px-3 py-2 rounded-lg font-medium transition-all duration-300 shadow-corporate text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xs" />
              Code
            </motion.a>
            <motion.button
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center gap-2 bg-executive-600 hover:bg-executive-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 shadow-corporate text-xs"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
              <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-corporate-xl w-full h-full max-w-6xl max-h-[90vh] overflow-y-auto border border-corporate-200"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-8 pb-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-corporate-500 hover:text-executive-600 transition-colors duration-200 p-2 rounded-full hover:bg-corporate-100"
                >
                  <FaTimes size={20} />
                </button>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="bg-accent-100 text-accent-700 border border-accent-200 px-3 py-1.5 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-executive-900 mb-4 leading-tight">
                  {selectedProject.title}
                </h2>
                
                <p className="text-corporate-700 text-lg leading-relaxed mb-4 max-w-4xl">
                  {selectedProject.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-corporate-600">
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-executive-600" />
                    {formatDate(selectedProject.completionDate)}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-executive-600" />
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                {/* Key Metrics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-executive-900 mb-4">Project Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {selectedProject.keyMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-executive-50 to-corporate-100 p-4 rounded-xl border border-corporate-200 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-executive-600 mb-1">{metric.value}</div>
                        <div className="text-corporate-600 text-sm">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-executive-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-corporate-100 text-corporate-700 border border-corporate-200 rounded-lg font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-executive-900 mb-4">Project Details</h3>
                  <div className="bg-gradient-to-br from-executive-50 to-corporate-100 p-6 rounded-xl border border-corporate-200">
                    <div 
                      className="prose prose-corporate max-w-none text-corporate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-executive-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-executive-700 transition-all duration-300 shadow-corporate"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    View Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-corporate-100 hover:bg-corporate-200 text-corporate-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-corporate"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-corporate-200 hover:bg-corporate-300 text-corporate-700 rounded-xl font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <FaRocket className="text-executive-600" />
              Strategic Portfolio
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-executive-900">
              Project <span className="text-executive-600">Showcase</span>
            </h2>
            <p className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed">
              Delivering impactful solutions through strategic development, innovative technology integration, 
              and data-driven results that drive business growth and operational excellence.
            </p>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-executive-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-executive-900">
                  Featured Solutions
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            </motion.div>
          )}

          {/* Regular Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-corporate-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-executive-900">
                Additional Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {regularProjects.map((project: Project, index: number) => renderProjectCard(project, index))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
