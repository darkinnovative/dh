import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaUser, FaClock, FaTags, FaLightbulb, FaCog, FaChartLine } from 'react-icons/fa';

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

const caseStudies: CaseStudy[] = [
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
    image: "/file.jpeg",
    keyMetrics: [
      { label: "Uptime Improvement", value: "99.5%" },
      { label: "Response Time", value: "-60%" },
      { label: "Traffic Capacity", value: "5x" },
      { label: "Cost Reduction", value: "30%" }
    ]
  },
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
    image: "/file.jpeg",
    keyMetrics: [
      { label: "User Engagement", value: "+85%" },
      { label: "Learning Outcomes", value: "+70%" },
      { label: "Completion Time", value: "-40%" },
      { label: "User Retention", value: "+65%" }
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
    image: "/file.jpeg",
    keyMetrics: [
      { label: "Concurrent Users", value: "2M+" },
      { label: "Message Latency", value: "-80%" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Auto-scaling", value: "100%" }
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
    image: "/file.jpeg",
    keyMetrics: [
      { label: "Decision Speed", value: "+60%" },
      { label: "Feature Adoption", value: "+45%" },
      { label: "Cost Reduction", value: "-25%" },
      { label: "Data Accuracy", value: "99.8%" }
    ]
  }
];

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find(study => study.id === parseInt(id || '0'));

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-executive-800 mb-4">Case Study Not Found</h1>
          <p className="text-corporate-600 mb-8">The case study you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/case-studies')}
            className="bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-colors"
          >
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/case-studies')}
          className="flex items-center text-corporate-600 hover:text-accent-600 transition-colors mb-8 group"
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaArrowLeft className="mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </motion.button>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-corporate p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-executive-800 mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-corporate-600 mb-6">{caseStudy.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-corporate-600">
                  <FaUser className="mr-2 text-accent-600" />
                  <span className="font-medium">Team:</span>
                  <span className="ml-1">{caseStudy.team}</span>
                </div>
                <div className="flex items-center text-corporate-600">
                  <FaClock className="mr-2 text-accent-600" />
                  <span className="font-medium">Duration:</span>
                  <span className="ml-1">{caseStudy.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <FaTags className="text-accent-600 mt-1 mr-2" />
                <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                  caseStudy.type === 'System Design' 
                    ? 'bg-executive-100 text-executive-700 border border-executive-200' 
                    : 'bg-corporate-100 text-corporate-700 border border-corporate-200'
                }`}>
                  {caseStudy.type === 'System Design' ? <FaCog /> : <FaLightbulb />}
                  {caseStudy.type}
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-accent-600 text-white px-6 py-3 rounded-lg hover:bg-accent-700 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Project
                </a>
              </div>
            </div>
            
            <div className="order-first md:order-last">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-64 object-cover rounded-xl shadow-corporate"
              />
            </div>
          </div>
        </div>

        {/* Key Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-corporate p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <FaChartLine className="text-accent-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-executive-800">Key Metrics</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-accent-50 p-4 rounded-xl border border-accent-200 text-center"
              >
                <div className="text-2xl font-bold text-accent-700 mb-2">{metric.value}</div>
                <div className="text-corporate-600 text-sm font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-corporate p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <FaLightbulb className="text-accent-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-executive-800">Challenge</h2>
          </div>
          <p className="text-corporate-600 leading-relaxed">{caseStudy.challenge}</p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-corporate p-8 mb-8"
        >
          <div className="flex items-center mb-6">
            <FaCog className="text-accent-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-executive-800">Solution</h2>
          </div>
          <p className="text-corporate-600 leading-relaxed mb-6">{caseStudy.solution}</p>
          
          <h3 className="text-xl font-semibold text-executive-800 mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-corporate-100 text-corporate-800 px-4 py-2 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
        {/* Results & Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-corporate p-8"
        >
          <div className="flex items-center mb-6">
            <FaChartLine className="text-accent-600 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-executive-800">Results & Impact</h2>
          </div>
          <div className="bg-accent-50 p-6 rounded-xl border border-accent-200">
            <p className="text-corporate-700 font-medium leading-relaxed">{caseStudy.impact}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudyDetail;
