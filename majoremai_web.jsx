import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  MessageCircle, 
  Database, 
  Cpu, 
  Route, 
  Users, 
  BarChart3, 
  Sparkles,
  Star,
  Mail,
  Phone,
  Send,
  Bot,
  CheckCircle,
  FileText,
  Upload,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activeDemo, setActiveDemo] = useState(null);
  const [addressInput, setAddressInput] = useState('');
  const [sentimentInput, setSentimentInput] = useState('');
  const [showAddressResult, setShowAddressResult] = useState(false);
  const [showSentimentResult, setShowSentimentResult] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const tools = [
    {
      icon: Search,
      title: "Fuzzy Matching",
      description: "Intelligently match and merge duplicate customer records across your databases with advanced fuzzy logic algorithms.",
      category: "data-cleaning"
    },
    {
      icon: MessageCircle,
      title: "Sentiment Analysis",
      description: "Understand customer emotions and opinions from reviews, surveys, and support tickets using AI-powered NLP.",
      category: "ai-analysis",
      demo: true
    },
    {
      icon: MapPin,
      title: "Address Cleaning",
      description: "Standardize, validate, and geocode messy address data to ensure delivery accuracy and data integrity.",
      category: "data-cleaning",
      demo: true
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with automated exploratory analysis and visualization dashboards.",
      category: "analytics"
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Design scalable, efficient, and secure database schemas tailored to your business requirements and growth trajectory.",
      category: "infrastructure"
    },
    {
      icon: Eye,
      title: "Image Recognition",
      description: "Automatically tag, classify, and analyze product or customer images with computer vision technology.",
      category: "ai-analysis"
    },
    {
      icon: Cpu,
      title: "AI/MCP Servers",
      description: "Deploy custom AI pipelines and microservices with our managed infrastructure for seamless integration.",
      category: "infrastructure"
    },
    {
      icon: Route,
      title: "Route Planning",
      description: "Optimize delivery routes and field service schedules to reduce costs and improve customer satisfaction.",
      category: "optimization"
    },
    {
      icon: Users,
      title: "HubSpot CRM Integration",
      description: "Seamlessly sync, enrich, and automate your HubSpot CRM data with our specialized integration tools.",
      category: "integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "GrowthMetrics Inc.",
      role: "CEO",
      content: "Majorem reduced our data cleaning time by 85% and helped us identify $250K in upsell opportunities through sentiment analysis.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The address cleaning tool alone paid for our annual subscription within the first month. Integration with our existing stack was seamless.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "StartupLaunch Co.",
      role: "Marketing Director",
      content: "As a small team, we needed powerful tools without enterprise complexity. Majorem delivered exactly that with exceptional support.",
      rating: 5
    }
  ];

  const handleDemoSubmit = (demoType) => {
    if (demoType === 'address' && addressInput.trim()) {
      setShowAddressResult(true);
    } else if (demoType === 'sentiment' && sentimentInput.trim()) {
      setShowSentimentResult(true);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({ name: '', company: '', email: '', message: '' });
  };

  const cleanedAddress = addressInput
    .trim()
    .split(',')
    .map(part => part.trim().replace(/\b\w/g, l => l.toUpperCase()))
    .join(', ');

  const sentimentResult = sentimentInput.length > 0 
    ? Math.random() > 0.5 ? 'positive' : 'negative'
    : 'neutral';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">Majorem</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tools" className="text-gray-600 hover:text-blue-600 font-medium">Our Tools</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Data Into 
            <span className="text-blue-600 block mt-2">Actionable Insights</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered marketing tools designed specifically for startups and small businesses. 
            Clean your data, understand your customers, and optimize your operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#tools" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Free Demos
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Powerful Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to clean, analyze, and leverage your business data effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <tool.icon className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                {tool.demo && (
                  <button
                    onClick={() => setActiveDemo(tool.title.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                  >
                    Try Demo <Sparkles className="ml-1 w-4 h-4" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modals */}
      {activeDemo === 'sentiment-analysis' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Sentiment Analysis Demo</h3>
                <button 
                  onClick={() => {
                    setActiveDemo(null);
                    setShowSentimentResult(false);
                    setSentimentInput('');
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                Enter some text to analyze the sentiment. See how our AI understands customer emotions.
              </p>
              
              <textarea
                value={sentimentInput}
                onChange={(e) => setSentimentInput(e.target.value)}
                placeholder="Enter customer feedback, reviews, or survey responses..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleDemoSubmit('sentiment')}
                  disabled={!sentimentInput.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Analyze Sentiment
                </button>
                {showSentimentResult && (
                  <div className={`px-4 py-2 rounded-lg font-medium ${
                    sentimentResult === 'positive' ? 'bg-green-100 text-green-800' : 
                    sentimentResult === 'negative' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {sentimentResult === 'positive' ? '😊 Positive' : 
                     sentimentResult === 'negative' ? '😞 Negative' : '😐 Neutral'}
                  </div>
                )}
              </div>
              
              {showSentimentResult && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Analysis Result:</h4>
                  <p className="text-gray-700">
                    Our AI detected a <span className={`font-bold ${
                      sentimentResult === 'positive' ? 'text-green-600' : 
                      sentimentResult === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {sentimentResult}
                    </span> sentiment with {Math.floor(Math.random() * 20) + 80}% confidence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeDemo === 'address-cleaning' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Address Cleaning Demo</h3>
                <button 
                  onClick={() => {
                    setActiveDemo(null);
                    setShowAddressResult(false);
                    setAddressInput('');
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                Enter a messy address, and see how our system cleans and standardizes it.
              </p>
              
              <textarea
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                placeholder="123 main st, new york, ny 10001 usa"
                className="w-full h-24 p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
              
              <button
                onClick={() => handleDemoSubmit('address')}
                disabled={!addressInput.trim()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clean Address
              </button>
              
              {showAddressResult && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cleaned Address:</h4>
                  <div className="bg-white p-3 rounded border font-mono text-gray-800">
                    {cleanedAddress || "Enter an address to see the result"}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    ✅ Standardized format • ✅ Proper capitalization • ✅ Validated structure
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Majorem</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of data scientists, engineers, and marketing professionals who understand the unique challenges 
                faced by startups and small businesses when it comes to data management and analysis.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, our mission is to democratize access to enterprise-grade data tools by providing 
                affordable, easy-to-use SaaS solutions that deliver immediate ROI without the complexity.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">Built specifically for SMBs</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">Privacy-first approach</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <span className="text-gray-700 font-medium">Seamless integrations</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Majorem?</h3>
              <p className="mb-6">
                Unlike bloated enterprise solutions, our tools are laser-focused on solving the most common 
                data challenges faced by growing businesses.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Data Privacy</h4>
                  <p className="text-blue-100">Your data never leaves our secure environment</p>
                </div>
                <div>
                  <h4 className="font-semibold">Quick Implementation</h4>
                  <p className="text-blue-100">Go live in hours, not months</p>
                </div>
                <div>
                  <h4 className="font-semibold">Expert Support</h4>
                  <p className="text-blue-100">Real humans, real fast responses</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Growing Businesses</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your data? Let's talk about your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">hello@majorem.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Schedule a Demo</h4>
                  <p className="text-gray-700 mb-3">
                    See our tools in action with a personalized demo tailored to your business needs.
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Book a Call <Send className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Majorem</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering startups and small businesses with intelligent data solutions.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#tools" className="hover:text-white">Tools</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
            <p className="text-gray-500 mt-8">
              © 2025 Majorem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
