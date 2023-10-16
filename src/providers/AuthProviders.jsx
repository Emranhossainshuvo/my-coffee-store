import { createContext, useState } from "react";
import App from "../App";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const contextData = {
        user, 
        loading, 
        createUser, 
        signInUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;