import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import InsightsPage from './pages/InsightsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/insights" element={<InsightsPage />} />
          </Routes>
        </main>
        <footer className="bg-white py-6 border-t">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>© 2025 MindMirror. All rights reserved.</p>
            <p className="mt-2">Your data is encrypted and never stored. Privacy first.</p>
            <a 
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <img 
                src="/white_circle_360x360.png" 
                alt="Bolt.new" 
                className="w-5 h-5 mr-2"
              />
              Built with Bolt.new
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
