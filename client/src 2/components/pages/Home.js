import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const styles = {
    column: {
        borderRadius: "20%",
        borderStyle: "ridge",
        marginTop: "15%",
        width: "auto",
        height: "auto"

    },
    h3: {
        width: "85%"
    },
    title: {
        marginTop: "2%"
    }

}

function Home() {

    return (
        <React.Fragment>
            <center><h1 style={styles.title}>Hero Finder</h1></center>
            <Container>
                <center>
                    <Row>
                        <Col>
                            <div className='homeColumn'>
                                <a href="/SearchHero"><h3>Search</h3></a>
                                <strong><p>Search for any Hero to view information</p></strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='homeColumn'>
                                <a href="/Favorites"><h3>Favorites</h3></a>
                                <strong><p>View the Heroes in your Favorites Collection</p></strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='homeColumn'>
                                <a href="/PowerStats"><h3>Versus</h3></a>
                                <strong><p>Compare any two Heroes to see who is strongest</p></strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='homeColumn'>
                                <a href="/CreateHero"><h3>Create</h3></a>
                                <strong><p>Create your own Hero</p></strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='homeColumn'>
                                <a href="/Creations"><h3>Creations</h3></a>
                                <strong><p>View all your Creations</p></strong>
                            </div>
                        </Col>
                    </Row>
                </center>
            </Container>
        </React.Fragment>
    )
}
export default Home