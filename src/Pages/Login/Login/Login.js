import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [toggle, setToggle] = useState(false);

    return (
        <div className="mx-5">

            <br /><br /><br />
            <h2 className="py-3 my-5">Please Login</h2>
            <Button onClick={signInUsingGoogle} variant="danger">Google Sign In</Button>
            {toggle ? <p onClick={() => setToggle(true)} className="text-center">Please Login</p> : <p onClick={() => setToggle(false)} className="text-center my-5">Are you new?<Link className="" to="/register"><Button className="mx-2">Please Register</Button></Link></p>
            }
        </div>
    );
};

export default Login;