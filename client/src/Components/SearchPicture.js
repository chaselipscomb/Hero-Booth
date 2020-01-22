import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import API from '../API';
import store from '../store';

function SearchPicture() {

    //console.log(store.getState().searchCharacter.name);

    //const obj = { name: 'Chase', altname: 'Chazz' }

    //store.dispatch({ type: 'changesearchcharacter', data: obj })
    //let searchCharacter = store.getState().searchCharacter;
    const searchChar = () => {
        API.search().then(res => { console.log(res) })
        // .catch(error => { console.log(error)})
    }

    searchChar();

    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="searchbardiv">
                    <form class="form-inline mt-2 mt-md-0">
                    <center><input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button></center>
                    </form>
                </div>
            </Navbar>

            <div className="charactermargin">
                <div class="container marketing">
                    <div class="row">
                        <div className="charactertoplayer">
                            <img className="characterimage" src="https://www.superherodb.com/pictures2/portraits/10/100/53.jpg" alt="Generic placeholder image" />
                            <div className="charactername">
                                <h1>seachCharacter.name</h1>
                                <h4>searchCharacter.altname</h4>
                            </div>
                            <div className="numandtooltip">
                                <div className="numbercircle"><strong>250</strong></div>
                                <div className="combatscore">Combat Score</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchPicture;