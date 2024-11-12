'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link' // Importing Link for navigation

const listingsData = [
  { 
    id: 1, 
    title: "Cozy Room in Downtown", 
    location: "City Center", 
    price: 800, 
    roommates: 2, 
    mobile: "+1-555-123-4567", // Random mobile number
    tags: ["Pet-friendly", "Furnished"], 
    image: "https://dlifeinteriors.com/wp-content/uploads/2022/03/Wainscoting-e1646648263888.jpg", 
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
            {listing.tags?.map((tag, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-2">
                {tag}
              </span>
            ))}
          </div>

          {/* Facilities */}
          <div className="mb-4">
            <strong>Facilities:</strong>
            <ul className="list-disc list-inside">
              {listing.facilities?.map((facility, index) => (
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
            <Button asChild>
              <Link href="/">Back to Listings</Link>
            </Button>
            <Button onClick={handleShare}>Share</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
