import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

// Function to save contact form data to Firestore
export const saveContactForm = async (formData) => {
  try {
    // Add the form data to the 'contacts' collection
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Contact Form Submission',
      message: formData.message,
      projectType: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      timestamp: serverTimestamp(), // Firebase server timestamp
      status: 'new', // Status for tracking
      source: 'portfolio_website'
    });
    
    console.log('Contact form data saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact form data: ', error);
    throw error;
  }
};