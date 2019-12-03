import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    container: {
        width: "70%",
        margin: "5% auto",
        borderStyle: "solid",
        borderWidth: "medium",
    },
    alignCenter: {
        textAlign: "center",
    },
    alignLeft: {
        textAlign: "left",
    },
    inline: {
        display: "inline"
    },
    columnWidth: {
        width: "25%"
    },
    image: {
        width: "85%",
        padding: "5%",
        borderRadius: "25%",
    }
}

function Creations() {

    const [results, setResults] = useState([])
    useEffect(() => {
        API.find().then(res => {
            console.log(res.data)
            setResults(res.data)
        })
    }, []);

    return (
        <React.Fragment>
            <div style={styles.container}>
                {/* {Object.keys(results).map(key => {
                    <li><span>{key}</span><span> {stats[key]}</span></li>
                })} */}
                {results.map(item => (
                    <Row style={styles.alignCenter}>
                        <Col style={styles.columnWidth}>
                            <img src={item.image} style={styles.image} alt="picture" />
                        </Col>
                        <Col style={styles.columnWidth} xs={5}>
                            <div>
                                <h4 style={styles.inline}>{item.name} </h4>
                                <h6 style={styles.inline}>the {item.title}</h6>
                            </div>
                            <div><strong>Bio: </strong>{item.bio}</div>
                            <div><strong>Alignment: </strong>{item.alignment}</div>
                        </Col>
                        <Col style={styles.columnWidth}><strong>Stats: </strong>
                            {item.stats.map(item => <li>{item}</li>)}
                        </Col>
                        <Col style={styles.columnWidth}><strong>Aliases: </strong>
                        {item.aliases.map(item => <li>{item}</li>)}
                        </Col>
                    </Row>
                ))}
            </div>
        </React.Fragment>
    )

}
export default Creations;