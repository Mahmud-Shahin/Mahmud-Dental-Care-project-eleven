import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';



const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);






    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }



    const handleRegister = event => {
        event.preventDefault();


        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        createUserWithEmailAndPassword(email, password, confirmPassword)
    }



    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="confirmPassword" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    register
                </Button>
            </Form>

            <p>already have an account? <Link
                to='/login' onClick={navigateLogin} className='text-danger pe-auto text-decoration-none' >please Login </Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;