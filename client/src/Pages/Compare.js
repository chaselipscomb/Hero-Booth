import React, { useState } from 'react';
import Characterone from '../Components/Characterone';
import Charactertwo from '../Components/Charactertwo';
import Winner from '../Components/Winner';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import API from '../API';



function Compare() {

    const [nameone, setnameone] = useState("");
    const [imageone, setimageone] = useState("")
    const [statsone, setstatsone] = useState({})
    const [searchone, setsearchone] = useState("")
    const [styleone, setstyleone] = useState({
        'display': 'none'
    })
    const [nametwo, setnametwo] = useState("");
    const [imagetwo, setimagetwo] = useState("")
    const [statstwo, setstatstwo] = useState({})
    const [searchtwo, setsearchtwo] = useState("")
    const [styletwo, setstyletwo] = useState({
        'display': 'none'
    })

    function searchingone() {
        console.log(searchone)
        if (searchone === "") {
            alert("Please Enter Character Name")
            return
        }
        API.search(searchone).then(res => {
            setnameone(res.name)
            setimageone(res.image.url)
            setstatsone(res.powerstats)
            setstyleone({
                'display': 'flex',
                'width': '18rem'
            })
        }).catch(err => {
            if (err) {
                alert('Name not found. If additional names do not work the API may be in maintenance.');
                console.log(err);
            }
        })
    }
    function searchingtwo() {
        console.log(searchtwo)
        if (searchtwo === "") {
            alert("Please Enter Character Name")
            return
        }
        API.search(searchtwo).then(res => {
            setnametwo(res.name)
            setimagetwo(res.image.url)
            setstatstwo(res.powerstats)
            setstyletwo({
                'display': 'flex',
                'width': '18rem'
            })
        }).catch(err => {
            if (err) {
                alert('Name not found. If additional names do not work the API may be in maintenance.');
                console.log(err);
            }
        })
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="comparenavbar">
                    <form class="form-inline mt-2 mt-md-0">
                        <center><input class="form-control mr-sm-2" value={searchone} onChange={(e) => setsearchone(e.target.value)} type="text" placeholder="First Character" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0"  onClick={() => searchingone()} type="submit">Search</button></center>
                    </form>
                    <h1 className="compareheader">Compare</h1>
                    <form class="form-inline mt-2 mt-md-0">
                        <center><input class="form-control mr-sm-2" value={searchtwo} onChange={(e) => setsearchtwo(e.target.value)} type="text" placeholder="Second Character" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0" onClick={() => searchingtwo()} type="submit">Search</button></center>
                    </form>
                </div>
            </Navbar>
            <div class="container marketing">
                <div className="comparecontainer">
                    <Card style={styleone}>
                        <Card.Img variant="top" src={imageone} />
                        <br />
                        <center><Card.Title><strong>{nameone}</strong></Card.Title></center>
                        {Object.keys(statsone).map(key => <ListGroupItem>{key}: <span>{statsone[key]}</span></ListGroupItem>)}
                    </Card>
                    <Winner />
                    <Card style={styletwo}>
                        <Card.Img variant="top" src={imagetwo} />
                        <br />
                        <center><Card.Title><strong>{nametwo}</strong></Card.Title></center>
                        {Object.keys(statstwo).map(key => <ListGroupItem>{key}: <span>{statstwo[key]}</span></ListGroupItem>)}
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Compare;