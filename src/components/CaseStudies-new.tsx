import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaCode, FaLightbulb, FaUsers, FaGithub, FaRocket, FaBullseye, FaChartLine } from 'react-icons/fa';

interface CaseStudy {
  id: number;
  title: string;
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
      keyMetrics: [
        { label: "Decision Speed", value: "+60%" },
        { label: "Feature Adoption", value: "+45%" },
        { label: "Cost Reduction", value: "-25%" },
        { label: "Data Accuracy", value: "99.8%" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    return type === 'System Design' ? <FaCode /> : <FaLightbulb />;
  };

  const getTypeColor = (type: string) => {
    return type === 'System Design' 
      ? 'bg-executive-100 text-executive-700 border border-executive-200' 
      : 'bg-corporate-100 text-corporate-700 border border-corporate-200';
  };

  const renderCaseCard = (study: CaseStudy, index: number) => (
    <motion.div
      key={study.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-corporate hover:shadow-corporate-lg transition-all duration-300 overflow-hidden group"
    >
      <div className="h-48 bg-gradient-to-br from-accent-100 to-corporate-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-accent-600 opacity-20">
            {getTypeIcon(study.type)}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getTypeColor(study.type)}`}>
            {getTypeIcon(study.type)}
            {study.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="text-corporate-600 text-sm bg-white px-2 py-1 rounded-md">{study.duration}</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-executive-800 mb-3 group-hover:text-accent-600 transition-colors">
          {study.title}
        </h3>
        
        <p className="text-corporate-600 mb-4 leading-relaxed line-clamp-3">
          {study.description}
        </p>

        {/* Key Metrics Preview */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {study.keyMetrics.slice(0, 2).map((metric, metricIndex) => (
            <div key={metricIndex} className="bg-accent-50 p-3 rounded-lg border border-accent-100">
              <div className="text-lg font-bold text-accent-700">{metric.value}</div>
              <div className="text-corporate-600 text-xs font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {study.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-corporate-100 text-corporate-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {study.technologies.length > 3 && (
              <span className="bg-corporate-200 text-corporate-600 px-3 py-1 rounded-full text-sm font-medium">
                +{study.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-corporate-500 text-sm">
            <FaUsers className="mr-2" />
            {study.team}
          </div>
          
          <button
            className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-700 transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
            onClick={() => navigate(`/case-studies/${study.id}`)}
          >
            View Details
            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="case-studies" className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
      {/* Corporate Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 100, 200, 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-executive-900 mb-6">
            Strategic Case Studies
          </h2>
          <p className="text-xl text-corporate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my comprehensive approach to solving complex technical and product challenges. 
            Each study demonstrates strategic thinking, technical excellence, and measurable business impact.
          </p>
        </motion.div>

        {/* System Design Section */}
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
              System Design Excellence
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {systemDesignCases.map((study, index) => renderCaseCard(study, index))}
          </div>
        </motion.div>

        {/* Product Thinking Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-corporate-600 rounded-full"></div>
            <h3 className="text-2xl font-bold text-executive-900">
              Product Thinking
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {productThinkingCases.map((study, index) => renderCaseCard(study, index))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
