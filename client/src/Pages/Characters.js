import React, { useState, useEffect } from 'react';
import '../Components/Characters.css';
import SearchPicture from '../Components/SearchPicture';
import CharacterInfo from '../Components/CharacterInfo';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Navbar from 'react-bootstrap/Navbar';
import API from '../API';

// const styles = {
//     'display': 'none'
// }

function Characters() {
    const [styles, setStyles] = useState({
        'display': 'none'
    })
    const [search, setSearch] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [fullname, setFullname] = useState("")
    const [alteregos, setAlterEgos] = useState("")
    const [birthplace, setBirthplace] = useState("")
    const [firstappearance, setFirstappearance] = useState("")
    const [publisher, setPublisher] = useState("")
    const [alignment, setAlignment] = useState("")
    const [aliases, setaliases] = useState([])
    const [powerstats, setPowerStats] = useState({})
    const [race, setRace] = useState("")
    const [gender, setGender] = useState("")
    const [height, setHeight] = useState("")
    const [haircolor, setHairColor] = useState("")
    const [weight, setWeight] = useState("")
    const [hero, setHero] = useState({})
    const [occupation, setOccupation] = useState("")
    const [affiliations, setAffiliations] = useState([])
    const [combatscore, setCombatScore] = useState("")

    function searching() {
        console.log(search)
        if (search === "") {
            alert("Please Enter Character Name")
            return
        }
        API.search(search).then(res => {
            console.log(res, res.biography['alter-egos']);
            setStyles({
                'display': 'block'
            })
            setHero(res)
            setImage(res.image.url)
            setName(res.name)
            setFullname(res.biography['full-name'])
            setAlterEgos(res.biography['alter-egos'])
            setBirthplace(res.biography['place-of-birth'])
            setFirstappearance(res.biography['first-appearance'])
            setPublisher(res.biography.publisher)
            setAlignment(res.biography.alignment)
            setRace(res.appearance.race)
            setGender(res.appearance.gender)
            setHeight(res.appearance.height[0])
            setWeight(res.appearance.weight[0])
            setHairColor(res.appearance['eye-color'])
            setOccupation(res.work.occupation)
            setaliases(res.biography.aliases)
            splitAffiliations(res.connections['group-affiliation'])
            // setAffiliations(res.connections['group-affiliation'])
            setPowerStats(res.powerstats)
            calcCombatScore(res.powerstats);
        }).catch(err => {
            if (err) {
                alert('Name not found. If additional names do not work the API may be in maintenance.');
                console.log(err);
            }
        })
    }
    function calcCombatScore(param) {
        console.log(param);
        let score = 0
        Object.keys(param).map(key => score += parseInt(param[key]))
        console.log(score)
        console.log(powerstats);
        setCombatScore(score);

    }
    function splitAffiliations(array) {
        var arr = array.split(',').map(e => e.split(';'));;
        setAffiliations(arr);
        console.log(arr)
    }
    return (
        <>
            {/* Search Picture Component */}
            <Navbar bg="light" variant="light">
                <div className="searchbardiv">
                    <form class="form-inline mt-2 mt-md-0">
                        <center><input class="form-control mr-sm-2" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
                            <button onClick={() => searching()} class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button></center>
                    </form>
                </div>
            </Navbar>
            <div style={styles}>
                <div className="charactermargin">
                    <div class="container marketing">
                        <div class="row">
                            <div className="charactertoplayer">
                                <img className="characterimage" src={image} alt="Generic placeholder image" />
                                <div className={"charactername"}>
                                    <h1>{name}</h1>
                                    <h4>{fullname}</h4>
                                </div>
                                <div className="numandtooltip">
                                    <div className="numbercircle"><strong>{combatscore}</strong></div>
                                    <div className="combatscore">Combat Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Character Info Component */}
                <div class="container marketing">
                    <div class="row">

                        <div className="statisticbars">
                            <h3>Power Stats</h3>
                            <div className="statbar">
                                <span>Intelligence: {powerstats.intelligence} &nbsp;</span>
                                <ProgressBar variant="primary" animated now={powerstats.intelligence} className="bar" />
                            </div>
                            <div className="statbar">
                                <span>Strength: {powerstats.strength} &nbsp;</span>
                                <ProgressBar variant="danger" animated now={powerstats.strength} className="bar" />
                            </div>
                            <div className="statbar">
                                <span>Speed: {powerstats.speed} &nbsp;</span>
                                <ProgressBar variant="warning" animated now={powerstats.speed} className="bar" />
                            </div>
                            <div className="statbar">
                                <span>Durability: {powerstats.durability} &nbsp;</span>
                                <ProgressBar variant="success" animated now={powerstats.durability} className="bar" />
                            </div>
                            <div className="statbar">
                                <span>Power: {powerstats.power} &nbsp;</span>
                                <ProgressBar variant="secondary" animated now={powerstats.power} className="bar" />
                            </div>
                            <div className="statbar">
                                <span>Combat: {powerstats.combat} &nbsp;</span>
                                <ProgressBar variant="dark" animated now={powerstats.combat} className="bar" />
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div className="bio">
                            <div className="biography">
                                <p className="thinborder">Full Name: <span>{fullname}</span></p>
                                <p className="thinborder">Alter Egos: <span>{alteregos}</span></p>
                                <ul className="thinborder">Aliases: {aliases.map(name => <li>{name}</li>)}</ul>
                                <p className="thinborder">Place of Birth: <span>{birthplace}</span></p>
                                <p className="thinborder">First Appearance: <span>{firstappearance}</span></p>
                                <p className="thinborder">Publisher: <span>{publisher}</span></p>
                                <p className="thinborder">Alignment: <span>{alignment}</span></p>
                            </div>
                            <hr class="featurette-divider" />
                            <div className="appearance">
                                <p className="thinborder">Gender: <span>{gender}</span></p>
                                <p className="thinborder">Race: <span>{race}</span></p>
                                <p className="thinborder">Height: <span>{height}</span></p>
                                <p className="thinborder">Weight: <span>{weight}</span></p>
                                {/* <p className="thinborder">Eye Color: <span>{eye}</span></p> */}
                                <p className="thinborder">Hair Color: <span>{haircolor}</span></p>
                                <p className="thinborder">Occupation: <span>{occupation}</span></p>
                                <ul className="thinborder">Affiliations: {affiliations.map(item => <li>{item}</li>)}</ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Characters;