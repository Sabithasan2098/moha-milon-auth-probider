import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,   } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
 
export const ProviderContext = createContext(null)
const provider = new GoogleAuthProvider()

const ContextProviders = ({children}) => {

    const[user,setUser] = useState(null)
    const[loading,setLoading] =useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signinUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("current value of the current user",currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
   
const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}

    const authInfo = {
        user,
        signInWithGoogle,
        loading,
        logOut,
        createUser,
        signinUser,
        name:"Hello i just know how to provide context API", }
    return (
        <ProviderContext.Provider value={authInfo}>
            {children}
        </ProviderContext.Provider>
    );
};

export default ContextProviders;