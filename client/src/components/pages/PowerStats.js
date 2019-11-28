import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';

const styles = {
    searchContainer: {
        width: "50%",
        height: "auto",
        margin: "5% auto"
    },
    image: {
        width: "45%"
    }
}

function PowerStats() {
    const [firsthero, setFirstHero] = useState("")
    const [secondhero, setSecondHero] = useState("")

    function findFirstHero() {
        console.log(firsthero)
        API.search(firsthero).then(res => {
            console.log(res.powerstats)
        });
    }
    function findSecondHero() {
        console.log(secondhero)
        API.search(secondhero).then(res => {
            console.log(res.powerstats)
        });
    }
    return (
        <React.Fragment>
            <Container style={styles.searchContainer}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="First Hero..."
                        value={firsthero}
                        onChange={(e) => setFirstHero(e.target.value)}
                        aria-label="first hero name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="dark" onClick={findFirstHero}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Second Hero..."
                        value={secondhero}
                        onChange={(e) => setSecondHero(e.target.value)}
                        aria-label="second hero name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="dark" onClick={findSecondHero}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <center><Button variant="danger">Fight!</Button></center>
            </Container>
            <Row>
            <Col>
                <center><img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" style={styles.image} alt="picture" /></center>
                <h5>Name</h5>
                <ul>
                    <li>strength</li>
                    <li>combat</li>
                    <li>power</li>
                    <li>intelect</li>
                    <li>health</li>
                </ul>
            </Col>
            <Col xs={5}>
                <center>
                    <h2>Winner!</h2>
                    <img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" style={styles.image} alt="picture" />
                    </center>
            </Col >
            <Col >
                <center><img src="https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg" style={styles.image} alt="picture" /></center>
                <h5>Name</h5>
                <ul>
                    <li>strength</li>
                    <li>combat</li>
                    <li>power</li>
                    <li>intelect</li>
                    <li>health</li>
                </ul>
            </Col >
            </Row>
        </React.Fragment >
    )
}
export default PowerStats