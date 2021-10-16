import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoding] = useState(true)

    const auth = getAuth()

    const singInUsingGoogle = () => {
        setIsLoding(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
        .finally(() => setIsLoding(false))
    }
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoding(false)
        })
        return() => unsubcribed
    }, [])
    const logOut = () => {
        setIsLoding(true)
        signOut(auth)
            .then(() => { })
        .finally(() => setIsLoding(false))
    }
    return {
        user,
        isLoading,
        singInUsingGoogle,
        logOut
    }
}
export default useFirebase;