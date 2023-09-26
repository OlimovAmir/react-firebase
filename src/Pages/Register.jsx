import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <p>Already have an account? <Link to='/login' >Sing in</Link></p> 
        </div>
    )
}

export default Register