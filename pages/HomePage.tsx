import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="gradient-text">Reflect</span> Deeper,<br />
                <span className="gradient-text">Understand</span> Better
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                MindMirror transforms your unfiltered thoughts into deep self-awareness insights. Speak freely and discover the patterns of your subconscious mind.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/journal" className="btn-primary flex items-center justify-center">
                  Start Journaling <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/insights" className="btn-secondary flex items-center justify-center">
                  View Insights
                </Link>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Brain size={120} className="text-primary" />
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-0 right-0 bg-white p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={24} className="text-accent" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-10 left-0 bg-white p-3 rounded-full shadow-lg"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <MessageSquare size={24} className="text-secondary" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-0 right-20 bg-white p-3 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <BarChart3 size={24} className="text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            <span className="gradient-text">Discover</span> Your Inner World
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Voice Capture</h3>
              <p className="text-gray-600">Speak your thoughts freely and naturally. Our AI captures the nuances of your voice and transforms them into text.</p>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/10 p-3 rounded-full w-fit mb-4">
                <Brain size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Emotion Analysis</h3>
              <p className="text-gray-600">Uncover the emotions behind your words. Our AI detects emotional tones, cognitive patterns, and recurring themes.</p>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <BarChart3 size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Subconscious Mapping</h3>
              <p className="text-gray-600">Visualize the patterns of your mind. See recurring themes, track emotional trends, and gain deeper self-awareness.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Begin Your Journey of <span className="gradient-text">Self-Discovery</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Start journaling today and unlock insights about yourself that you never knew existed. Your subconscious mind is waiting to be explored.
              </p>
              <Link to="/journal" className="btn-primary inline-flex items-center">
                Start Your First Entry <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
