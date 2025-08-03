'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, MapPin, Users, Star, ArrowRight, Search, Home, Shield, Clock, Heart, Zap, Award, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LandingPageComplex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'students', label: 'Students' },
    { id: 'professionals', label: 'Professionals' },
    { id: 'families', label: 'Families' }
  ];

  const featuredListings = [
    { 
      id: 1, 
      title: "Luxury Studio with Amenities", 
      location: "Downtown Manhattan", 
      price: 2800, 
      roommates: 0, 
      rating: 4.9,
      reviews: 87,
      tags: ["Luxury", "Gym", "Rooftop", "Concierge"], 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      verified: true,
      newListing: false
    },
    { 
      id: 2, 
      title: "Co-living Space for Tech Workers", 
      location: "Silicon Valley", 
      price: 1800, 
      roommates: 3, 
      rating: 4.7,
      reviews: 156,
      tags: ["Co-working", "High-speed WiFi", "Networking Events"], 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      verified: true,
      newListing: true
    },
    { 
      id: 3, 
      title: "Artist Loft with Natural Light", 
      location: "Brooklyn Heights", 
      price: 1500, 
      roommates: 1, 
      rating: 4.8,
      reviews: 43,
      tags: ["Creative Space", "Large Windows", "Art Studio"], 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      verified: false,
      newListing: true
    },
  ];

  const stats = [
    { label: "Active Listings", value: "12,847", trend: "+12%" },
    { label: "Happy Roommates", value: "45,632", trend: "+8%" },
    { label: "Cities Covered", value: "127", trend: "+15%" },
    { label: "Success Rate", value: "96.8%", trend: "+2%" }
  ];

  const features = [
    { 
      icon: Zap, 
      title: "AI-Powered Matching", 
      description: "Advanced algorithms analyze 50+ compatibility factors to find your perfect roommate match.",
      color: "bg-yellow-500"
    },
    { 
      icon: Shield, 
      title: "Verified & Secure", 
      description: "All users undergo background checks and property verification for your safety and peace of mind.",
      color: "bg-green-500"
    },
    { 
      icon: Clock, 
      title: "Instant Notifications", 
      description: "Get real-time alerts when new listings match your criteria or when someone shows interest.",
      color: "bg-blue-500"
    },
    { 
      icon: Award, 
      title: "Premium Support", 
      description: "24/7 customer support with dedicated account managers for premium members.",
      color: "bg-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      text: "Found my perfect roommate in just 3 days! The matching algorithm is incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Mike Chen",
      location: "San Francisco",
      text: "Best platform for finding quality roommates. Saved me months of searching.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Davis",
      location: "Los Angeles",
      text: "The verification process gave me confidence. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Shared Space Pro
            </h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
            <a href="#listings" className="text-gray-700 hover:text-purple-600 transition-colors">Listings</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Reviews</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push('/login')}>
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={() => router.push('/signup')}>
              <UserPlus className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm">
              🎉 New: AI-Powered Matching Available
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">Roommate Matching</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Experience the future of co-living with our AI-powered platform. Advanced compatibility matching, 
            verified listings, and 24/7 support for the perfect roommate experience.
          </motion.p>

          {/* Advanced Search */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Location"
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white"
              />
              <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                <option>Budget Range</option>
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>$2000 - $3000</option>
                <option>$3000+</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white">
                <option>Room Type</option>
                <option>Private Room</option>
                <option>Shared Room</option>
                <option>Studio</option>
                <option>Entire Place</option>
              </select>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-2">{stat.label}</div>
                <div className="text-green-600 text-sm font-medium flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Listings */}
      <section id="listings" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          >
            Premium Listings
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {listing.verified && (
                      <Badge className="bg-green-500 text-white">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {listing.newListing && (
                      <Badge className="bg-purple-500 text-white">New</Badge>
                    )}
                  </div>
                  <Button className="absolute top-4 right-4 w-10 h-10 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Heart className="h-4 w-4 text-white" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{listing.title}</h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{listing.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ${listing.price}/mo
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{listing.rating}</span>
                      <span className="text-gray-500 ml-1">({listing.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{listing.roommates} roommate{listing.roommates !== 1 ? 's' : ''}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                    {listing.tags.length > 2 && (
                      <Badge variant="outline">+{listing.tags.length - 2} more</Badge>
                    )}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={() => router.push(`/listings/${listing.id}`)}>
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            What Our Users Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-white/80">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Ready to Find Your Perfect Match?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join over 45,000 happy roommates who found their perfect living situation through our AI-powered platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 text-lg" onClick={() => router.push('/signup')}>
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
                <h3 className="text-2xl font-bold">Shared Space Pro</h3>
              </div>
              <p className="text-gray-400">The future of roommate matching.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shared Space Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
