import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


//Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
      const [user, setUser] = useState({});
      const [isLoading, setIsLoading] = useState(true);

      const auth = getAuth();

      const registerUser = (email, password) => {
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                  })
                  .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                  })
                  .finally(() => setIsLoading(false));
      }

      const loginUser = (email, password) => {
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...
                  })
                  .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
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
            registerUser,
            loginUser,
            logOut,
      }
}

export default useFirebase;