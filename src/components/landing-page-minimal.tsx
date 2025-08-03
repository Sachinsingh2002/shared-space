'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, MapPin, Users, Star, ArrowRight, Search, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LandingPageComponent() {
  const router = useRouter();

  const featuredListings = [
    { 
      id: 1, 
      title: "Modern Studio", 
      location: "Downtown", 
      price: 1200, 
      roommates: 0, 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9
    },
    { 
      id: 2, 
      title: "Shared Loft", 
      location: "Uptown", 
      price: 800, 
      roommates: 2, 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7
    },
    { 
      id: 3, 
      title: "Cozy Room", 
      location: "Midtown", 
      price: 950, 
      roommates: 1, 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.02 }}
          >
            Space
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/login')}
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => router.push('/signup')}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              Join
            </Button>
          </div>
        </div>
      </header>

      {/* Clean Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-6xl font-light text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find your space.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 font-light"
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
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
            >
              <Search className="mr-2 h-4 w-4" />
              Browse Spaces
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/signup')}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
            >
              <Home className="mr-2 h-4 w-4" />
              List Space
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { label: "Active Listings", value: "1,200+" },
            { label: "Happy Users", value: "5,000+" },
            { label: "Cities", value: "12" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
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
          <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Spaces</h2>
          <p className="text-gray-600 text-lg font-light">Handpicked for quality and comfort</p>
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
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors">
                {/* Image */}
                <div className="relative h-64">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {listing.title}
                      </h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-medium text-gray-900">
                        ${listing.price}
                      </div>
                      <div className="text-gray-500 text-sm">per month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500">
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
                      className="text-gray-700 border-gray-300 hover:bg-gray-50"
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
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">Why choose us?</h2>
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
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
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
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Ready to find your space?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 font-light">
            Join thousands finding better living situations.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => router.push('/signup')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Space</h3>
              <p className="text-gray-600 text-sm font-light">
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
                <h4 className="font-medium text-gray-900 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-100 pt-8 mt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; 2024 Space. Simple living solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
