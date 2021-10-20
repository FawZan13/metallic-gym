import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
initializeAuthentication();

const Register = () => {
    const [toggle, setToggle] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("")

    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {

        // const valid = "/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/";
        if (e.target.value.length < 6) {
            setError("Password must be of at least 6 characters")
        } else {
            setPassword(e.target.value);
        }
    }
    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { email, displayName } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email
                };
                setUser(userInfo);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="my-5">
            <h2>Please Register</h2>
            <h1>{user.email}</h1>
            <form onSubmit={handleRegister}>
                <p className="danger">{error}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


            {toggle ? <p className="text-center">Are you new?Pleasde register</p> :
                <p onClick={() => setToggle(true)} className="text-center my-3">Already have an account?<Link to="/login"><Button className="btn mx-4">Log in</Button></Link></p>
            }
        </div >
    );
};

export default Register;