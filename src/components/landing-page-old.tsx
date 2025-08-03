'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, MapPin, Users, Star, ArrowRight, Search, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LandingPageOld() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const featuredListings = [
    { 
      id: 1, 
      title: "Modern Studio Apartment", 
      location: "Downtown", 
      price: 1200, 
      roommates: 0, 
      tags: ["Fully Furnished", "AC", "WiFi"], 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 2, 
      title: "Shared Loft in Tech Hub", 
      location: "Tech District", 
      price: 800, 
      roommates: 2, 
      tags: ["Co-working", "Furnished"], 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 3, 
      title: "Cozy Room with View", 
      location: "Riverside", 
      price: 950, 
      roommates: 1, 
      tags: ["Gym", "Parking"], 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
    },
  ];

  const stats = [
    { label: "Active Listings", value: "1,234" },
    { label: "Happy Roommates", value: "5,678" },
    { label: "Cities Covered", value: "42" },
    { label: "Success Rate", value: "94%" }
  ];

  const features = [
    { 
      icon: Search, 
      title: "Smart Matching", 
      description: "Our algorithm finds the perfect roommate match based on your preferences and lifestyle." 
    },
    { 
      icon: Home, 
      title: "Verified Listings", 
      description: "All properties are verified and inspected to ensure quality and authenticity." 
    },
    { 
      icon: Users, 
      title: "Community Support", 
      description: "Join a community of like-minded individuals and get support throughout your journey." 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Shared Space
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push('/profile')}>
              <Users className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" onClick={() => router.push('/login')}>
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button onClick={() => router.push('/signup')}>
              <UserPlus className="h-4 w-4 mr-2" />
              Join
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-gray-800 dark:text-white mb-6"
          >
            Find Your Perfect
            <span className="text-blue-600 block">Roommate</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Connect with like-minded people, discover amazing spaces, and create lasting friendships in your new home.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex max-w-2xl mx-auto mb-8"
          >
            <input
              type="text"
              placeholder="Search by location, budget, or preferences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-6 py-4 text-lg rounded-l-full border-2 border-blue-300 focus:border-blue-500 outline-none"
            />
            <Button className="px-8 py-4 rounded-r-full bg-blue-600 hover:bg-blue-700">
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            Featured Rooms
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{listing.title}</h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{listing.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-600">${listing.price}/mo</div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{listing.roommates} roommate{listing.roommates !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full" onClick={() => router.push(`/listings/${listing.id}`)}>
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            Why Choose Shared Space?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                <feature.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of happy roommates who found their perfect living situation through Shared Space.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" onClick={() => router.push('/signup')}>
              Get Started Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Browse Listings
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Shared Space</h3>
          <p className="text-gray-400 mb-6">Connecting people, creating homes.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
