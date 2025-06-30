import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import JournalEntry from '../components/JournalEntry';
import { JournalEntry as JournalEntryType } from '../types';
import { Plus, Filter, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const JournalPage: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntryType[]>([]);
  const [isJournaling, setIsJournaling] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    emotion: '',
    dateRange: '',
    theme: ''
  });

  const handleAnalysisComplete = (text: string, analysis: any) => {
    const newEntry: JournalEntryType = {
      id: Date.now().toString(),
      text,
      date: new Date(),
      emotions: {
        primary: analysis.emotions[0],
        secondary: analysis.emotions[1],
        intensity: Math.round(analysis.sentiment * 10),
        valence: analysis.sentiment > 0 ? 'positive' : analysis.sentiment < 0 ? 'negative' : 'neutral',
      },
      themes: analysis.themes.map((theme: string) => ({
        name: theme,
        weight: Math.round(Math.random() * 5) + 5,
        occurrences: Math.round(Math.random() * 3) + 1,
      })),
      distortions: analysis.insights ? [{
        type: 'pattern recognition',
        description: 'AI-detected thought patterns',
        examples: [analysis.insights],
      }] : undefined,
    };

    setEntries(prev => [newEntry, ...prev]);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredEntries = entries.filter(entry => {
    if (filters.emotion && entry.emotions.primary !== filters.emotion) return false;
    if (filters.theme && !entry.themes.some(t => t.name === filters.theme)) return false;
    return true;
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold gradient-text">Your Journal</h1>
        
        <div className="flex space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Filter entries"
          >
            <Filter size={20} className="text-gray-700" />
          </button>
          
          {entries.length > 0 && (
            <>
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Download entries"
              >
                <Download size={20} className="text-gray-700" />
              </button>
              
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Share insights"
              >
                <Share2 size={20} className="text-gray-700" />
              </button>
            </>
          )}
          
          <button
            onClick={() => setIsJournaling(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            New Entry
          </button>
        </div>
      </div>
      
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="card mb-6 flex flex-wrap gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emotion</label>
            <select 
              name="emotion"
              value={filters.emotion}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50"
            >
              <option value="">All emotions</option>
              <option value="contemplative">Contemplative</option>
              <option value="hopeful">Hopeful</option>
              <option value="uncertain">Uncertain</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select
              name="dateRange"
              value={filters.dateRange}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50"
            >
              <option value="">All time</option>
              <option value="today">Today</option>
              <option value="week">This week</option>
              <option value="month">This month</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
            <select
              name="theme"
              value={filters.theme}
              onChange={handleFilterChange}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50"
            >
              <option value="">All themes</option>
              <option value="self-reflection">Self-reflection</option>
              <option value="personal growth">Personal growth</option>
              <option value="future aspirations">Future aspirations</option>
            </select>
          </div>
        </motion.div>
      )}
      
      {isJournaling ? (
        <div className="mb-8">
          <ChatInterface onAnalysisComplete={handleAnalysisComplete} />
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setIsJournaling(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              Done Journaling
            </button>
          </div>
        </div>
      ) : (
        <div>
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No journal entries yet.</p>
              <button
                onClick={() => setIsJournaling(true)}
                className="btn-primary"
              >
                Create Your First Entry
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <JournalEntry entry={entry} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default JournalPage;
