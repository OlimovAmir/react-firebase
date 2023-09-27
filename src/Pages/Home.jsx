import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './../Hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../Store/Slices/userSlice';
import { Button } from 'react-bootstrap';



function Home() {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();
  return isAuth ? (
    <>
      <h1>Welcome</h1>
      <Button
        onClick={() => dispatch(removeUser)}
      > log out from  {email}
      </Button>
    </>
  ) : (<>
    <Navigate to="/login" />
  </>)
}

export default Home