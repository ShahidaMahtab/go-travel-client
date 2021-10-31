import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //update profile
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setError(error.message));
  };
  //register using email
  const registerUsingEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login using Email
  const loginUsingEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("signedout");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    isLoading,
    setError,
    setIsLoading,
    registerUsingEmail,
    loginUsingEmail,
    logOut,
    setUserName,
  };
};

export default useFirebase;
