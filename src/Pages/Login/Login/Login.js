import { Button } from 'react-bootstrap';
import React from 'react';

const Login = () => {
    return (
        <div>
            <h2 className="py-3">Please Login</h2>
            <Button variant="danger">Google Sign In</Button>
        </div>
    );
};

export default Login;