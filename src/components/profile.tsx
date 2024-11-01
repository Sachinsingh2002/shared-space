'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { auth } from '@/firebaseConfig'; // Import Firebase auth
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'; // Import Firebase methods

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; email?: string; phone?: string; bio?: string } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<{ name: string; phone: string; bio: string }>({
    name: '',
    phone: '',
    bio: '',
  });

  useEffect(() => {
    // Check authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, set user info only on login
        if (!user) { // Ensure this only happens when user is null (i.e., when logging in)
          setUser({
            name: currentUser.displayName || 'User',
            email: currentUser.email || '',
            phone: '123-456-7890', // Default phone number, adjust as needed
            bio: 'A brief bio about you...', // Default bio, adjust as needed
          });
          setFormData({
            name: currentUser.displayName || '',
            phone: '123-456-7890', // Default phone number, adjust as needed
            bio: 'A brief bio about you...', // Default bio, adjust as needed
          });
        }
      } else {
        // User is signed out, reset user state
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user]); // Add `user` as a dependency

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
        // Update Firebase user with new profile data
        await updateProfile(auth.currentUser!, {
          displayName: formData.name, // Update the name
        });

        // Update local user state with new values
        setUser((prev) => (prev ? { ...prev, name: formData.name, phone: formData.phone, bio: formData.bio } : prev));

        setIsEditing(false); // Exit editing mode
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log out user
      router.push('/'); // Redirect to landing page after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <Button variant="outline" onClick={handleBack} className="ml-4">
          Back
        </Button>
      </header>

      <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        {user ? (
          <>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{user.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{user.phone}</p>
            <p className="text-center mb-4">{user.bio}</p>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="flex flex-col w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
                  required
                />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Bio"
                  className="mb-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
                  required
                />
                <Button type="submit" variant="outline" className="mb-2">
                  Save Profile
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </form>
            ) : (
              <div className="flex space-x-4">
                <Button variant="outline" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">No user signed in. Please sign up or log in.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
