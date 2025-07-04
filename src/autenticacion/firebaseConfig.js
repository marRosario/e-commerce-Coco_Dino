import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGD26QfKd2tblozZoEySwL-jABKRXWvDw",
  authDomain: "autenticacion-aa5c2.firebaseapp.com",
  projectId: "autenticacion-aa5c2",
  storageBucket: "autenticacion-aa5c2.appspot.com",
  messagingSenderId: "1050723806541",
  appId: "1:1050723806541:web:85c82f425c4af4e0a19b04"
};

// 1. Inicializás la app de Firebase
const app = initializeApp(firebaseConfig);

// 2. Creás la instancia de Firestore
const db = getFirestore(app);

// 3. La exportás para poder usarla desde otros archivos
export { db };
