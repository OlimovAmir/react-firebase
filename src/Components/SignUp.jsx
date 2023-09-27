import React from 'react'
import FormComponent from './FormComponent';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/Slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignUp() {

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error)
    }
    return (
        <FormComponent
            title="register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp