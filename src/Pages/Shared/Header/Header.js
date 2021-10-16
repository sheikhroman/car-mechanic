import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/UseAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top"collapseOnSelect expand="lg" >
    <Container>
        <Navbar.Brand href="#home">Car </Navbar.Brand>
        
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink }to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink }to="/home#services">Services</Nav.Link> 
            <Nav.Link as={HashLink }to="/home#experts">Experts</Nav.Link> 
            {user?.email ?
                <Button variant="light" onClick={logOut}>Logout</Button>:                    
                <Nav.Link as={Link}to="/login#login">Login</Nav.Link>}
        <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
        </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;