import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //Create user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Sign with google account
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Set ovserver
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { registerUser, loginUser, user, logoutUser, googleSignIn, loading, updateUserProfile };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
