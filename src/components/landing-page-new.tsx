'use client'

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon, LogIn, UserPlus, MapPin, Users, IndianRupee, Star, ArrowRight, Search, Home, Shield, MessageCircle, CheckCircle, ArrowDown, TrendingUp, ShieldCheck, Calendar, MessageSquare, Clock, Check, Quote, Wifi, Car } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";

export function LandingPageComponent() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      const darkMode = savedTheme === 'true';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark', darkMode);
    } else {
      // Default to dark mode
      setIsDarkMode(true);
      document.body.classList.add('dark');
      localStorage.setItem('isDarkMode', 'true');
    }
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    localStorage.setItem('isDarkMode', checked.toString());
    document.body.classList.toggle('dark', checked);
  };

  const featuredListings = [
    { 
      id: 1, 
      title: "Modern Minimalist Loft", 
      location: "SoHo, Manhattan", 
      price: 2800, 
      roommates: 1, 
      tags: ["Designer Furnished", "Rooftop Access"], 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      verified: true
    },
    { 
      id: 2, 
      title: "Luxury Studio with Views", 
      location: "Tribeca, NYC", 
      price: 3200, 
      roommates: 0, 
      tags: ["Floor-to-ceiling windows", "Concierge"], 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      verified: true
    },
    { 
      id: 3, 
      title: "Creative Warehouse Space", 
      location: "Williamsburg, Brooklyn", 
      price: 2400, 
      roommates: 2, 
      tags: ["Artist Community", "High Ceilings"], 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      verified: true
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/20 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                onClick={() => router.push('/')}>
              ∞ Nexus
            </h1>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {['Discover', 'Community', 'Host'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault()
                  const section = document.getElementById(item.toLowerCase())
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => router.push('/login')}
                className="text-white hover:bg-white/10 hover:text-cyan-400 transition-all duration-300"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => router.push('/signup')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Join Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 z-10">
        <motion.div 
          className="container mx-auto px-4 text-center"
          style={{ y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect.
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Create.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Thrive.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Step into the future of shared living. Where premium spaces meet like-minded souls, 
              and every connection sparks new possibilities.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => {
                    const section = document.getElementById('discover')
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Explore Spaces
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => router.push('/signup')}
                  className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Home className="mr-2 h-5 w-5" />
                  List Your Space
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { label: "Active Spaces", value: 10000, suffix: "+" },
              { label: "Happy Residents", value: 25000, suffix: "+" },
              { label: "Cities", value: 50, suffix: "+" },
              { label: "Success Rate", value: 98, suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* Featured Spaces Section */}
      <section id="discover" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Curated Spaces
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Handpicked premium living spaces designed for the modern nomad
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => router.push(`/listings/${listing.id}`)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Verified Badge */}
                    {listing.verified && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ShieldCheck className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                    
                    {/* Rating */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white text-sm font-medium">{listing.rating}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {listing.title}
                        </h3>
                        <div className="flex items-center text-white/60 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{listing.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${listing.price}
                        </div>
                        <div className="text-white/60 text-sm">per month</div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {listing.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-white/10 text-white border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Roommates */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/80">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {listing.roommates === 0 ? "No roommates" : `${listing.roommates} roommate${listing.roommates > 1 ? 's' : ''}`}
                        </span>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(`/listings/${listing.id}`)
                        }}
                      >
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="community" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nexus Experience
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              More than just a platform - we're building the future of connected living
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Community",
                description: "Every member goes through our rigorous verification process ensuring trust and safety.",
                gradient: "from-emerald-400 to-cyan-500"
              },
              {
                icon: MessageSquare,
                title: "AI Matching",
                description: "Our advanced AI understands your lifestyle and connects you with perfect roommates.",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                icon: Clock,
                title: "24/7 Concierge",
                description: "Round-the-clock support with dedicated concierge service for all residents.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Seamless booking system for viewings, meetings, and community events.",
                gradient: "from-pink-400 to-orange-500"
              },
              {
                icon: Star,
                title: "Premium Amenities",
                description: "Access to exclusive amenities, coworking spaces, and community events.",
                gradient: "from-orange-400 to-yellow-500"
              },
              {
                icon: TrendingUp,
                title: "Growth Network",
                description: "Connect with entrepreneurs, creators, and professionals in your space.",
                gradient: "from-green-400 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="host" className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Join the Revolution?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Step into tomorrow's living experience. Connect with like-minded individuals and discover your perfect space.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => router.push('/signup')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const section = document.getElementById('discover')
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg px-8 py-4 rounded-full transition-all duration-300"
                >
                  Explore First
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ∞ Nexus
              </h3>
              <p className="text-white/70">
                Redefining shared living for the digital age.
              </p>
            </motion.div>
            
            {[
              {
                title: "Platform",
                links: ["Browse Spaces", "List Your Space", "Community", "Safety"]
              },
              {
                title: "Support", 
                links: ["Help Center", "Contact Us", "Guidelines", "Trust & Safety"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Privacy"]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a 
                        href="#" 
                        className="text-white/70 hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="border-t border-white/10 pt-8 text-center text-white/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Nexus. All rights reserved. Built for the future of living.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
