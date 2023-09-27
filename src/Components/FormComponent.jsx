import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form  from 'react-bootstrap/Form';


function FormComponent({ title, handleClick }) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label>Password</Form.Label>
                <input
                    type="password"
                    placeholder="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </Form.Group>
            <Button
                variant="primary"
                onClick={()=>handleClick(email, pass)}
            >
                {title}
            </Button>
        </Form>
    )
}

export default FormComponent