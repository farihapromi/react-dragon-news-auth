import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  app from "../firebase/firebase.config"
import { useEffect } from "react";

 export const   AuthContext=createContext(null);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //sign ut
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
      
        setLoading(true);
        return signOut(auth );
       
    }
    const authInfo={
        user,
        createUser,
        logOut,
        signIn,
        loading

    }
     //side effect
     useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
          console.log('user in the auth state changed ',currentUser)
          setUser(currentUser)
          setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
      },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    )
};
export default AuthProvider