import { Button } from 'react-bootstrap';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="py-3">Please Login</h2>
            <Button onClick={signInUsingGoogle} variant="danger">Google Sign In</Button>
        </div>
    );
};

export default Login;