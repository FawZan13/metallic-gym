import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle } = useAuth();
    const [toggle, setToggle] = useState(false);
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
            setError("")
        }
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 

                const { email, displayName } = result.user;
                const userInfo = {
                    name: displayName,
                    email: email
                };
                setUser(userInfo);
                setError("")
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return (
        <div className="mx-5">

            <br /><br /><br />
            <h2 className="py-3 my-5">Please Login</h2>
            <div>
                <h1>{user.name}</h1>
                <form onSubmit={handleLogIn}>
                    <p className="text-danger">{error}</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <div className="my-5">
                <h3 className="mb-3">Login Using Google</h3>
                <Button onClick={signInUsingGoogle} variant="danger">Google Sign In</Button>

                {toggle ?
                    <p onClick={() => setToggle(true)} className="text-center">Please Login</p> : <p onClick={() => setToggle(false)} className="text-center my-5">Are you new?<Link className="" to="/register"><Button className="mx-2">Please Register</Button></Link></p>
                }
            </div>
        </div>
    );
};

export default Login;