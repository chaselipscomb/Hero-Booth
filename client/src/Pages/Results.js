import React, { useEffect, useState } from 'react';
import ResultsTable from '../Components/ResultsTable';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import API from '../API';
import './results.css';

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
                                    <th>Opponent #1</th>
                                    <th>Versus</th>
                                    <th>Opponent #2</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>

                                {results.map(item => (
                                    <tr>
                                        <td>{item.personone}</td>
                                        <td>Versus</td>
                                        <td>{item.persontwo}</td>
                                        <td>{item.result}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>item.personone</td>
                                    <td>Versus</td>
                                    <td>item.persontwo</td>
                                    <td>item.result</td>
                                </tr>
                                <tr>
                                    <td>item.personone</td>
                                    <td>Versus</td>
                                    <td>item.persontwo</td>
                                    <td>item.result</td>
                                </tr>
                                <tr>
                                    <td>item.personone</td>
                                    <td>Versus</td>
                                    <td>item.persontwo</td>
                                    <td>item.result</td>
                                </tr>
                                <tr>
                                    <td>item.personone</td>
                                    <td>Versus</td>
                                    <td>item.persontwo</td>
                                    <td>item.result</td>
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