
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

import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Ensure this path is correct
import { Input } from '@/components/ui/input'; // Ensure this path is correct
import Link from 'next/link'; // Importing Link for navigation
import { auth } from '@/firebaseConfig'; // Import the auth instance
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the create user method
import { useRouter } from 'next/navigation'; // Importing useRouter for redirection

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Initialize router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');  
    setErrorMessage('');

    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredential.user);
        setSuccessMessage('Successfully signed up!'); // Set success message
        router.push('/'); // Redirect to homepage on successful signup
      } catch (error: any) {
        console.error('Error creating user:', error);
        setErrorMessage(error.message); // Show error message
      }
    } else {
      setErrorMessage('Passwords do not match'); // Set error message for mismatching passwords
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <header className="absolute top-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 shadow-md flex justify-start">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
            Shared Space
          </h1>
        </Link>
      </header>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Sign Up</h2>
        
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4 text-center">
            {successMessage}
          </div>
        )}
        
        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />
          
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="border-gray-300 rounded-lg pr-10 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />

          <Input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />

          <Button type="submit" className="bg-blue-500 text-white py-2 rounded-lg dark:bg-blue-600">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
