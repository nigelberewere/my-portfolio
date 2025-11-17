import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  serverTimestamp,
  addDoc,
  collection,
} from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGwDKtvCBxuXHLhgGZUX7ViOHtNkmvg3A',
  authDomain: 'nigelberewereportfolio.firebaseapp.com',
  projectId: 'nigelberewereportfolio',
  storageBucket: 'nigelberewereportfolio.firebasestorage.app',
  messagingSenderId: '174122977912',
  appId: '1:174122977912:web:4776b05eb40a164ddffb8d',
  measurementId: 'G-WCCP2Y2RJG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics (optional)
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics not available (e.g., ad blockers)
}

const db = getFirestore(app);

export { app, analytics, db, serverTimestamp, addDoc, collection };