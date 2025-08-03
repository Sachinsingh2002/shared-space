'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, MapPin, Users, Star, ArrowRight, Search, Home, Moon, Sun, IndianRupee, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export function LandingPageComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      const darkMode = savedTheme === 'true';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark', darkMode);
    }

    // Check authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    document.body.classList.toggle('dark', newDarkMode);
  };

  const featuredListings = [
    { 
      id: 1, 
      title: "Modern Studio", 
      location: "Bandra, Mumbai", 
      price: 25000, 
      roommates: 0, 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9
    },
    { 
      id: 2, 
      title: "Shared Loft", 
      location: "Koramangala, Bangalore", 
      price: 15000, 
      roommates: 2, 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7
    },
    { 
      id: 3, 
      title: "Cozy Room", 
      location: "Connaught Place, Delhi", 
      price: 18000, 
      roommates: 1, 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Simple Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.02 }}
          >
            Space
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {user ? (
              // Show profile link when user is logged in
              <Button 
                variant="ghost" 
                onClick={() => router.push('/profile')}
                className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            ) : (
              // Show login/signup when user is not logged in
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => router.push('/login')}
                  className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => router.push('/signup')}
                  className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                >
                  Join
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Clean Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className={`text-6xl font-light leading-tight mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find your space.
          </motion.h1>
          
          <motion.p 
            className={`text-xl font-light mb-12 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple roommate finding for modern living.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              onClick={() => {
                const section = document.getElementById('listings')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={`px-8 py-3 transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
            >
              <Search className="mr-2 h-4 w-4" />
              Browse Spaces
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/signup')}
              className={`px-8 py-3 transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              <Home className="mr-2 h-4 w-4" />
              List Space
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className={`max-w-7xl mx-auto px-6 py-16 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { label: "Active Listings", value: "8,500+" },
            { label: "Happy Users", value: "25,000+" },
            { label: "Cities", value: "28" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-light mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
              <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clean Listings */}
      <section id="listings" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Spaces</h2>
          <p className={`text-lg font-light transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Handpicked for quality and comfort</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => router.push(`/listings/${listing.id}`)}
            >
              <div className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 rounded-full px-3 py-1 flex items-center backdrop-blur-sm shadow-lg ${isDarkMode ? 'bg-white/20 border border-white/30' : 'bg-white/95 border border-gray-200/50'}`}>
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.rating}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className={`text-lg font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {listing.title}
                      </h3>
                      <div className={`flex items-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center justify-end`}>
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {listing.price.toLocaleString('en-IN')}
                      </div>
                      <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>per month</div>
                    </div>
                  </div>
                  
                  <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    <div className={`flex items-center transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {listing.roommates === 0 ? "Private" : `${listing.roommates} roommate${listing.roommates > 1 ? 's' : ''}`}
                      </span>
                    </div>
                    
                    <Button 
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        router.push(`/listings/${listing.id}`)
                      }}
                      className={`transition-all duration-300 ${isDarkMode ? 'text-gray-300 border-gray-600 hover:text-white hover:bg-gray-700 hover:border-gray-500' : 'text-gray-700 border-gray-300 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-400'}`}
                    >
                      View
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple Features */}
      <section className={`max-w-7xl mx-auto px-6 py-20 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why choose us?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "Verified",
              description: "All listings and users are verified for your safety."
            },
            {
              title: "Simple",
              description: "Clean, easy-to-use platform without complexity."
            },
            {
              title: "Trusted", 
              description: "Join thousands of happy users finding great spaces."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`font-light leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-light mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to find your space?
          </h2>
          
          <p className={`text-xl font-light mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Join thousands finding better living situations.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => router.push('/signup')}
            className={`px-8 py-3 transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Simple Footer */}
      <footer className={`border-t py-12 transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-lg font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Space</h3>
              <p className={`text-sm font-light transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Simple roommate finding for modern living.
              </p>
            </div>
            
            {[
              {
                title: "Platform",
                links: ["Browse", "List Space", "Help"]
              },
              {
                title: "Support", 
                links: ["Contact", "FAQ", "Safety"]
              },
              {
                title: "Company",
                links: ["About", "Privacy", "Terms"]
              }
            ].map((section, index) => (
              <div key={section.title}>
                <h4 className={`font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className={`text-sm hover:text-opacity-80 transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className={`border-t pt-8 mt-8 text-center transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>&copy; 2024 Space. Simple living solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
