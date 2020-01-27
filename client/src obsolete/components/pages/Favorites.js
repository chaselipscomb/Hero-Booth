import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import API from "../utils/API";

const styles = {
  header: {
    margin: "5% auto",
  },
  container: {
    width: "80%",
    margin: "0 auto"
  },
  Col: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "darkslategray",
    borderWidth: "2px",
    borderRadius: "25%",
    margin: "3%",
    padding: "3%",
    width: "auto",
    overflow: "auto"

  },
  image: {
    width: "100%",
    borderRadius: "25%"
  }
};
function Favorites() {
  const [Heroes, setHeroes] = useState([]);

  useEffect(() => {
    API.findFavorites().then(res => {
      console.log(res);
      setHeroes(res);
    });
  }, []);

  useEffect(() => {
    console.log(Heroes);
  }, [Heroes]);

  const loadHeroes = () => setHeroes([Heroes]);

  return (
    <React.Fragment>
      <Container style={styles.container}>
        <center>
          <h1 style={styles.header}>Favorites</h1>
        </center>
        <Row>
          {Heroes.map(item => (
            <Col sm={3} style={styles.Col}>
              <center>
                  <img
                    src={item.image.url}
                    style={styles.image}
                    alt="picture"
                  />
                  <h3>{item.name}</h3>
              </center>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Favorites;
