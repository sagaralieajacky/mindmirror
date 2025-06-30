import { JournalEntry, MoodForecast, ThemeAnalysis } from '../types';

export const mockEntries: JournalEntry[] = [
  {
    id: '1',
    text: "Today was challenging. I felt overwhelmed with work deadlines and couldn't focus properly. I kept thinking about how I might disappoint my team if I don't deliver on time. The pressure is building up and I'm not sure how to handle it all. Maybe I'm not cut out for this level of responsibility.",
    date: new Date('2023-05-15T18:30:00'),
    emotions: {
      primary: 'anxiety',
      secondary: 'self-doubt',
      intensity: 8,
      valence: 'negative',
    },
    themes: [
      { name: 'work stress', weight: 9, occurrences: 4 },
      { name: 'self-doubt', weight: 7, occurrences: 3 },
      { name: 'fear of failure', weight: 8, occurrences: 2 },
    ],
    distortions: [
      {
        type: 'catastrophizing',
        description: 'Assuming the worst possible outcome',
        examples: ["I might disappoint my team", "I'm not cut out for this"],
      },
      {
        type: 'all-or-nothing thinking',
        description: 'Seeing situations in black and white terms',
        examples: ["I couldn't focus properly"],
      },
    ],
  },
  {
    id: '2',
    text: "I had a wonderful day today. The weather was perfect for a hike, and I felt so connected to nature. It's amazing how being outdoors can clear my mind. I've been making progress with my meditation practice too, and I'm starting to notice small changes in how I respond to stress. I feel proud of myself for sticking with it.",
    date: new Date('2023-05-12T20:15:00'),
    emotions: {
      primary: 'contentment',
      secondary: 'pride',
      intensity: 7,
      valence: 'positive',
    },
    themes: [
      { name: 'nature', weight: 8, occurrences: 2 },
      { name: 'self-improvement', weight: 7, occurrences: 3 },
      { name: 'mindfulness', weight: 6, occurrences: 2 },
    ],
  },
  {
    id: '3',
    text: "I had that dream again where I'm trying to run but my legs won't move. It always happens when I'm feeling stuck in my life. I've been in this job for three years now and I'm not sure if I'm making progress or just going through the motions. Sometimes I wonder if I should take a risk and try something completely different.",
    date: new Date('2023-05-10T07:45:00'),
    emotions: {
      primary: 'uncertainty',
      secondary: 'restlessness',
      intensity: 6,
      valence: 'neutral',
    },
    themes: [
      { name: 'career path', weight: 8, occurrences: 3 },
      { name: 'stagnation', weight: 7, occurrences: 2 },
      { name: 'dreams', weight: 5, occurrences: 1 },
    ],
    distortions: [
      {
        type: 'fortune telling',
        description: 'Predicting negative outcomes without evidence',
        examples: ["I'm not sure if I'm making progress"],
      },
    ],
  },
];

export const mockThemes: ThemeAnalysis[] = [
  { name: 'work stress', weight: 9, occurrences: 12 },
  { name: 'self-doubt', weight: 7, occurrences: 8 },
  { name: 'relationships', weight: 6, occurrences: 7 },
  { name: 'health', weight: 5, occurrences: 6 },
  { name: 'future plans', weight: 8, occurrences: 10 },
  { name: 'family', weight: 7, occurrences: 9 },
  { name: 'creativity', weight: 4, occurrences: 5 },
  { name: 'nature', weight: 6, occurrences: 7 },
  { name: 'mindfulness', weight: 5, occurrences: 6 },
  { name: 'fear of failure', weight: 8, occurrences: 11 },
];

export const mockForecast: MoodForecast[] = [
  { date: new Date('2023-05-16'), prediction: 6, factors: ['work stress', 'exercise'] },
  { date: new Date('2023-05-17'), prediction: 7, factors: ['social connection', 'accomplishment'] },
  { date: new Date('2023-05-18'), prediction: 5, factors: ['work deadline', 'lack of sleep'] },
  { date: new Date('2023-05-19'), prediction: 8, factors: ['weekend plans', 'relaxation'] },
  { date: new Date('2023-05-20'), prediction: 8, factors: ['outdoor activity', 'social event'] },
  { date: new Date('2023-05-21'), prediction: 7, factors: ['family time', 'rest'] },
  { date: new Date('2023-05-22'), prediction: 6, factors: ['return to work', 'new project'] },
];

export const emotionColors = {
  anxiety: '#FF6B81',
  'self-doubt': '#A569BD',
  contentment: '#5DADE2',
  pride: '#58D68D',
  uncertainty: '#F4D03F',
  restlessness: '#EB984E',
  joy: '#2ECC71',
  sadness: '#3498DB',
  anger: '#E74C3C',
  fear: '#9B59B6',
  surprise: '#F1C40F',
  disgust: '#1ABC9C',
};
