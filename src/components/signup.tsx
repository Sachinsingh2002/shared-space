
// // File: /components/SignUp.tsx
// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/Button'; // Ensure this path is correct
// import { Input } from '@/components/ui/Input'; // Ensure this path is correct
// import { EyeIcon, EyeOffIcon } from '@heroicons/react/24/solid'; 
// import Link from 'next/link'; // Importing Link for navigation
// import { auth } from '@/firebaseConfig'; // Import the auth instance
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the create user method
// import { useRouter } from 'next/navigation'; // Importing useRouter for redirection

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const router = useRouter(); // Initialize router

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSuccessMessage('');  
//     setErrorMessage('');

//     if (password === confirmPassword) {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         console.log('User created:', userCredential.user);
//         setSuccessMessage('Successfully signed up!'); // Set success message
//         router.push('/'); // Redirect to homepage on successful signup
//       } catch (error: any) {
//         console.error('Error creating user:', error);
//         setErrorMessage(error.message); // Show error message
//       }
//     } else {
//       setErrorMessage('Passwords do not match'); // Set error message for mismatching passwords
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//       <header className="absolute top-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 shadow-md flex justify-start">
//         <Link href="/">
//           <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
//             Shared Space
//           </h1>
//         </Link>
//       </header>

//       <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mt-16">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Sign Up</h2>
        
//         {/* Success Message */}
//         {successMessage && (
//           <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4 text-center">
//             {successMessage}
//           </div>
//         )}
        
//         {/* Error Message */}
//         {errorMessage && (
//           <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4 text-center">
//             {errorMessage}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//           <Input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//             className="border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
//           />
          
//           <div className="relative">
//             <Input 
//               type={showPassword ? 'text' : 'password'} 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//               className="border-gray-300 rounded-lg pr-10 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-300"
//             >
//               {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
//             </button>
//           </div>

//           <Input 
//             type={showPassword ? 'text' : 'password'} 
//             placeholder="Confirm Password" 
//             value={confirmPassword} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//             required 
//             className="border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
//           />

//           <Button type="submit" className="bg-blue-500 text-white py-2 rounded-lg dark:bg-blue-600">Sign Up</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;






// File: /components/SignUp.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { UserPlus, ArrowLeft, Moon, Sun, Mail, Lock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');  
    setErrorMessage('');
    setIsLoading(true);

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      setSuccessMessage('Successfully signed up!');
      setTimeout(() => router.push('/'), 1000);
    } catch (error: any) {
      console.error('Error creating user:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setErrorMessage('An account with this email already exists. Please sign in instead.');
          break;
        case 'auth/invalid-email':
          setErrorMessage('Invalid email format. Please enter a valid email.');
          break;
        case 'auth/weak-password':
          setErrorMessage('Password is too weak. Please use a stronger password.');
          break;
        case 'auth/network-request-failed':
          setErrorMessage('Network error. Please check your connection.');
          break;
        default:
          setErrorMessage('Failed to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.h1 
              className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.02 }}
            >
              Space
            </motion.h1>
          </Link>
          
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
              variant="ghost" 
              onClick={() => router.back()}
              className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Join the community.
          </h1>
          <p className={`text-lg font-light transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Create your account and find your perfect space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`border rounded-xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        >
          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-6 p-4 rounded-lg ${isDarkMode ? 'bg-red-900/50 border border-red-800 text-red-200' : 'bg-red-50 border border-red-200 text-red-700'}`}
            >
              <p className="text-sm font-medium">{errorMessage}</p>
            </motion.div>
          )}

          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-6 p-4 rounded-lg ${isDarkMode ? 'bg-green-900/50 border border-green-800 text-green-200' : 'bg-green-50 border border-green-200 text-green-700'}`}
            >
              <p className="text-sm font-medium flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                {successMessage}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`pl-10 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`pl-10 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                />
              </div>
              <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Must be at least 6 characters long
              </p>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={`pl-10 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 transition-colors duration-300 ${isDarkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800 text-white'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                  Creating account...
                </div>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Already have an account?{' '}
              <Link 
                href="/login" 
                className={`font-medium hover:underline transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-gray-700'}`}
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
