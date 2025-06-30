import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Moon, Sun, Download, Trash2, HelpCircle } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    language: 'en'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, we would send the updated profile to an API
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-serif font-bold gradient-text mb-8">Your Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="card flex flex-col items-center p-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h2 className="text-xl font-medium mb-1">{profile.name}</h2>
            <p className="text-gray-500 mb-4">Member since May 2023</p>
            <button 
              className="btn-secondary w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel Editing' : 'Edit Profile'}
            </button>
          </div>
          
          <div className="card mt-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <HelpCircle size={18} className="mr-2 text-primary" />
              Help & Support
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-primary cursor-pointer">How to use MindMirror</li>
              <li className="hover:text-primary cursor-pointer">Understanding your insights</li>
              <li className="hover:text-primary cursor-pointer">Privacy & security</li>
              <li className="hover:text-primary cursor-pointer">Contact support</li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <form onSubmit={handleProfileUpdate} className="card mb-6">
            <h3 className="text-lg font-medium mb-6 flex items-center">
              <User size={18} className="mr-2 text-primary" />
              Account Settings
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 disabled:bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 disabled:bg-gray-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <button type="button" className="text-primary text-sm font-medium">Change password</button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <select 
                  name="language"
                  value={profile.language}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50 disabled:bg-gray-50"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              {isEditing && (
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </form>
          
          <div className="card mb-6">
            <h3 className="text-lg font-medium mb-6 flex items-center">
              <Bell size={18} className="mr-2 text-primary" />
              Preferences
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Privacy-First Mode</h4>
                  <p className="text-sm text-gray-500">Encrypt all entries on your device</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={privacyMode}
                    onChange={() => setPrivacyMode(!privacyMode)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notifications</h4>
                  <p className="text-sm text-gray-500">Receive reminders and insights</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Theme</h4>
                <div className="flex space-x-4">
                  <button 
                    type="button"
                    className={`p-3 rounded-md flex items-center justify-center ${theme === 'light' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => setTheme('light')}
                  >
                    <Sun size={20} />
                  </button>
                  <button 
                    type="button"
                    className={`p-3 rounded-md flex items-center justify-center ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => setTheme('dark')}
                  >
                    <Moon size={20} />
                  </button>
                  <button 
                    type="button"
                    className={`p-3 rounded-md flex items-center justify-center ${theme === 'system' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => setTheme('system')}
                  >
                    <span className="text-sm font-medium">Auto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-medium mb-6 flex items-center">
              <Lock size={18} className="mr-2 text-primary" />
              Data & Privacy
            </h3>
            
            <div className="space-y-6">
              <div>
                <button type="button" className="flex items-center text-gray-700 hover:text-primary">
                  <Download size={18} className="mr-2" />
                  <span>Download your data</span>
                </button>
                <p className="text-sm text-gray-500 mt-1">Get a copy of all your journal entries and insights</p>
              </div>
              
              <div>
                <button type="button" className="flex items-center text-red-600 hover:text-red-700">
                  <Trash2 size={18} className="mr-2" />
                  <span>Delete account</span>
                </button>
                <p className="text-sm text-gray-500 mt-1">Permanently remove your account and all data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
