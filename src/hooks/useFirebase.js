import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

//Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);
      const [authError, setAuthError] = useState('');

      const auth = getAuth();

      const registerUser = (email, password) => {
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                      setAuthError('');
                  })
                  .catch((error) => {
                        setAuthError(error.message);
                        console.log(error);
                  })
                  .finally(() => setIsLoading(false));
      }

      const loginUser = (email, password, location, history) => {
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        const destination = location.state?.from || '/';
                        history.replace(destination);
                        setAuthError('');
                  })
                  .catch((error) => {
                        setAuthError(error.message);
                  })
                  .finally(() => setIsLoading(false));
      }

      // observer user state
      useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user);
                  } else {
                        setUser({})
                  }
                  setIsLoading(false);
            });
            return () => unsubscribed;
      }, [])

      const logOut = () => {
            setIsLoading(true);
            signOut(auth).then(() => {
                  // Sign-out successful.
            }).catch((error) => {
                  // An error happened.
            })
            .finally(() => setIsLoading(false));
      }

      return {
            user,
            isLoading,
            authError,
            registerUser,
            loginUser,
            logOut,
      }
}

export default useFirebase;