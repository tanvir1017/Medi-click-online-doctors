import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    googleSignIn,
    githubSignIn,
    logOut,
  };
};

export default useFirebase;
