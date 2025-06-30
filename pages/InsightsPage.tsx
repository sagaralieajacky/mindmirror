import React from 'react';
import EmotionChart from '../components/EmotionChart';
import ThemeCloud from '../components/ThemeCloud';
import MoodForecastChart from '../components/MoodForecastChart';
import SubconsciousAvatar from '../components/SubconsciousAvatar';
import { mockThemes, mockForecast } from '../data/mockData';
import { Calendar, Download, Share2 } from 'lucide-react';

const InsightsPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold gradient-text">Your Mind Insights</h1>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <select className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 text-sm">
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
              <option value="all">All Time</option>
            </select>
          </div>
          
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Download size={18} className="text-gray-700" />
          </button>
          
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <Share2 size={18} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-xl font-serif mb-4">Journal Summary</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Total Entries</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Most Frequent Emotion</p>
              <p className="text-2xl font-bold">Anxiety</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Dominant Theme</p>
              <p className="text-2xl font-bold">Work Stress</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <SubconsciousAvatar primaryEmotion="anxiety" emotionIntensity={7} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <EmotionChart themes={mockThemes.slice(0, 5)} />
        <ThemeCloud themes={mockThemes} />
      </div>
      
      <div className="mb-8">
        <MoodForecastChart forecast={mockForecast} />
      </div>
      
      <div className="card p-6">
        <h3 className="text-xl font-serif mb-4">AI Insights</h3>
        <div className="prose max-w-none">
          <p>Based on your recent journal entries, here are some patterns I've noticed:</p>
          
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Work-related anxiety</strong> appears frequently in your entries, particularly around presentations and deadlines. Consider implementing stress-reduction techniques before high-pressure work events.
            </li>
            <li>
              <strong>Self-doubt</strong> often emerges when you're preparing for public speaking. Your entries suggest you're more capable than you give yourself credit for.
            </li>
            <li>
              <strong>Nature and outdoor activities</strong> consistently correlate with positive emotions in your entries. Even brief outdoor breaks might help balance your emotional state.
            </li>
            <li>
              <strong>Sleep quality</strong> seems to significantly impact your next-day mood. Entries suggest your anxiety increases after nights with less than 7 hours of sleep.
            </li>
          </ul>
          
          <p className="mt-4">
            Your daily quote: <em>"The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear."</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
