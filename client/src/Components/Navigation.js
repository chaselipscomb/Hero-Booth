import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './HomeNavFootComponents.css';
import GlobalState from '../GlobalState';

function Navigation() {
    
    return (
        <React.Fragment>
            <div className="myNav">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand ><Link to="/" className="mainlink">Hero Booth</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/Characters" className="link">Characters</Link></Nav.Link>
                        <Nav.Link href="#Compare">Compare</Nav.Link>
                        <Nav.Link href="#Results">Results</Nav.Link>
                    </Nav>
                    <div className="navimagediv">
                    <a href="https://www.marvel.com/characters"><img className="navimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8UWD_lswxlQzllFrl-Udb7xuKQiPIuqUfgVi1gT3eB80aAweK" alt="marvel" /></a>
                    <a href="https://www.dccomics.com/characters"><img className="navimage" src="https://www.slashfilm.com/wp/wp-content/images/dcfilms-logo-wonderwoman.jpg" alt="marvel" /></a>
                    </div>
                    <Form inline>
                        <Link to="/Login" className="mobileLogin">Login</Link>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </Form>
                </Navbar>
            </div>
            <div className="menuContainer">
            <Navbar bg="dark" variant="dark">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <i class="fa fa-bars"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/Characters">Search</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Versus</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Results</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Navbar.Brand href="/">Hero Booth</Navbar.Brand>
                        <Link className="mobileLogin" to="/Login">Login</Link>
                </Navbar>
            </div>
        </React.Fragment>
    )
}
export default Navigation;