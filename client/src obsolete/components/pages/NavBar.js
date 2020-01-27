import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const styles = {
    right: {
        position: "absolute",
        top: "50px",
        right: "0px",
    }
}


function Login() {
    const [login, setLogin] = useState("Login")
    function changeLogin() {
        setLogin("Logout")
    }
   return (
        <React.Fragment>

            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">


                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/SearchHero">Search</NavDropdown.Item>
                        <NavDropdown.Item href="/Favorites">Favorites</NavDropdown.Item>
                        <NavDropdown.Item href="/PowerStats">Versus</NavDropdown.Item>
                        <NavDropdown.Item href="/CreateHero">Create</NavDropdown.Item>
                        <NavDropdown.Item href="/Creations">Creations</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={changeLogin} href="/Login">{login}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}
export default Login;



