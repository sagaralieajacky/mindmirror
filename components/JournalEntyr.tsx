import React from 'react';
import { JournalEntry as JournalEntryType } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface JournalEntryProps {
  entry: JournalEntryType;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ entry }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getEmotionColor = (emotion: string) => {
    const emotionColors: Record<string, string> = {
      anxiety: 'bg-red-100 text-red-800',
      'self-doubt': 'bg-purple-100 text-purple-800',
      contentment: 'bg-blue-100 text-blue-800',
      pride: 'bg-green-100 text-green-800',
      uncertainty: 'bg-yellow-100 text-yellow-800',
      restlessness: 'bg-orange-100 text-orange-800',
      joy: 'bg-emerald-100 text-emerald-800',
      sadness: 'bg-sky-100 text-sky-800',
      anger: 'bg-rose-100 text-rose-800',
      fear: 'bg-indigo-100 text-indigo-800',
    };

    return emotionColors[emotion.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <Calendar size={16} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-600">{formatDate(entry.date)}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-600">{formatTime(entry.date)}</span>
        </div>
      </div>

      <p className="text-gray-800 mb-4 leading-relaxed">{entry.text}</p>

      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Emotions Detected:</h4>
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEmotionColor(entry.emotions.primary)}`}>
            {entry.emotions.primary}
          </span>
          {entry.emotions.secondary && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEmotionColor(entry.emotions.secondary)}`}>
              {entry.emotions.secondary}
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Intensity: {entry.emotions.intensity}/10
          </span>
        </div>
      </div>

      {entry.themes && entry.themes.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Themes:</h4>
          <div className="flex flex-wrap gap-2">
            {entry.themes.map((theme, index) => (
              <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {theme.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {entry.distortions && entry.distortions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Cognitive Patterns:</h4>
          <div className="flex flex-wrap gap-2">
            {entry.distortions.map((distortion, index) => (
              <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-800">
                {distortion.type}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
