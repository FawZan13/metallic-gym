import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h2>Error 404:</h2>
            <img height="400px" src="https://i.ibb.co/VVpDQdM/404.jpg" alt="" />
            <div className="my-3">
                <Link to="/"><Button variant="outline-danger">Go Back</Button></Link>
            </div>
        </div>
    );
};

export default NotFound;