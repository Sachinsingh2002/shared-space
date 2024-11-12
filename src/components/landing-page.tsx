

// 'use client'

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Sun, Moon, LogIn, UserPlus, MapPin, Users, DollarSign } from 'lucide-react';
// import { useRouter } from 'next/navigation'; // Importing the useRouter hook
// import Link from 'next/link'; // Importing Link component for navigation
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export function LandingPageComponent() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const router = useRouter(); // Initializing the router for navigation

//   // Load dark mode preference from localStorage when the component mounts
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('isDarkMode');
//     if (savedTheme) {
//       const darkMode = savedTheme === 'true';
//       setIsDarkMode(darkMode);
//       document.body.classList.toggle('dark', darkMode);
//     }
//   }, []);

//   // Save the dark mode state to localStorage and apply the class to the body
//   const handleDarkModeToggle = (checked: boolean) => {
//     setIsDarkMode(checked);
//     localStorage.setItem('isDarkMode', checked.toString()); // Save to localStorage
//     document.body.classList.toggle('dark', checked); // Toggle the 'dark' class on body
//   }

//   const featuredListings = [
//     { id: 1, title: "Cozy Room in Downtown", location: "City Center", price: 800, roommates: 2, tags: ["Pet-friendly", "Furnished"], link: "/listings/cozy-room-downtown", image: "https://dlifeinteriors.com/wp-content/uploads/2022/03/Wainscoting-e1646648263888.jpg" },
//     { id: 2, title: "Spacious Loft near University", location: "University District", price: 1200, roommates: 1, tags: ["Student-friendly", "Utilities included"], link: "/listings/spacious-loft-university", image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg" },
//     { id: 3, title: "Modern Apartment with View", location: "Riverside", price: 1500, roommates: 2, tags: ["Gym", "Parking"], link: "/listings/modern-apartment-view", image: "https://sdg-migration-id.s3.amazonaws.com/mark-zeff-new-york-loft-daughter-bedroom-0418-SPRINGHOMES.jpg" },
//     { id: 4, title: "Charming Studio in Historic Building", location: "Old Town", price: 950, roommates: 0, tags: ["Recently renovated", "Close to transit"], link: "/listings/charming-studio-historic", image: "https://www.homelane.com/blog/wp-content/uploads/2024/04/shutterstock_1920245540.jpg" },
//     { id: 5, title: "Shared House with Garden", location: "Suburbs", price: 700, roommates: 3, tags: ["Garden", "Quiet neighborhood"], link: "/listings/shared-house-garden", image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg" },
//     { id: 6, title: "Eco-friendly Commune", location: "Green Valley", price: 600, roommates: 5, tags: ["Sustainable living", "Shared workspace"], link: "/listings/eco-friendly-commune", image: "https://st.hzcdn.com/simgs/fb51974503c65f65_14-8038/home-design.jpg" },
//   ];

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
//       <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
//         {/* Wrap the title in a Link component */}
//         <Link href="/">
//           <h1 className="text-2xl font-bold cursor-pointer">Shared Space</h1>
//         </Link>
        
//         <div className="flex items-center space-x-4">
//           {/* User Profile Button */}
//           <Button variant="outline" size="sm" onClick={() => router.push('/profile')}>
//             <Users className="mr-2 h-4 w-4" />
//             Profile
//           </Button>

//           {/* Updated Buttons to use router.push */}
//           <Button variant="outline" size="sm" onClick={() => router.push('/login')}>
//             <LogIn className="mr-2 h-4 w-4" />
//             Login
//           </Button>

//           <Button variant="outline" size="sm" onClick={() => router.push('/signup')}>
//             <UserPlus className="mr-2 h-4 w-4" />
//             Sign Up
//           </Button>

//           <div className="flex items-center space-x-2">
//             <Sun className="h-4 w-4 text-gray-900 dark:text-gray-100" />
//             <input
//               type="checkbox"
//               checked={isDarkMode}
//               onChange={(e) => handleDarkModeToggle(e.target.checked)}
//               className="toggle-checkbox"
//             />
//             <Moon className="h-4 w-4 text-gray-900 dark:text-gray-100" />
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4">
//         <section className="hero text-center py-20">
//           <motion.h2 
//             className="text-4xl font-bold mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Find Your Perfect Roommate
//           </motion.h2>
//           <motion.p 
//             className="text-xl mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Simplify your search for the ideal living companion
//           </motion.p>
//         </section>

//         <section className="featured-listings mt-16">
//           <h3 className="text-2xl font-semibold mb-6">Featured Listings</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredListings.map((listing) => (
//               <motion.div
//                 key={listing.id}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h4 className="text-lg font-semibold mb-2">{listing.title}</h4>
//                   <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     {listing.location}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
//                     <Users className="h-4 w-4 mr-1" />
//                     {listing.roommates} roommate{listing.roommates !== 1 ? 's' : ''}
//                   </div>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {listing.tags.map((tag, index) => (
//                       <Badge key={index} variant="secondary">{tag}</Badge>
//                     ))}
//                   </div>
//                   <div className="mt-4 flex justify-between items-center">
//                     <span className="text-lg font-bold flex items-center">
//                       <DollarSign className="h-5 w-5 mr-1" />
//                       {listing.price}/mo
//                     </span>
//                     <Button variant="outline" onClick={() => router.push(`/listings/${listing.id}`)}>
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <footer className="py-3 bg-gray-200 dark:bg-gray-800 mt-10 text-center">
//           <p className="text-gray-600 dark:text-gray-300">
//             © 2024 Shared Space. All rights reserved.
//           </p>
//         </footer>
//       </main>
//     </div>
//   );
// }



'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, LogIn, UserPlus, MapPin, Users, IndianRupee } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Importing the useRouter hook
import Link from 'next/link'; // Importing Link component for navigation
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LandingPageComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter(); // Initializing the router for navigation

  // Load dark mode preference from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      const darkMode = savedTheme === 'true';
      setIsDarkMode(darkMode);
      document.body.classList.toggle('dark', darkMode);
    }
  }, []);

  // Save the dark mode state to localStorage and apply the class to the body
  const handleDarkModeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    localStorage.setItem('isDarkMode', checked.toString()); // Save to localStorage
    document.body.classList.toggle('dark', checked); // Toggle the 'dark' class on body
  }

  const featuredListings = [
    { id: 1, title: "Cozy Room in Downtown", location: "City Center", price: 800, roommates: 2, tags: ["Pet-friendly", "Furnished"], link: "/listings/cozy-room-downtown", image: "https://dlifeinteriors.com/wp-content/uploads/2022/03/Wainscoting-e1646648263888.jpg" },
    { id: 2, title: "Spacious Loft near University", location: "University District", price: 1200, roommates: 1, tags: ["Student-friendly", "Utilities included"], link: "/listings/spacious-loft-university", image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg" },
    { id: 3, title: "Modern Apartment with View", location: "Riverside", price: 1500, roommates: 2, tags: ["Gym", "Parking"], link: "/listings/modern-apartment-view", image: "https://sdg-migration-id.s3.amazonaws.com/mark-zeff-new-york-loft-daughter-bedroom-0418-SPRINGHOMES.jpg" },
    { id: 4, title: "Charming Studio in Historic Building", location: "Old Town", price: 950, roommates: 0, tags: ["Recently renovated", "Close to transit"], link: "/listings/charming-studio-historic", image: "https://www.homelane.com/blog/wp-content/uploads/2024/04/shutterstock_1920245540.jpg" },
    { id: 5, title: "Shared House with Garden", location: "Suburbs", price: 700, roommates: 3, tags: ["Garden", "Quiet neighborhood"], link: "/listings/shared-house-garden", image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/22/2/RX_HGMAG102_Cronk-07.jpg.rend.hgtvcom.1280.960.suffix/1655919174677.jpeg" },
    { id: 6, title: "Eco-friendly Commune", location: "Green Valley", price: 600, roommates: 5, tags: ["Sustainable living", "Shared workspace"], link: "/listings/eco-friendly-commune", image: "https://st.hzcdn.com/simgs/fb51974503c65f65_14-8038/home-design.jpg" },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        {/* Wrap the title in a Link component */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Shared Space</h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* User Profile Button */}
          <Button variant="outline" size="sm" onClick={() => router.push('/profile')}>
            <Users className="mr-2 h-4 w-4" />
            Profile
          </Button>

          {/* Updated Buttons to use router.push */}
          <Button variant="outline" size="sm" onClick={() => router.push('/login')}>
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>

          <Button variant="outline" size="sm" onClick={() => router.push('/signup')}>
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Button>

          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-gray-900 dark:text-gray-100" />
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={(e) => handleDarkModeToggle(e.target.checked)}
              className="toggle-checkbox"
            />
            <Moon className="h-4 w-4 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="hero text-center py-20">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Find Your Perfect Room
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Simplify your search for the ideal living
          </motion.p>
        </section>

        <section className="featured-listings mt-16">
          <h3 className="text-2xl font-semibold mb-6">Featured Listings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <motion.div
                key={listing.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{listing.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <Users className="h-4 w-4 mr-1" />
                    {listing.roommates} roommate{listing.roommates !== 1 ? 's' : ''}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold flex items-center">
                      <IndianRupee className="h-5 w-5 mr-1" />
                      {listing.price}/mo
                    </span>
                    <Button variant="outline" onClick={() => router.push(`/listings/${listing.id}`)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-3 bg-gray-200 dark:bg-gray-800 mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Shared Space. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
