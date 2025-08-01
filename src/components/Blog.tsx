import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaTimes, FaExternalLinkAlt, FaBookOpen, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'Frontend' | 'Backend' | 'Product' | 'Design' | 'DevOps';
  tags: string[];
  readTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
  keyMetrics: {
    label: string;
    value: string;
  }[];
  link?: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications with TypeScript, including advanced patterns and performance optimization techniques.",
      content: `
        <h3>Introduction</h3>
        <p>Building scalable React applications requires careful consideration of architecture, TypeScript implementation, and performance optimization. In this comprehensive guide, we'll explore proven patterns and practices.</p>
        
        <h3>Key Concepts Covered</h3>
        <ul>
          <li>Advanced TypeScript patterns for React components</li>
          <li>State management with Redux Toolkit and TypeScript</li>
          <li>Performance optimization techniques</li>
          <li>Code splitting and lazy loading strategies</li>
          <li>Testing strategies for TypeScript React apps</li>
        </ul>
        
        <h3>Architecture Patterns</h3>
        <p>We'll dive deep into folder structure, component composition, and how to leverage TypeScript's type system to catch errors at compile time rather than runtime.</p>
        
        <h3>Performance Optimization</h3>
        <p>Learn about React.memo, useMemo, useCallback, and other optimization techniques that work seamlessly with TypeScript.</p>
      `,
      category: 'Frontend',
      tags: ['React', 'TypeScript', 'Performance', 'Architecture', 'Best Practices'],
      readTime: '12 min read',
      publishDate: '2024-01-15',
      image: '/blog/react-typescript.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Performance Gain', value: '40%' },
        { label: 'Code Maintainability', value: '85%' },
        { label: 'Type Safety', value: '100%' },
        { label: 'Developer Experience', value: '95%' }
      ]
    },
    {
      id: 2,
      title: "Modern API Design with Node.js and GraphQL",
      excerpt: "Explore advanced GraphQL patterns, performance optimization, and security best practices for building robust APIs that scale.",
      content: `
        <h3>GraphQL Fundamentals</h3>
        <p>GraphQL provides a powerful query language for APIs that allows clients to request exactly the data they need. This comprehensive guide covers advanced implementation patterns.</p>
        
        <h3>Performance Optimization</h3>
        <ul>
          <li>DataLoader pattern for N+1 query resolution</li>
          <li>Query complexity analysis and rate limiting</li>
          <li>Caching strategies with Redis</li>
          <li>Schema federation for microservices</li>
        </ul>
        
        <h3>Security Best Practices</h3>
        <p>Learn how to implement authentication, authorization, and query validation to secure your GraphQL endpoints.</p>
      `,
      category: 'Backend',
      tags: ['Node.js', 'GraphQL', 'API Design', 'Performance', 'Security'],
      readTime: '15 min read',
      publishDate: '2024-01-10',
      image: '/blog/graphql-api.jpg',
      featured: true,
      keyMetrics: [
        { label: 'Response Time', value: '120ms' },
        { label: 'Throughput', value: '10k/sec' },
        { label: 'Security Score', value: 'A+' },
        { label: 'Code Coverage', value: '92%' }
      ]
    },
    {
      id: 3,
      title: "Designing Intuitive User Experiences",
      excerpt: "A deep dive into UX research, design systems, and accessibility principles that drive user engagement and satisfaction.",
      content: `
        <h3>User-Centered Design</h3>
        <p>Understanding your users is the foundation of great design. This guide covers research methodologies, persona development, and user journey mapping.</p>
        
        <h3>Design Systems</h3>
        <ul>
          <li>Component library development</li>
          <li>Design token management</li>
          <li>Accessibility guidelines</li>
          <li>Cross-platform consistency</li>
        </ul>
        
        <h3>Measuring Success</h3>
        <p>Learn how to implement analytics and user feedback systems to continuously improve the user experience.</p>
      `,
      category: 'Design',
      tags: ['UX Design', 'Design Systems', 'Accessibility', 'User Research'],
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/blog/ux-design.jpg',
      featured: false,
      keyMetrics: [
        { label: 'User Satisfaction', value: '94%' },
        { label: 'Task Completion', value: '98%' },
        { label: 'Accessibility Score', value: 'AAA' },
        { label: 'Design Consistency', value: '100%' }
      ]
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Product', 'Design', 'DevOps'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
      'Product': 'bg-accent-100 text-accent-700 border border-accent-200',
      'Design': 'bg-executive-200 text-executive-800 border border-executive-300',
      'DevOps': 'bg-corporate-200 text-corporate-800 border border-corporate-300'
    };
    return colors[category] || 'bg-corporate-100 text-corporate-700 border border-corporate-200';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      'Frontend': <FaCode className="text-sm" />,
      'Backend': <FaRocket className="text-sm" />,
      'Product': <FaLightbulb className="text-sm" />,
      'Design': <FaBookOpen className="text-sm" />,
      'DevOps': <FaRocket className="text-sm" />
    };
    return icons[category] || <FaCode className="text-sm" />;
  };

  const renderBlogCard = (post: BlogPost, index: number) => (
    <motion.div
      key={post.id}
      className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-corporate overflow-hidden border border-corporate-200 hover:border-executive-400 hover:shadow-executive transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getCategoryColor(post.category)}`}>
            {getCategoryIcon(post.category)}
            {post.category}
          </span>
          <div className="text-corporate-600 text-sm">{post.readTime}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold text-executive-900 mb-4 hover:text-executive-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-corporate-700 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {post.keyMetrics.slice(0, 4).map((metric, metricIndex) => (
            <motion.div
              key={metricIndex}
              className="bg-executive-50 p-3 rounded-lg border border-executive-200 text-center"
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 6).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-executive-100 text-executive-700 border border-executive-200 rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-corporate-600 text-sm">
            <FaCalendar className="text-executive-500" />
            {formatDate(post.publishDate)}
          </div>
          <motion.button
            onClick={() => setSelectedPost(post)}
            className="inline-flex items-center gap-2 bg-executive-600 hover:bg-executive-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-corporate"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
            <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-executive-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-corporate w-full h-full max-w-7xl max-h-[95vh] overflow-y-auto border border-corporate-200"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-12 pb-8">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-8 right-8 text-corporate-600 hover:text-executive-700 transition-colors duration-200 p-3 rounded-full hover:bg-corporate-100"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-6 py-3 rounded-full text-lg font-medium ${getCategoryColor(selectedPost.category)}`}>
                    {selectedPost.category}
                  </span>
                  {selectedPost.featured && (
                    <span className="bg-executive-100 text-executive-700 border border-executive-200 px-4 py-2 rounded-full text-lg font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-executive-900 mb-6 leading-tight">
                  {selectedPost.title}
                </h2>
                
                <p className="text-corporate-700 text-xl leading-relaxed mb-6 max-w-4xl">
                  {selectedPost.excerpt}
                </p>

                <div className="flex items-center gap-8 text-lg text-corporate-600">
                  <span className="flex items-center gap-3">
                    <FaCalendar className="text-executive-500" size={20} />
                    {formatDate(selectedPost.publishDate)}
                  </span>
                  <span className="flex items-center gap-3">
                    <FaClock className="text-executive-500" size={20} />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-12 pb-12">
                {/* Tags */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-executive-900 mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedPost.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-6 py-3 bg-executive-100 text-executive-700 border border-executive-200 rounded-lg font-medium text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Article Content */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-executive-900 mb-6">Article Content</h3>
                  <div className="bg-corporate-50 p-10 rounded-xl border border-corporate-200">
                    <div 
                      className="prose prose-lg max-w-none text-corporate-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-4 bg-executive-600 text-white px-8 py-5 rounded-xl font-semibold hover:bg-executive-700 transition-all duration-300 shadow-corporate text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={20} />
                    Share Article
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedPost(null)}
                    className="px-8 py-5 bg-corporate-300 text-corporate-800 rounded-xl font-semibold hover:bg-corporate-400 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
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

      <section id="blog" className="py-16 lg:py-20 bg-gradient-to-br from-corporate-50 to-executive-100 relative overflow-hidden">
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
              <FaBookOpen className="text-executive-600" />
              Insights & Expertise
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-executive-900">
              Blog & <span className="text-executive-600">Insights</span>
            </h2>
            <p className="text-lg text-corporate-700 max-w-3xl mx-auto leading-relaxed">
              Strategic insights, technical expertise, and industry perspectives from product development, 
              technology innovation, and business leadership.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-corporate-200 shadow-corporate">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-corporate-600" />
                  <input
                    type="text"
                    placeholder="Search articles, insights, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/90 border border-corporate-200 rounded-xl text-corporate-900 placeholder-corporate-600 focus:outline-none focus:border-executive-500 focus:ring-2 focus:ring-executive-500/20 transition-all"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-executive-600 text-white shadow-executive'
                          : 'bg-white/90 text-corporate-700 hover:bg-executive-50 hover:text-executive-700 border border-corporate-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-4xl font-bold text-executive-900 mb-12">
                Featured <span className="text-executive-600">Articles</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => renderBlogCard(post, index))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-executive-900 mb-12">
              All <span className="text-executive-600">Articles</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {(selectedCategory === 'All' && searchTerm === '' ? regularPosts : filteredPosts).map((post, index) => renderBlogCard(post, index))}
            </div>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-executive-900 mb-4">No Articles Found</h3>
              <p className="text-corporate-700">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
