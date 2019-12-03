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
        margin: "2% auto"
    },
    image: {
        width: "45%",
        borderRadius: "10%",
        borderStyle: "ridge",
    },
    smalltopmargin: {
        marginTop: "1%"
    }
}


function PowerStats() {
    const [firsthero, setFirstHero] = useState({})
    const [firstheroimage, setFirstHeroImage] = useState("https://www.meme-arsenal.com/memes/dc69087c94cb6ec44f899407d77a2839.jpg")
    const [secondhero, setSecondHero] = useState({})
    const [secondheroimage, setSecondHeroImage] = useState("https://www.meme-arsenal.com/memes/dc69087c94cb6ec44f899407d77a2839.jpg")
    const [winner, setWinner] = useState({})
    const [winnerimage, setWinnerImage] = useState("https://www.meme-arsenal.com/memes/dc69087c94cb6ec44f899407d77a2839.jpg")
    const [winpercentage, setWinPercentage] = useState("")

    function findFirstHero() {
        console.log(firsthero)
        API.search(firsthero).then(res => {
            console.log(res)
            setFirstHero(res)
            setFirstHeroImage(res.image.url)

        });
    }
    function findSecondHero() {
        console.log(secondhero)
        API.search(secondhero).then(res => {
            console.log(res.image.url)
            setSecondHero(res)
            setSecondHeroImage(res.image.url)
        });
    }
    function fight() {
        console.log(firsthero.powerstats, secondhero.powerstats)
        const firstherocount = parseInt(firsthero.powerstats.combat)
            + parseInt(firsthero.powerstats.intelligence)
            + parseInt(firsthero.powerstats.power)
            + parseInt(firsthero.powerstats.speed)
            + parseInt(firsthero.powerstats.strength)
        console.log(firstherocount)
        const secondherocount = parseInt(secondhero.powerstats.combat)
            + parseInt(secondhero.powerstats.intelligence)
            + parseInt(secondhero.powerstats.power)
            + parseInt(secondhero.powerstats.speed)
            + parseInt(secondhero.powerstats.strength)
        console.log(secondherocount)
        setTimeout(function () {
            if(firsthero.name==="Thanos") {
                setWinner(firsthero.name)
                setWinnerImage(firstheroimage)
                setWinPercentage("Avengers Unite!")
            }
            else if(secondhero.name==="Thanos") {
                setWinner(secondhero.name)
                setWinnerImage(secondheroimage)
                setWinPercentage("Avengers Unite!")
            }
            else if (firstherocount > secondherocount) {
                setWinner(firsthero.name)
                setWinnerImage(firstheroimage)
                const winpercentage =  firstherocount / (firstherocount + secondherocount) * 100
                var num = winpercentage.toFixed(2);
                setWinPercentage(num+"%")
            } else if (firstherocount < secondherocount) {
                setWinner(secondhero.name)
                setWinnerImage(secondheroimage)
                const winpercentage =  secondherocount / (secondherocount + firstherocount) * 100
                var num = winpercentage.toFixed(2);
                setWinPercentage(num+"%")
            } else {
                setWinner("Draw")
            }
        }, 2000);
    }

    return (
        <React.Fragment>
            <center style={styles.smalltopmargin}><h1>Versus</h1></center>
            <Container style={styles.searchContainer}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="First Hero..."
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
                        onChange={(e) => setSecondHero(e.target.value)}
                        aria-label="second hero name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="dark" onClick={findSecondHero}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <center><Button variant="danger" onClick={fight}>Fight!</Button></center>
            </Container>
            <Row>
                <Col>
                    <center>
                        <h5>{firsthero.name}</h5>
                        <img src={firstheroimage} style={styles.image} alt="picture" />
                    </center>
                </Col>
                <Col xs={5}>
                    <center>
                        <h2>{winner.name}</h2>
                        <h6>Win Percentage: {winpercentage}</h6>
                        <img src={winnerimage} style={styles.image} alt="picture" />
                    </center>
                </Col >
                <Col >
                    <center>
                        <h5>{secondhero.name}</h5>
                        <img src={secondheroimage} style={styles.image} alt="picture" />
                    </center>
                </Col >
            </Row>
        </React.Fragment >
    )
}
export default PowerStats