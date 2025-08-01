import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaCalendar, FaArrowRight, FaRocket, FaBrain, FaCogs } from 'react-icons/fa';

interface CaseStudy {
  id: number;
  title: string;
  excerpt: string;
  type: 'System Design' | 'Product Thinking';
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  duration: string;
  team: string;
  link: string;
  image: string;
  featured: boolean;
  completionDate: string;
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  const systemDesignCases: CaseStudy[] = [
    {
      id: 1,
      title: "Scalable E-commerce Microservices Architecture",
      excerpt: "Designed and implemented a distributed microservices architecture for a high-traffic e-commerce platform handling 10M+ users with 99.5% uptime improvement.",
      type: "System Design",
      description: "Designed and implemented a distributed microservices architecture for a high-traffic e-commerce platform handling 10M+ users.",
      challenge: "The existing monolithic architecture was struggling with peak traffic, causing frequent downtime and poor user experience during sales events.",
      solution: "Implemented a microservices architecture with event-driven communication, implemented caching strategies, and designed for horizontal scaling.",
      impact: "Reduced system downtime by 99.5%, improved response times by 60%, and enabled the platform to handle 5x traffic during peak events.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "MongoDB", "RabbitMQ", "AWS"],
      duration: "6 months",
      team: "8 engineers",
      link: "https://github.com/yourusername/ecommerce-microservices",
      image: "system-design-1",
      featured: true,
      completionDate: "2024-01-15",
      keyMetrics: [
        { label: "Uptime Improvement", value: "99.5%" },
        { label: "Response Time", value: "-60%" },
        { label: "Traffic Capacity", value: "5x" },
        { label: "Cost Reduction", value: "30%" }
      ]
    },
    {
      id: 3,
      title: "Real-time Chat System with Auto-scaling",
      excerpt: "Built a real-time messaging platform capable of handling millions of concurrent users with auto-scaling infrastructure and 99.9% uptime.",
      type: "System Design",
      description: "Built a real-time messaging platform capable of handling millions of concurrent users with auto-scaling infrastructure.",
      challenge: "Existing chat system couldn't handle peak loads during major events, causing message delays and connection drops.",
      solution: "Implemented WebSocket clustering with Redis pub/sub, horizontal auto-scaling, and message queuing for reliability.",
      impact: "Achieved 99.9% uptime, reduced message latency by 80%, and enabled seamless scaling for 2M+ concurrent users.",
      technologies: ["Node.js", "Socket.io", "Redis", "Docker", "Kubernetes", "AWS", "PostgreSQL"],
      duration: "4 months",
      team: "6 engineers",
      link: "https://github.com/yourusername/realtime-chat",
      image: "system-design-2",
      featured: false,
      completionDate: "2024-01-10",
      keyMetrics: [
        { label: "Concurrent Users", value: "2M+" },
        { label: "Message Latency", value: "-80%" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Auto-scaling", value: "100%" }
      ]
    }
  ];

  const productThinkingCases: CaseStudy[] = [
    {
      id: 2,
      title: "AI-Powered Learning Platform",
      excerpt: "Led the product strategy and development of an adaptive learning platform that personalizes education content with 85% increased engagement.",
      type: "Product Thinking",
      description: "Led the product strategy and development of an adaptive learning platform that personalizes education content based on user behavior and learning patterns.",
      challenge: "Students were struggling with one-size-fits-all learning approaches, resulting in low engagement and poor learning outcomes.",
      solution: "Developed an AI-driven personalization engine that adapts content difficulty, learning path, and delivery method based on individual student progress and preferences.",
      impact: "Increased student engagement by 85%, improved learning outcomes by 70%, and reduced course completion time by 40%.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS", "D3.js"],
      duration: "8 months",
      team: "12 members",
      link: "https://learning-platform-demo.com",
      image: "product-thinking-1",
      featured: true,
      completionDate: "2024-01-05",
      keyMetrics: [
        { label: "User Engagement", value: "+85%" },
        { label: "Learning Outcomes", value: "+70%" },
        { label: "Completion Time", value: "-40%" },
        { label: "User Retention", value: "+65%" }
      ]
    },
    {
      id: 4,
      title: "Data-Driven Product Analytics Dashboard",
      excerpt: "Created a comprehensive analytics platform to help product teams make data-driven decisions with real-time insights and 60% faster decision-making.",
      type: "Product Thinking",
      description: "Created a comprehensive analytics platform to help product teams make data-driven decisions with real-time insights and predictive analytics.",
      challenge: "Product teams were making decisions based on gut feeling rather than data, leading to missed opportunities and inefficient resource allocation.",
      solution: "Built an integrated analytics dashboard with real-time data visualization, A/B testing framework, and predictive modeling capabilities.",
      impact: "Improved decision-making speed by 60%, increased feature adoption by 45%, and reduced development costs by 25%.",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "ClickHouse", "Docker", "AWS"],
      duration: "6 months",
      team: "10 members",
      link: "https://analytics-dashboard-demo.com",
      image: "product-thinking-2",
      featured: false,
      completionDate: "2023-12-20",
      keyMetrics: [
        { label: "Decision Speed", value: "+60%" },
        { label: "Feature Adoption", value: "+45%" },
        { label: "Cost Reduction", value: "-25%" },
        { label: "Data Accuracy", value: "99.8%" }
      ]
    }
  ];

  // Combine and separate featured and regular case studies
  const allCaseStudies = [...systemDesignCases, ...productThinkingCases];
  const featuredCaseStudies = allCaseStudies.filter(study => study.featured);
  const regularCaseStudies = allCaseStudies.filter(study => !study.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type: string) => {
    return type === 'System Design' ? <FaCogs className="text-sm" /> : <FaBrain className="text-sm" />;
  };

  const getTypeColor = (type: string) => {
    return type === 'System Design' 
      ? 'bg-executive-100 text-executive-700 border border-executive-200' 
      : 'bg-corporate-100 text-corporate-700 border border-corporate-200';
  };

  const renderCaseCard = (study: CaseStudy, index: number) => (
    <motion.div
      key={study.id}
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
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 ${getTypeColor(study.type)}`}>
            {getTypeIcon(study.type)}
            {study.type}
          </span>
          <div className="text-corporate-500 text-sm">{study.duration}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-executive-900 mb-3 group-hover:text-executive-600 transition-colors">
          {study.title}
        </h3>
        
        <p className="text-corporate-700 mb-6 leading-relaxed text-sm">
          {study.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
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
          {study.technologies.slice(0, 6).map((tech, techIndex) => (
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
            {formatDate(study.completionDate)}
          </div>
          <div className="flex gap-2">
            <motion.a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-corporate-100 hover:bg-corporate-200 text-corporate-700 px-3 py-2 rounded-lg font-medium transition-all duration-300 shadow-corporate text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="text-xs" />
              Link
            </motion.a>
            <motion.button
              onClick={() => navigate(`/case-studies/${study.id}`)}
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
    <section id="case-studies" className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
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
            Strategic Analysis
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-executive-900">
            Case <span className="text-executive-600">Studies</span>
          </h2>
          <p className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed">
            Explore my comprehensive approach to solving complex technical and product challenges. 
            Each study demonstrates strategic thinking, technical excellence, and measurable business impact.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
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
              {featuredCaseStudies.map((study, index) => renderCaseCard(study, index))}
            </div>
          </motion.div>
        )}

        {/* Regular Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-corporate-600 rounded-full"></div>
            <h3 className="text-2xl font-bold text-executive-900">
              Additional Case Studies
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {regularCaseStudies.map((study: CaseStudy, index: number) => renderCaseCard(study, index))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
