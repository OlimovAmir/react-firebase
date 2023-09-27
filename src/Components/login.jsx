import React from 'react'
import FormComponent from './FormComponent';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/Slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'; 


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }))
          navigate('/');
        })
        .catch(console.error)
    }
    
  return (
    <FormComponent
        title="login"
        handleClick={handleLogin}
    />
  )
}

export default Login