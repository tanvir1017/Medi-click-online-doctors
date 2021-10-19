import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";

initAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setIsLoad(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider).catch((error) => {
      setError(error.message);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      alert("Signed out");
      setUser({});
    });
  };
  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleLoadingPage = (e) => {
    e.preventDefault();
    if (email.length === 0 && password.length === 0) {
      alert("please enter a valid email and set a Strong password");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const emailPasswordLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoad(false);
    });
  }, []);
  return {
    user,
    error,
    googleSignIn,
    githubSignIn,
    logOut,
    handleEmail,
    handlePassword,
    handleLoadingPage,
    emailPasswordLogin,
    isLoad,
  };
};

export default useFirebase;
