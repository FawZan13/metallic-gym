import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

//header
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        //Navbar section
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Metallic Gym</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#personal-trainer">Trainer</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#update">Subscribe</Nav.Link>


                        {user?.email ?
                            <Button onClick={logOut} variant="outline-danger">Logout</Button> :
                            <div className="d-flex">
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </div>
                        }
                        {
                            user?.email ? <Navbar.Text>
                                Signed in as: {user?.email}
                            </Navbar.Text> : <div></div>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;