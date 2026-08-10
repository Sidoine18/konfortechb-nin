// Configuration Firebase — projet officiel KONFORTECH BÉNIN (konfortechbenin-4a084)
// Rappel : la apiKey d'une web app Firebase n'est pas un secret, elle identifie
// seulement le projet. La sécurité réelle vient des règles Firestore
// (firestore.rules, dans le dossier konfortech-app), pas de la confidentialité
// de ces valeurs.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
export const db = getFirestore(app);

export const CLOUDINARY_CLOUD_NAME = "kwgmoeqy";
export const CLOUDINARY_UPLOAD_PRESET = "konfortech";

/** Rôles autorisés à accéder au dashboard admin. Tout le reste = client. */
export const ADMIN_ROLES = ["superadmin", "editeur", "commercial", "technicien"];
