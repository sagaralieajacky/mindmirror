export interface JournalEntry {
  id: string;
  text: string;
  audioUrl?: string;
  date: Date;
  emotions: EmotionAnalysis;
  themes: ThemeAnalysis[];
  distortions?: CognitiveDistortion[];
}

export interface EmotionAnalysis {
  primary: string;
  secondary?: string;
  intensity: number; // 1-10
  valence: 'positive' | 'negative' | 'neutral';
}

export interface ThemeAnalysis {
  name: string;
  weight: number; // 1-10
  occurrences: number;
}

export interface CognitiveDistortion {
  type: string;
  description: string;
  examples: string[];
}

export interface MoodForecast {
  date: Date;
  prediction: number; // 1-10
  factors: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    privacyMode: boolean;
    notificationsEnabled: boolean;
  };
}
