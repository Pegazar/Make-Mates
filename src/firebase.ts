import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3zRrRZe5bucUeGe7PKlAvCnU5lmoGP6c",
  authDomain: "make-mates.firebaseapp.com",
  projectId: "make-mates",
  storageBucket: "make-mates.appspot.com",
  messagingSenderId: "203832393793",
  appId: "1:203832393793:web:887e16c7e138eb705046c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email: string, password: any) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const login = async (email: string, password: any) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error((error as Error).message);
  }
};


onAuthStateChanged(auth, (user: any) => {
  if (user) {
    store.dispatch(loginHandle(user));
  } else {
    store.dispatch(logoutHandle());
  }
});

export default app;
