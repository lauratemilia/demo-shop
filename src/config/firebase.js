import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   sendPasswordResetEmail,
   signOut, 
   FacebookAuthProvider } from "firebase/auth";
import {
    getFirestore,
   query,
    getDocs,
    collection,
    where,
   addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQF2XA5PN_w0qd2z3LYAX3do4U5phAdSI",
    authDomain: "etna-ai.firebaseapp.com",
    projectId: "etna-ai",
    storageBucket: "etna-ai.appspot.com",
    messagingSenderId: "691888933446",
    appId: "1:691888933446:web:055fb7e5e608a50c2fd847",
    measurementId: "G-6J84WS9F9V"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const fbProvider = new FacebookAuthProvider()


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithFb = async () => {
 try {
  const result = await signInWithPopup(auth, fbProvider);
  const credential = FacebookAuthProvider.credentialFromResult(result);
  const accessToken = credential.accessToken;

  const user = result.user;
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "facebook",
      email: user.email,
    });
  } 
  
 } catch (error) {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = FacebookAuthProvider.credentialFromError(error);
   console.error(error);
    alert(errorMessage);
 }
 
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    signInWithFb,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };