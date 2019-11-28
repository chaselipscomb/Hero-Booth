import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';


const styles = {
    background: {
        backgroundColor: "black"
    },
    searchContainer: {
        width: "50%",
        height: "auto",
        margin: "5% auto"
    },
    center: {
        textAlign: "center"
    },
    resultcard: {
        display: "none",
        width: "65%",
        height: "auto",
        margin: "5% auto",
        border: "1px solid black"
    },
    image: {
        padding: "5%",
        width: "100%",
    },
    marginfirstTop: {
        marginTop: "10%"
    },
    marginTop: {
        marginTop: "30%"
    }
}


function SearchHero() {
    const [search, setSearch] = useState("")
    const [image, setImage] = useState("https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg")
    const [name, setName] = useState("Thanos")
    const [fullname, setFullname] = useState("Thanos")
    const [alteregos, setAlterEgos] = useState("No alter egos found.")
    const [birthplace, setBirthplace] = useState("Titan")
    const [firstappearance, setFirstappearance] = useState("Iron Man #55")
    const [publisher, setPublisher] = useState("Marvel Comics")
    const [alignment, setAlignment] = useState("bad")
    const [aliases, setaliases] = useState([
        "The Mad Titan",
        "Masterlord",
        "The Overmaster",
        "Chins"
    ])
    const [stats, setStats] = useState({
        "intelligence": "100",
        "strength": "100",
        "speed": "33",
        "durability": "100",
        "power": "100",
        "combat": "80"
    })
    const [race, setRace] = useState("Eternal")
    const [gender, setGender] = useState("Male")
    const [height, setHeight] = useState("6'7")
    const [weight, setWeight] = useState("985 lb")


    function searching() {
        console.log(search)
        API.search(search).then(res => {
            console.log(res, res.biography['alter-egos']);
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
            setaliases(res.biography.aliases)
            setStats(res.powerstats)
        })
        styles.resultcard = {
            display: "block",
            width: "65%",
            height: "auto",
            margin: "5% auto",
            borderStyle: "solid",
            borderColor: "darkslategray",
            borderWidth: "2px",
        }
    }



    return (
        <React.Fragment>
            <div style={styles.searchContainer}>
                <h1 style={styles.center}>Search Hero!</h1>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">Hero</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" value={search} onChange={(e) => setSearch(e.target.value)} aria-describedby="inputGroup-sizing-sm" placeholder="Search Hero here..." />
                    <Button variant="dark" onClick={searching}>Search</Button>
                </InputGroup>
            </div>
            <div style={styles.resultcard}>
                <Row>
                    <Col xs={5}>
                        <img src={image} style={styles.image} alt="picture" />
                    </Col>
                    <Col>
                        <center>
                            <h2><span>{name}</span></h2>
                        </center>
                        <ul style={styles.marginfirstTop}><h6>Bio:</h6>
                            <li><span>full-name:</span><span> {fullname}</span></li>
                            <li><span>alter-egos:</span><span> {alteregos}</span></li>
                            <li><span>place-of-birth:</span><span> {birthplace}</span></li>
                            <li><span>first-appearance:</span><span> {firstappearance}</span></li>
                            <li><span>publisher:</span><span> {publisher}</span></li>
                            <li><span>alignment:</span><span> {alignment}</span></li>
                        </ul>
                        <ul><h6>Aliases:</h6>
                            {aliases.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                    <Col>
                        <ul style={styles.marginTop}><h6>Stats:</h6>
                            {Object.keys(stats).map(key => <li><span>{key}</span><span> {stats[key]}</span></li>)}
                        </ul>
                        <ul><h6>Physical Traits:</h6>
                            <li><span>race:</span><span> {race}</span></li>
                            <li><span>gender":</span><span> {gender}</span></li>
                            <li><span>height":</span><span> {height}</span></li>
                            <li><span>weight":</span><span> {weight}</span></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}
export default SearchHero;