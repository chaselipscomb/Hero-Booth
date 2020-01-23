import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';


const styles = {
    inputBox: {
        width: "80%",
        marginTop: "5%"
    },
    container: {
        width: "90%",
        borderStyle: "solid",
        borderColor: "darkslategray",
        borderWidth: "2px",
        overflow: "auto"
    },
    image: {
        width: "100%",
        borderRadius: "10%",
        marginTop: "2%",
        marginLeft: "10%"
    },
    inline: {
        display: "inline",
    },
    textmargin: {
        width: "80%",
        margin: "0 2%",
        overflow: "auto"
    },
    statalias: {
        marginTop: "2%",
    },
    bio: {
        width: "80%",
        height: "auto",
        display: "inline",
        overflow: "auto"
    },
    h1: {
        margin: "2% auto"
    }
}


function SearchHero() {
    const [image, setImage] = useState("https://via.placeholder.com/300.png")
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [bio, setBio] = useState("")
    const [alignment, setAlignment] = useState("")
    const [stat, setStat] = useState("")
    const [stats, setStats] = useState([])
    const [alias, setAlias] = useState("")
    const [aliases, setAliases] = useState([])
    let Hero = {
        image,
        name,
        title,
        bio,
        alignment,
        stats,
        aliases
    }

    
    

    const state = {
        image: "",
        //name: "Name Template",
        title: "Title Template",
        bio: "Bio Template",
        alignment: "Alignment Template",
        stats: [
            "Stat Template"
        ],
        aliases: [
            "Alias Template"
        ]
    }

    function addCharacter() {
        console.log(Hero)
        API.create(Hero).then(console.log("hero saved"))
        setImage("https://via.placeholder.com/300.png");
        setName("");
        setTitle("");
        setBio("");
        setAlignment("");
        setStats([]);
        setAliases([])
        alert("Character Added")
    }
    
    function addStat() {
        setStats([...stats, stat]);
        setStat("");
    }
    function addAlias() {
        setAliases([...aliases, alias]);
        setAlias("");
    }

    return (
        <React.Fragment>
            <center><h1 style={styles.h1}>Create Your Own!</h1></center>
            <Row>
                <Col>
                    <center>
                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Paste image reference..." value={image} onChange={(e) => setImage(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Name..." value={name} onChange={(e) => setName(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Title..." value={title} onChange={(e) => setTitle(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Bio</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Describe your Hero..." aria-label="With textarea" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alignment</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Alignment..." value={alignment} onChange={(e) => setAlignment(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Stat</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Stat..." value={stat} onChange={(e) => setStat(e.target.value)} aria-label="Stat" aria-describedby="basic-addon1" />
                            <Button onClick={addStat} >Add Stat</Button>
                        </InputGroup>

                        <InputGroup className="mb-3" style={styles.inputBox}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alias</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Enter Ally..." value={alias} onChange={(e) => setAlias(e.target.value)} aria-label="Stat" aria-describedby="basic-addon1" />
                            <Button onClick={addAlias} >Add Alias</Button>
                        </InputGroup>

                        <Button variant="dark" onClick={addCharacter}>Create Hero</Button>
                    </center>
                </Col>
                <Col>
                    <div style={styles.container}>
                        <Row>
                            <Col sm={4}>
                                <center>
                                    <img src={image} style={styles.image} alt="picture" />
                                </center>
                            </Col>
                            <Col sm={8}>
                                <center>
                                    <h2>{name}</h2>
                                    <h5>{title}</h5>
                                </center>
                                <div style={styles.textmargin}>
                                    <h6 style={styles.inline}>Bio: </h6><p style={styles.bio}>{bio}</p>
                                    <br></br>
                                    <h6 style={styles.inline}>Alignment: </h6><p style={styles.inline}>{alignment}</p>
                                </div>
                            </Col>
                        </Row>
                        <div style={styles.statalias}>
                            <Row>
                                <Col>
                                    <ul>
                                        <h6>Stats:</h6>
                                        {stats.map(item => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <h6>Allies:</h6>
                                        {aliases.map(item => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </Col>
            </Row >
        </React.Fragment >
    )
}
export default SearchHero;