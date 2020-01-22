import React from 'react';
import Characterone from '../Components/Characterone';
import Charactertwo from '../Components/Charactertwo';
import Winner from '../Components/Winner';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

function Compare() {

    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="comparenavbar">
                <form class="form-inline mt-2 mt-md-0">
                    <center><input class="form-control mr-sm-2" type="text" placeholder="First Character" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button></center>
                    </form>
                    <h1 className="compareheader">Compare</h1>
                    <form class="form-inline mt-2 mt-md-0">
                    <center><input class="form-control mr-sm-2" type="text" placeholder="Second Character" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button></center>
                    </form>
                </div>
            </Navbar>
            <div class="container marketing">
                <div className="comparecontainer">
                    <Characterone />
                    <Winner />
                    <Charactertwo />
                </div>
            </div>
        </>
    )
}
export default Compare;