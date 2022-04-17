import { useEffect, useState } from "react";
import initFirebase from "../firebase/firebase";
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";


initFirebase();


const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    /* --------------- Google Popup Login --------------- */

    const googleLogin = () => {
        setError('');
        setLoading(true);

        const provider = new GoogleAuthProvider();

        return (
            signInWithPopup(auth, provider)
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }


    /* --------------- Create New User with Email Password --------------- */


    const registerNewUser = (email, password, name) => {
        setLoading(true);
        setError("");

        return (
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setUser(null);
                    updateProfile(auth.currentUser, { displayName: name })
                        .catch((error) => {
                            setError(error.message);
                        });
                    logOut();
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }


    /* ---------------- Login with Email Password ---------------- */

    const loginEmailPass = (email, password) => {
        setLoading(true);
        setError("");

        return (
            signInWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }


    /* ---------------- Sign Out / Log Out ---------------- */

    const logOut = () => {
        setError('');
        setLoading(true);

        return (
            signOut(auth)
                .then(() => {
                    setUser(null);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        );
    }


    /* ----------------- check if signed in or not ----------------- */

    useEffect(() => {
        setLoading(true);

        const observe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            observe();
        }
    }, [auth]);



    return {
        user,
        error,
        loading,
        googleLogin,
        registerNewUser,
        loginEmailPass,
        logOut
    }
}


export default useFirebase;