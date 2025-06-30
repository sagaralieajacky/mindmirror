import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ThemeAnalysis } from '../types';
import { emotionColors } from '../data/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface EmotionChartProps {
  themes: ThemeAnalysis[];
}

const EmotionChart: React.FC<EmotionChartProps> = ({ themes }) => {
  // Sort themes by weight and take top 5
  const topThemes = [...themes].sort((a, b) => b.weight - a.weight).slice(0, 5);
  
  const data = {
    labels: topThemes.map(theme => theme.name),
    datasets: [
      {
        data: topThemes.map(theme => theme.weight),
        backgroundColor: topThemes.map(theme => {
          // @ts-ignore - We know these keys might not exist, but it's fine for demo
          return emotionColors[theme.name] || `hsl(${Math.random() * 360}, 70%, 60%)`;
        }),
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}/10 intensity`;
          }
        }
      }
    },
    cutout: '60%',
    animation: {
      animateRotate: true,
      animateScale: true
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card h-80">
      <h3 className="text-xl font-serif mb-4">Emotional Landscape</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default EmotionChart;
