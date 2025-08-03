'use client'

import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Users, IndianRupee, Star, Phone, Mail, MessageCircle, Heart, Share2, Calendar, Wifi, Car, Coffee, Dumbbell, Bed } from 'lucide-react'
import Link from 'next/link'

const listingsData = [
  { 
    id: 1, 
    title: "Modern Studio Apartment", 
    location: "Bandra West, Mumbai", 
    price: 25000, 
    roommates: 0, 
    mobile: "+91-9876543210",
    email: "contact@mumbairentals.com",
    tags: ["Fully Furnished", "AC", "WiFi"], 
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.9,
    reviews: 32,
    description: "Beautiful modern studio in the heart of Bandra West, Mumbai. Perfect for working professionals looking for a comfortable and convenient living space. The apartment is fully furnished with modern amenities and excellent connectivity to Western Line and Metro.",
    amenities: ["WiFi", "AC", "Parking", "Security", "Power Backup", "Kitchen"],
    ownerName: "Priya Sharma",
    ownerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
    availableFrom: "2024-09-01",
    roomType: "Studio Apartment",
    area: "400 sq ft"
  },
  { 
    id: 2, 
    title: "Shared Loft in Tech Hub", 
    location: "Koramangala 5th Block, Bangalore", 
    price: 15000, 
    roommates: 2, 
    mobile: "+91-9845123456",
    email: "contact@bangalorespaces.com",
    tags: ["Tech Professionals", "Furnished", "Metro Access"], 
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviews: 18,
    description: "Spacious shared loft in the heart of Koramangala, perfect for tech professionals. Close to major IT companies like Flipkart, Swiggy, and other startups. Excellent connectivity to all parts of Bangalore.",
    amenities: ["High-Speed WiFi", "AC", "Shared Kitchen", "Laundry", "Security", "Common Area"],
    ownerName: "Rajesh Kumar",
    ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    availableFrom: "2024-10-01",
    roomType: "Shared Room",
    area: "300 sq ft"
  },
  { 
    id: 3, 
    title: "Cozy Room in Central Delhi", 
    location: "Connaught Place, New Delhi", 
    price: 18000, 
    roommates: 1, 
    mobile: "+91-9811234567",
    email: "contact@delhihomes.com",
    tags: ["Central Location", "Metro Connected", "Furnished"], 
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.8,
    reviews: 24,
    description: "Comfortable room in the heart of Delhi's business district. Perfect for working professionals with easy access to Connaught Place, Rajiv Chowk Metro, and major corporate offices. Safe and secure environment.",
    amenities: ["WiFi", "AC", "Metro Access", "Security", "Housekeeping", "Kitchen Access"],
    ownerName: "Sneha Gupta",
    ownerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    availableFrom: "2024-09-15",
    roomType: "Private Room",
    area: "350 sq ft"
  },
  { 
    id: 2, 
    title: "Shared Loft in Tech Hub", 
    location: "Koramangala 5th Block, Bangalore", 
    price: 15000, 
    roommates: 2, 
    mobile: "+91-9845123456",
    email: "contact@bangalorespaces.com",
    tags: ["Tech Professionals", "Furnished", "Metro Access"], 
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviews: 18,
    description: "Spacious shared loft in the heart of Koramangala, perfect for tech professionals. Close to major IT companies like Flipkart, Swiggy, and other startups. Excellent connectivity to all parts of Bangalore.",
    amenities: ["High-Speed WiFi", "AC", "Shared Kitchen", "Laundry", "Security", "Common Area"],
    ownerName: "Rajesh Kumar",
    ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    availableFrom: "2024-10-01",
    roomType: "Shared Room",
    area: "300 sq ft"
  },
  { 
    id: 3, 
    title: "Premium Apartment in Gurgaon", 
    location: "Cyber City, Gurgaon", 
    price: 32000, 
    roommates: 2, 
    mobile: "+91-9876543212",
    email: "contact3@example.com",
    tags: ["Gym", "Parking"], 
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.7,
    reviews: 32,
    description: "Modern apartment with stunning riverside views. Features state-of-the-art amenities and premium finishes throughout.",
    amenities: ["WiFi", "AC", "Gym", "Swimming Pool", "Parking", "Security"],
    ownerName: "Anita Singh",
    ownerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    availableFrom: "2024-09-15",
    roomType: "Private Room",
    area: "750 sq ft"
  }
]

const amenityIcons: Record<string, any> = {
  "WiFi": Wifi,
  "AC": Coffee,
  "Parking": Car,
  "Gym": Dumbbell,
  "Kitchen": Coffee,
  "Laundry": Coffee,
  "Study Room": Bed,
  "Swimming Pool": Coffee,
  "Security": Users
}

export default function ListingDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [listing, setListing] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const id = parseInt(params.id as string)
    const foundListing = listingsData.find(l => l.id === id)
    setListing(foundListing)
  }, [params.id])

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Button onClick={() => router.push('/')}>Go back home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? "text-red-500" : ""}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <section className="relative">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
          <img
            src={listing.images[currentImageIndex]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {listing.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {listing.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Basic Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{listing.rating}</span>
                    <span className="text-gray-500 ml-1">({listing.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-2xl font-bold text-green-600">
                    <IndianRupee className="h-6 w-6 mr-1" />
                    {listing.price.toLocaleString()}
                  </div>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{listing.roommates} roommates</span>
                </div>
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-2 text-blue-600" />
                  <span>{listing.roomType}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Available from {listing.availableFrom}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">{listing.area}</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {listing.description}
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {listing.amenities.map((amenity: string, index: number) => {
                  const IconComponent = amenityIcons[amenity] || Coffee
                  return (
                    <div key={index} className="flex items-center">
                      <IconComponent className="h-5 w-5 mr-3 text-blue-600" />
                      <span>{amenity}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Owner Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">Property Owner</h3>
              <div className="flex items-center mb-4">
                <img
                  src={listing.ownerImage}
                  alt={listing.ownerName}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">{listing.ownerName}</div>
                  <div className="text-sm text-gray-500">Property Owner</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Owner
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  {listing.mobile}
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">Interested?</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" size="lg">
                  Schedule a Visit
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  Request Information
                </Button>
                
                <div className="text-center text-sm text-gray-500 pt-2">
                  Response time: Usually within 2 hours
                </div>
              </div>
            </motion.div>

            {/* Safety Notice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6"
            >
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Safety First
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Always meet in person before making any payments. Verify the property and owner credentials.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 
    description: "A cozy room in the heart of downtown.", 
    coordinates: [49.2827, -123.1207], 
    facilities: ["Wifi Available", "Furnished", "AC provided", "Indian washroom"] 
  },
  { 
    id: 2, 
    title: "Spacious Loft near University", 
    location: "University District", 
    price: 1200, 
    roommates: 1, 
    mobile: "+1-555-987-6543", // Random mobile number
    tags: ["Student-friendly", "Utilities included"], 
    image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg", 
    description: "A spacious loft near the university campus.", 
    coordinates: [49.2606, -123.2460], 
    facilities: ["Wifi Available", "AC provided", "Indian washroom"] 
  },
  { 
    id: 3, 
    title: "Modern Apartment with View", 
    location: "Riverside", 
    price: 1500, 
    roommates: 2, 
    mobile: "+1-555-456-7890", // Random mobile number
    tags: ["Gym", "Parking"], 
    link: "/listings/modern-apartment-view", 
    image: "https://sdg-migration-id.s3.amazonaws.com/mark-zeff-new-york-loft-daughter-bedroom-0418-SPRINGHOMES.jpg", 
    coordinates: [48.4561, -123.4011], 
    facilities: ["Furnished", "AC provided", "Wifi Available"] 
  },
  { 
    id: 4, 
    title: "Charming Studio in Historic Building", 
    location: "Old Town", 
    price: 950, 
    roommates: 0, 
    mobile: "+1-555-654-3210", // Random mobile number
    tags: ["Recently renovated", "Close to transit"], 
    link: "/listings/charming-studio-historic", 
    image: "https://www.homelane.com/blog/wp-content/uploads/2024/04/shutterstock_1920245540.jpg", 
    coordinates: [48.4202, -123.3664], 
    facilities: ["Wifi Available", "AC provided", "Indian washroom"] 
  },
  { 
    id: 5, 
    title: "Shared House with Garden", 
    location: "Suburbs", 
    price: 700, 
    roommates: 3, 
    mobile: "+1-555-321-9876", // Random mobile number
    tags: ["Garden", "Quiet neighborhood"], 
    link: "/listings/shared-house-garden", 
    image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg", 
    coordinates: [48.4546, -123.3925], 
    facilities: ["Furnished", "AC provided", "Wifi Available", "Indian washroom"] 
  },
  { 
    id: 6, 
    title: "Eco-friendly Commune", 
    location: "Green Valley", 
    price: 600, 
    roommates: 5, 
    mobile: "+1-555-789-0123", // Random mobile number
    tags: ["Sustainable living", "Shared workspace"], 
    link: "/listings/eco-friendly-commune", 
    image: "https://st.hzcdn.com/simgs/fb51974503c65f65_14-8038/home-design.jpg", 
    coordinates: [48.4310, -123.3656], 
    facilities: ["Wifi Available", "Furnished", "Indian washroom"] 
  }
];

// Fix for marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function ListingDetailsPage({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Find the listing based on the ID in the URL
    const foundListing = listingsData.find((item) => item.id === parseInt(params.id))
    if (foundListing) {
      setListing(foundListing)
    } else {
      router.push('/') // Redirect to home page if listing is not found
    }
  }, [params.id, router])

  const handleShare = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'))
  }

  if (!listing) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4">
      {/* Adding the Shared Space clickable header aligned to the left */}
      <header className="absolute top-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 shadow-md flex justify-start">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
            Shared Space
          </h1>
        </Link>
      </header>

      <div className="container mx-auto mt-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h2 className="text-3xl font-bold mb-2">{listing.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{listing.description}</p>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="font-semibold">Location:</span>
            <span>{listing.location}</span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <span className="font-semibold">Price:</span>
            <span>₹{listing.price} / month</span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <span className="font-semibold">Roommates:</span>
            <span>{listing.roommates}</span>
          </div>

          {/* Mobile number */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="font-semibold">Mobile:</span>
            <span>{listing.mobile}</span>
          </div>

          {/* Tags */}
          <div className="flex space-x-2 mb-4">
            {listing.tags?.map((tag: string, index: number) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-2">
                {tag}
              </span>
            ))}
          </div>

          {/* Facilities */}
          <div className="mb-4">
            <strong>Facilities:</strong>
            <ul className="list-disc list-inside">
              {listing.facilities?.map((facility: string, index: number) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          {/* Map Section */}
          <div className="my-6">
            <MapContainer center={listing.coordinates} zoom={13} className="h-64 w-full rounded-lg">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={listing.coordinates}>
                <Popup>{listing.title}</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Share and Back to Listings buttons */}
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <Button asChild>
                <Link href="/">Back to Listings</Link>
              </Button>
            </div>
            <Button onClick={handleShare}>Share</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
