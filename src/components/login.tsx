
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { auth } from '../firebaseConfig'; // Import the Firebase auth instance
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the sign-in method
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error messages
  const [success, setSuccess] = useState<string | null>(null); // State for success messages
  const router = useRouter(); // Initialize router for navigation

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle the login form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset any previous error
    setSuccess(null); // Reset any previous success message

    try {
      // Attempt to log in with Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      setSuccess('Successfully logged in!'); // Set success message
      router.push('/'); // Redirect to homepage on successful login
    } catch (error: any) {
      // Handle Firebase errors with proper messaging
      switch (error.code) {
        case 'auth/user-not-found':
          setError('Account not found. Please sign up first.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format. Please enter a valid email.');
          break;
        case 'auth/too-many-requests':
          setError('Too many unsuccessful login attempts. Please try again later.');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Please check your connection.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 shadow-md flex justify-start">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
            Shared Space
          </h1>
        </Link>
      </header>

      {/* Login Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>} {/* Display error message */}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full pr-10 border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              />
            </div>
          </div>

          {/* Login Button with hover effect */}
          <Button
            type="submit"
            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-lg transition hover:bg-blue-600 dark:hover:bg-blue-700"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
