import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Login() {
    return (
        <React.Fragment>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/SearchHero">Search</Nav.Link>
                    <Nav.Link href="/CreateHero">Create</Nav.Link>
                    <Nav.Link href="/Favorites">Favorites</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>

                </Nav>
            </Navbar>
        </React.Fragment>
    )
}
export default Login;



