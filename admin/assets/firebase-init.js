import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxmG5nTKQlqOOQgp0x03ylkXsuP5W6IhA",
  authDomain: "konfortechbenin-4a084.firebaseapp.com",
  projectId: "konfortechbenin-4a084",
  storageBucket: "konfortechbenin-4a084.firebasestorage.app",
  messagingSenderId: "639501908608",
  appId: "1:639501908608:web:c8d6c153459ccb6ff88465",
  measurementId: "G-SZ80LXNBJ0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export const CLOUDINARY_CLOUD_NAME = "kwgmoeqy";
export const CLOUDINARY_UPLOAD_PRESET = "konfortech";

export const ADMIN_ROLES = ["superadmin", "editeur", "commercial", "technicien"];
