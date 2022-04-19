import { useEffect, useState } from "react";
import initFirebase from "../firebase/firebase";
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
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
                .then((result) => {
                    updateProfile(auth.currentUser, { displayName: name })
                        .catch((error) => {
                            setError(error.message);
                        });
                    sendEmailVerification(auth.currentUser)
                        .catch((error) => {
                            console.log(error.message);
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


    /* ------------- Send Password Reset Email ------------- */

    const resetPassword = (email) => {
        setLoading(true);
        setError("");

        return (
            sendPasswordResetEmail(auth, email)
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        )
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
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            observe();
        }
    }, [auth]);


    /*----------------- Some Custom Error Message----------------- */

    useEffect(() => {
        if (error === "Firebase: Error (auth/user-not-found).") {
            setError("There is no account with this Email");
        }
        if (error === "Firebase: Error (auth/email-already-in-use).") {
            setError("This email already have an account.");
        }
        if (error === "Firebase: Error (auth/wrong-password).") {
            setError("You have entered wrong Password.");
        }
    }, [error]);


    return {
        user,
        error,
        setError,
        loading,
        googleLogin,
        resetPassword,
        registerNewUser,
        loginEmailPass,
        logOut
    }
}


export default useFirebase;