import initializeFirebase from "./firebase.init"
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();


    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

            }).catch((error) => {
                setError(error)
            });
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

            })
            .catch((error) => {
                setError(error)
            });

    }

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser({})
                }
            })
            // setIsLoading(false);
        return () => unsubscribe;
    }, [auth])



    return {
        googleSignIn,
        registerUser,
        loginUser,
        user,
        error,
        logout
    }


}

export default useFirebase;