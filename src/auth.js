// src/auth.js

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const signUpWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up: ', error);
    throw error;
  }
};
