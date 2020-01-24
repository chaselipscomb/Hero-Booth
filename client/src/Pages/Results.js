import React, { useEffect, useState } from 'react';
import ResultsTable from '../Components/ResultsTable';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import API from '../API';

function Results() {
    const [results, setResults] = useState([]);
  useEffect(() => {
    console.log("UseEffect working")
    API.find().then(res => {
      console.log(res.data);
      setResults(res.data);
    });
  }, []);
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <center><h1>Results</h1></center>
                </Container>
            </Jumbotron>
            <div class="container marketing">
                <hr class="featurette-divider" />
                <div class="row">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Character</th>
                                    <th>Character</th>
                                    <th>Result</th>
                                    <th>Win Rate</th>
                                </tr>
                            </thead>
                            <tbody>

                        {results.map(item => (
                            <tr>
                                    <td>{item.personone}</td>
                                    <td>{item.persontwo}</td>
                                    <td>{item.result}</td>
                                </tr>
                        ))}
                            
                                <tr>
                                    <td>1</td>
                                    <td>Lorem</td>
                                    <td>ipsum</td>
                                    <td>dolor</td>
                                    <td>sit</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>amet</td>
                                    <td>consectetur</td>
                                    <td>adipiscing</td>
                                    <td>elit</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Integer</td>
                                    <td>nec</td>
                                    <td>odio</td>
                                    <td>Praesent</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>libero</td>
                                    <td>Sed</td>
                                    <td>cursus</td>
                                    <td>ante</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Results;