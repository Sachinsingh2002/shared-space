'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { 
  ArrowLeft, User, Mail, Phone, Edit3, Save, X, 
  LogOut, Settings, Bell, Shield, Moon, Sun 
} from 'lucide-react';

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; email?: string; phone?: string; bio?: string } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<{ name: string; phone: string; bio: string }>({
    name: '',
    phone: '',
    bio: '',
  });

  useEffect(() => {
    // Load dark mode preference
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      const darkMode = savedTheme === 'true';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark', darkMode);
    }

    // Check authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || 'User',
          email: currentUser.email || '',
          phone: '+91-9876543210',
          bio: 'Welcome to Shared Space! Looking for the perfect roommate...',
        });
        setFormData({
          name: currentUser.displayName || '',
          phone: '+91-9876543210',
          bio: 'Welcome to Shared Space! Looking for the perfect roommate...',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []); // Remove user dependency to prevent infinite loop

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    document.body.classList.toggle('dark', newDarkMode);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      try {
        await updateProfile(auth.currentUser!, {
          displayName: formData.name,
        });

        setUser((prev) => (prev ? { ...prev, name: formData.name, phone: formData.phone, bio: formData.bio } : prev));
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')}
            className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className={`w-8 h-8 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4 ${isDarkMode ? 'border-white' : 'border-gray-900'}`}></div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading profile...</p>
          </motion.div>
        ) : user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-2`}
              >
                <User className={`w-12 h-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </motion.div>
              
              <div>
                <h1 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {user.name}
                </h1>
                <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Welcome back to Shared Space
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border`}>
              {!isEditing ? (
                <div className="space-y-6">
                  {/* Profile Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                      <div className="flex items-center mb-3">
                        <Mail className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</span>
                      </div>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.email}</p>
                    </div>
                    
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                      <div className="flex items-center mb-3">
                        <Phone className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</span>
                      </div>
                      <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.phone}</p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="flex items-center mb-3">
                      <User className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</span>
                    </div>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.bio}</p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      onClick={handleEditProfile}
                      className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                    >
                      <Edit3 className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              ) : (
                <motion.form 
                  onSubmit={handleSaveProfile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        About You
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-3 py-2 rounded-md border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 justify-center">
                    <Button 
                      type="submit"
                      className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className={`transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <User className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h2 className={`text-xl font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              No user signed in
            </h2>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Please sign up or log in to view your profile
            </p>
            <Button 
              onClick={() => router.push('/login')}
              className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
            >
              Sign In
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
