import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjXcN_PyZXK_BzxLD_NlYdnqLsCnKmj5Q",
  authDomain: "restaurant-271d8.firebaseapp.com",
  projectId: "restaurant-271d8",
  storageBucket: "restaurant-271d8.appspot.com",
  messagingSenderId: "948580831356",
  appId: "1:948580831356:web:c1655f9eba82dab3f039f9",
  measurementId: "G-VP7F6M1K6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);