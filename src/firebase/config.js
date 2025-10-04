// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeBxCZKXdn6EErlP6OVyorlq2WgQE8uOQ",
  authDomain: "my-portfolio2-976c2.firebaseapp.com",
  projectId: "my-portfolio2-976c2",
  storageBucket: "my-portfolio2-976c2.firebasestorage.app",
  messagingSenderId: "919682264775",
  appId: "1:919682264775:web:c512e8b9193f72123498e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;