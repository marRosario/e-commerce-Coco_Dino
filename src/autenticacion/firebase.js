
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGD26QfKd2tblozZoEySwL-jABKRXWvDw",
  authDomain: "autenticacion-aa5c2.firebaseapp.com",
  projectId: "autenticacion-aa5c2",
  storageBucket: "autenticacion-aa5c2.appspot.com", // ✅ Corrección en storageBucket
  messagingSenderId: "1050723806541",
  appId: "1:1050723806541:web:85c82f425c4af4e0a19b04"
};

//  Inicializar Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function iniciarSesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sesión iniciada", userCredential.user);
      return userCredential.user;
    })
    .catch((error) => {
      console.log("Error al iniciar sesión", error.message);
      throw error;
    });
}

export function crearUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuario creado", userCredential.user);
      return userCredential.user;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("El correo ya está registrado. Intenta iniciar sesión.");
        alert("El correo ya está registrado. Por favor, inicia sesión.");
      } else {
        console.log("Error al crear el usuario:", error.message);
      }
      throw error;
    });
}
