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
                    <div className="flexnav">
                        <div>
                            <Navbar.Brand ><Link to="/" className="mainlink">Hero Booth</Link></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link ><Link to="/Characters" className="link">Characters</Link></Nav.Link>
                                <Nav.Link ><Link to="/Compare" className="link">Compare</Link></Nav.Link>
                                <Nav.Link ><Link to="/Results" className="link">Results</Link></Nav.Link>
                            </Nav>
                        </div>
                        <div className="navimagediv">
                            <a href="https://avengers.marvelhq.com/characters"><img className="navimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd8piY3Ib20g1stasfZgFsfVhFAzLmVj3X_qaoj1xK2MDsYWor" alt="marvel" /></a>
                            <a href="https://www.marvel.com/characters"><img className="navimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8UWD_lswxlQzllFrl-Udb7xuKQiPIuqUfgVi1gT3eB80aAweK" alt="marvel" /></a>
                            <a href="https://www.dccomics.com/characters"><img className="navimage" src="https://www.slashfilm.com/wp/wp-content/images/dcfilms-logo-wonderwoman.jpg" alt="marvel" /></a>
                        </div>

                    </div>
                </Navbar>
            </div>
            <div className="menuContainer">
                <Navbar bg="dark" variant="dark">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <i class="fa fa-bars"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/" className="link" style={{color:'black'}}>Home</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item><Link to="/Characters" className="link" style={{color:'black'}}>Characters</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/Compare" className="link" style={{color:'black'}}>Compare</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/Results" className="link" style={{color:'black'}}>Results</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Brand href="/">Hero Booth</Navbar.Brand>
                    {/* <Link className="mobileLogin" to="/Login">Login</Link> */}
                </Navbar>
            </div>
        </React.Fragment>
    )
}
export default Navigation;