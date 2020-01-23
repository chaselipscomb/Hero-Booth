import React, { useState } from 'react';
import Characterone from '../Components/Characterone';
import Charactertwo from '../Components/Charactertwo';
import Winner from '../Components/Winner';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import API from '../API';



function Compare() {

    const [nameone, setnameone] = useState("");
    const [imageone, setimageone] = useState("")
    const [statsone, setstatsone] = useState({})
    const [characteronescore, setcharacteronescore] = useState("");
    const [searchone, setsearchone] = useState("")
    const [styleone, setstyleone] = useState({
        'display': 'none'
    })
    const [nametwo, setnametwo] = useState("");
    const [imagetwo, setimagetwo] = useState("")
    const [statstwo, setstatstwo] = useState({})
    const [charactertwoscore, setcharactertwoscore] = useState("");
    const [searchtwo, setsearchtwo] = useState("")
    const [styletwo, setstyletwo] = useState({
        'display': 'none'
    })
    const [imagewinner, setimagewinner] = useState("yo")
    const [stylewinner, setstylewinner] = useState({
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

    function fight() {
        console.log(statsone, statstwo)
        const firstherocount = parseInt(statsone.combat)
            + parseInt(statsone.intelligence)
            + parseInt(statsone.power)
            + parseInt(statsone.speed)
            + parseInt(statsone.strength)
        console.log(firstherocount)
        const secondherocount = parseInt(statstwo.combat)
        + parseInt(statstwo.intelligence)
        + parseInt(statstwo.power)
        + parseInt(statstwo.speed)
        + parseInt(statstwo.strength)
    console.log(secondherocount)
        if (firstherocount > secondherocount) {
            setimagewinner(imageone)
            setstylewinner({'display': 'flex'})
        } else if (firstherocount < secondherocount) {
            setimagewinner(imagetwo)
            setstylewinner({'display': 'flex'})
        } else {
            alert("Draw")
            setimagewinner('https://www.meme-arsenal.com/memes/dc69087c94cb6ec44f899407d77a2839.jpg')
            setstylewinner({'display': 'flex'})
        }

    }


    return (
        <>
            <Navbar bg="light" variant="light">
                <div className="comparenavbar">
                    <form class="form-inline mt-2 mt-md-0">
                        <center><input class="form-control mr-sm-2" value={searchone} onChange={(e) => setsearchone(e.target.value)} type="text" placeholder="First Character" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0" onClick={() => searchingone()} type="submit">Search</button></center>
                    </form>
                    <Button onClick={() => fight()} variant="info" style={{ fontSize: '32px', color: 'darkslategrey', backgroundColor: 'ghostwhite' }}>Compare</Button>
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

                    <div className="winnercontainer" style={stylewinner}>
                        <h3>Winner</h3>
                        <img src={imagewinner} alt="winner" className="winnerimage"></img>
                    </div>

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