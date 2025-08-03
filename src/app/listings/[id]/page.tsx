'use client'

import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, MapPin, Users, IndianRupee, Star, Phone, Mail, MessageCircle, 
  Heart, Share, Calendar, Wifi, Car, Coffee, Dumbbell, Bed, 
  Shield, Home, Clock, CheckCircle, User, Camera, Moon, Sun
} from 'lucide-react'

// Detailed room data matching the featured listings
const detailedRoomsData = [
  { 
    id: 1, 
    title: "Modern Studio Apartment", 
    location: "Bandra West, Mumbai", 
    fullAddress: "15/A, Hill Road, Bandra West, Mumbai - 400050",
    price: 25000, 
    deposit: 50000,
    roommates: 0, 
    mobile: "+91-9876543210",
    email: "priya.sharma@mumbairentals.com",
    whatsapp: "+91-9876543210",
    tags: ["Fully Furnished", "AC", "WiFi", "Prime Location"], 
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.9,
    reviews: 32,
    description: "Experience luxury living in this beautifully designed modern studio apartment in the heart of Bandra West. This premium space offers contemporary furnishing, high-end amenities, and unparalleled connectivity to Mumbai's business districts. Perfect for working professionals who value comfort, style, and convenience.",
    detailedDescription: "This stunning studio apartment spans 400 sq ft of thoughtfully designed space. Located in one of Mumbai's most coveted neighborhoods, it offers easy access to Bandra Railway Station (Western Line), linking Mall, and numerous cafes and restaurants. The apartment features modern Italian furnishing, premium appliances, and a private balcony with city views.",
    amenities: [
      "High-Speed WiFi", "Air Conditioning", "Fully Furnished", "Private Balcony",
      "Modern Kitchen", "Premium Appliances", "24/7 Security", "Power Backup",
      "Covered Parking", "Housekeeping", "Gym Access", "Swimming Pool"
    ],
    nearbyPlaces: [
      { name: "Bandra Railway Station", distance: "0.8 km", type: "Transport" },
      { name: "Linking Road", distance: "0.5 km", type: "Shopping" },
      { name: "Hill Road", distance: "0.2 km", type: "Shopping" },
      { name: "Bandstand Promenade", distance: "1.2 km", type: "Recreation" },
      { name: "Lilavati Hospital", distance: "1.5 km", type: "Healthcare" },
      { name: "Bandra-Kurla Complex", distance: "8 km", type: "Business" }
    ],
    ownerName: "Priya Sharma",
    ownerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    ownerBio: "Property consultant with 8+ years experience in Mumbai real estate. Committed to providing premium living experiences.",
    availableFrom: "2024-09-01",
    roomType: "Studio Apartment",
    area: "400 sq ft",
    furnishing: "Fully Furnished",
    floor: "4th Floor",
    totalFloors: "12",
    facing: "East",
    ageOfProperty: "3 years",
    parking: "1 Covered",
    rules: [
      "No smoking inside the apartment",
      "No pets allowed",
      "Visitors allowed till 10 PM",
      "Maintain cleanliness",
      "No loud music after 9 PM"
    ],
    utilities: {
      electricity: "Included up to ₹2,000/month",
      water: "Included",
      maintenance: "₹1,500/month",
      internet: "Included - 100 Mbps"
    }
  },
  { 
    id: 2, 
    title: "Shared Loft in Tech Hub", 
    location: "Koramangala 5th Block, Bangalore", 
    fullAddress: "45, 5th Block, Koramangala, Bangalore - 560095",
    price: 15000, 
    deposit: 30000,
    roommates: 2, 
    mobile: "+91-9845123456",
    email: "rajesh.kumar@bangalorespaces.com",
    whatsapp: "+91-9845123456",
    tags: ["Tech Professionals", "Furnished", "Metro Access", "Co-working"], 
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551298370-9c50423c07c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    reviews: 18,
    description: "Join a vibrant community of tech professionals in this spacious shared loft located in Bangalore's startup hub. The space is designed for networking, collaboration, and comfortable living, with modern amenities and excellent connectivity to major IT companies.",
    detailedDescription: "This 1200 sq ft loft offers a unique co-living experience in the heart of Koramangala. Share the space with like-minded tech professionals while enjoying your private 300 sq ft room. The common areas include a modern kitchen, living room, and co-working space. Located minutes away from major startups like Flipkart, Swiggy, and Razorpay.",
    amenities: [
      "High-Speed WiFi", "Air Conditioning", "Shared Kitchen", "Co-working Space",
      "Private Room", "Common Living Area", "24/7 Security", "Power Backup",
      "Laundry Service", "Cleaning Service", "Parking", "Rooftop Terrace"
    ],
    nearbyPlaces: [
      { name: "Forum Mall", distance: "1 km", type: "Shopping" },
      { name: "Koramangala Metro", distance: "1.5 km", type: "Transport" },
      { name: "Flipkart Office", distance: "2 km", type: "Office" },
      { name: "BDA Complex", distance: "0.8 km", type: "Recreation" },
      { name: "Apollo Hospital", distance: "3 km", type: "Healthcare" },
      { name: "Electronic City", distance: "12 km", type: "Business" }
    ],
    ownerName: "Rajesh Kumar",
    ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    ownerBio: "Tech entrepreneur and co-living advocate. Creating spaces that foster innovation and community building among professionals.",
    availableFrom: "2024-10-01",
    roomType: "Shared Room in Loft",
    area: "300 sq ft (Private) + Common Areas",
    furnishing: "Fully Furnished",
    floor: "2nd Floor",
    totalFloors: "3",
    facing: "North",
    ageOfProperty: "5 years",
    parking: "Shared Parking",
    rules: [
      "Tech professionals preferred",
      "No smoking in common areas",
      "Respect shared spaces",
      "Participate in house meetings",
      "Keep noise levels moderate"
    ],
    utilities: {
      electricity: "Shared - ₹1,200/month",
      water: "Included",
      maintenance: "₹800/month",
      internet: "Included - 200 Mbps"
    }
  },
  { 
    id: 3, 
    title: "Cozy Room in Central Delhi", 
    location: "Connaught Place, New Delhi", 
    fullAddress: "B-25, Connaught Place, New Delhi - 110001",
    price: 18000, 
    deposit: 36000,
    roommates: 1, 
    mobile: "+91-9811234567",
    email: "sneha.gupta@delhihomes.com",
    whatsapp: "+91-9811234567",
    tags: ["Central Location", "Metro Connected", "Furnished", "Corporate Area"], 
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    reviews: 24,
    description: "Live in the heart of India's capital with this comfortable room in central Delhi. Perfect for working professionals who need easy access to corporate offices, government buildings, and Delhi's vibrant cultural scene. Excellent metro connectivity to all parts of the city.",
    detailedDescription: "This well-appointed 350 sq ft private room is located in a premium building in Connaught Place. Share the apartment with one professional roommate while enjoying access to all modern amenities. The location offers unmatched connectivity to Delhi Metro, making commuting to Gurgaon, Noida, and other parts of NCR extremely convenient.",
    amenities: [
      "High-Speed WiFi", "Air Conditioning", "Private Room", "Shared Kitchen",
      "Metro Access", "24/7 Security", "Power Backup", "Elevator",
      "Housekeeping", "Water Purifier", "Common Balcony", "Study Area"
    ],
    nearbyPlaces: [
      { name: "Rajiv Chowk Metro", distance: "0.3 km", type: "Transport" },
      { name: "Palika Bazaar", distance: "0.2 km", type: "Shopping" },
      { name: "India Gate", distance: "3 km", type: "Monument" },
      { name: "Central Secretariat", distance: "2 km", type: "Government" },
      { name: "Sir Ganga Ram Hospital", distance: "4 km", type: "Healthcare" },
      { name: "Cyber City Gurgaon", distance: "28 km", type: "Business" }
    ],
    ownerName: "Sneha Gupta",
    ownerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    ownerBio: "Delhi-based property manager specializing in premium accommodations for working professionals in central Delhi locations.",
    availableFrom: "2024-09-15",
    roomType: "Private Room (Shared Apartment)",
    area: "350 sq ft",
    furnishing: "Fully Furnished",
    floor: "6th Floor",
    totalFloors: "8",
    facing: "South",
    ageOfProperty: "2 years",
    parking: "Available",
    rules: [
      "Working professionals only",
      "No smoking inside",
      "Visitors till 10 PM",
      "Keep common areas clean",
      "Inform about overnight guests"
    ],
    utilities: {
      electricity: "Shared - ₹1,000/month",
      water: "Included",
      maintenance: "₹1,200/month",
      internet: "Included - 150 Mbps"
    }
  }
];

export default function ListingDetail() {
  const router = useRouter()
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      const darkMode = savedTheme === 'true';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark', darkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    document.body.classList.toggle('dark', newDarkMode);
  };

  const listing = detailedRoomsData.find(item => item.id === parseInt(params?.id as string))

  if (!listing) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Listing not found</h1>
          <Button onClick={() => router.push('/')} className={isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}>
            Go Back Home
          </Button>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'amenities', label: 'Amenities', icon: CheckCircle },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'rules', label: 'House Rules', icon: Shield }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')}
            className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Listings
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
              variant="outline" 
              size="sm"
              className={`transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              <Heart className="mr-2 h-4 w-4" />
              Save
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className={`transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Main Image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={listing.images[currentImageIndex]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-lg text-sm backdrop-blur-sm ${isDarkMode ? 'bg-white/20 border border-white/30 text-white' : 'bg-white/90 border border-gray-200/50 text-gray-900'}`}>
                {currentImageIndex + 1} / {listing.images.length}
              </div>
            </div>
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {listing.images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex 
                    ? (isDarkMode ? 'border-white' : 'border-gray-900')
                    : (isDarkMode ? 'border-gray-700' : 'border-gray-200')
                }`}
              >
                <img
                  src={image}
                  alt={`${listing.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === 3 && listing.images.length > 4 && (
                  <div className={`absolute inset-0 flex items-center justify-center font-medium backdrop-blur-sm ${isDarkMode ? 'bg-gray-900/70 text-white' : 'bg-white/90 text-gray-900'}`}>
                    +{listing.images.length - 4} more
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Basic Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {listing.title}
                  </h1>
                  <div className={`flex items-center mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{listing.location}</span>
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {listing.fullAddress}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center justify-end`}>
                    <IndianRupee className="w-6 h-6 mr-1" />
                    {listing.price.toLocaleString('en-IN')}
                  </div>
                  <div className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>per month</div>
                  <div className={`text-sm mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    + ₹{listing.deposit.toLocaleString('en-IN')} deposit
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className={`flex items-center px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.rating}</span>
                  <span className={`ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>({listing.reviews} reviews)</span>
                </div>
                
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Users className="w-4 h-4 mr-2" />
                  <span>{listing.roommates === 0 ? 'Private space' : `${listing.roommates} roommate${listing.roommates > 1 ? 's' : ''}`}</span>
                </div>
                
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Home className="w-4 h-4 mr-2" />
                  <span>{listing.area}</span>
                </div>
                
                <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Available from {new Date(listing.availableFrom).toLocaleDateString('en-IN')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {listing.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-200'}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className={`border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <nav className="flex space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                        activeTab === tab.id
                          ? (isDarkMode ? 'border-white text-white' : 'border-gray-900 text-gray-900')
                          : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700')
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2 inline" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About this space</h3>
                    <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {listing.description}
                    </p>
                    <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {listing.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Property Details</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Room Type:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.roomType}</span>
                        </div>
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Area:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.area}</span>
                        </div>
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Furnishing:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.furnishing}</span>
                        </div>
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Floor:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.floor} of {listing.totalFloors}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Facing:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.facing}</span>
                        </div>
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Age of Property:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.ageOfProperty}</span>
                        </div>
                        <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span>Parking:</span>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.parking}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monthly Expenses</h3>
                    <div className="space-y-3">
                      <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Rent:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₹{listing.price.toLocaleString('en-IN')}</span>
                      </div>
                      <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Electricity:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.utilities.electricity}</span>
                      </div>
                      <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Water:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.utilities.water}</span>
                      </div>
                      <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Maintenance:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.utilities.maintenance}</span>
                      </div>
                      <div className={`flex justify-between transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span>Internet:</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.utilities.internet}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'amenities' && (
                <div>
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Available Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {listing.amenities.map((amenity, index) => (
                      <div key={index} className={`flex items-center p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <CheckCircle className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div>
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location & Nearby Places</h3>
                  <div className="space-y-4">
                    {listing.nearbyPlaces.map((place, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <div>
                          <div className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{place.name}</div>
                          <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{place.type}</div>
                        </div>
                        <div className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {place.distance}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'rules' && (
                <div>
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>House Rules</h3>
                  <div className="space-y-3">
                    {listing.rules.map((rule, index) => (
                      <div key={index} className={`flex items-start transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <Shield className={`w-5 h-5 mr-3 mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 border rounded-xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="text-center mb-6">
                <img
                  src={listing.ownerImage}
                  alt={listing.ownerName}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className={`font-bold text-lg transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{listing.ownerName}</h3>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Property Owner</p>
                <p className={`text-sm mt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{listing.ownerBio}</p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className={`w-full transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                  onClick={() => window.open(`tel:${listing.mobile}`)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                
                <Button 
                  variant="outline"
                  className={`w-full transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => window.open(`https://wa.me/${listing.whatsapp.replace('+', '').replace('-', '')}`)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  className={`w-full transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => window.open(`mailto:${listing.email}`)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </div>
              
              <div className={`mt-6 pt-6 border-t transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex justify-between mb-2">
                    <span>Phone:</span>
                    <span>{listing.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="truncate ml-2">{listing.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
