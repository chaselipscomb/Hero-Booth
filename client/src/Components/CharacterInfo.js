import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
function CharacterInfo() {
    return (
        <>
            <div class="container marketing">
                <div class="row">

                    <div className="statisticbars">
                        <h3>Power Stats</h3>
                        <div className="statbar">
                            <span>Intelligence: 45 &nbsp;</span>
                            <ProgressBar variant="primary" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Strength: 45 &nbsp;</span>
                            <ProgressBar variant="danger" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Speed: 45 &nbsp;</span>
                            <ProgressBar variant="warning" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Durability: 45 &nbsp;</span>
                            <ProgressBar variant="success" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Power: 45 &nbsp;</span>
                            <ProgressBar variant="secondary" animated now={45} className="bar" />
                        </div>
                        <div className="statbar">
                            <span>Combat: 45 &nbsp;</span>
                            <ProgressBar variant="dark" animated now={45} className="bar" />
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div className="bio">
                        <div className="biography">
                            <p className="thinborder">Full Name: <span>The Full Name</span></p>
                            <p className="thinborder">Alter Egos: <span>Any alternative names</span></p>
                            <p className="thinborder">Aliases: <span>Alias names as well</span></p>
                            <p className="thinborder">Place of Birth: <span>birthplace</span></p>
                            <p className="thinborder">First Appearance: <span>first appearance</span></p>
                            <p className="thinborder">Publisher: <span>publisher</span></p>
                            <p className="thinborder">Alignment: <span>very good person</span></p>
                        </div>
                            <hr class="featurette-divider" />
                        <div className="appearance">
                            <p className="thinborder">Gender: <span>Male</span></p>
                            <p className="thinborder">Race: <span>Human</span></p>
                            <p className="thinborder">Height: <span>6'2</span></p>
                            <p className="thinborder">Weight: <span>210 lbs</span></p>
                            <p className="thinborder">Eye Color: <span>Green</span></p>
                            <p className="thinborder">Hair Color: <span>Blonde</span></p>
                            <p className="thinborder">Occupation: <span>Ownder of Lexcorp</span></p>
                            <p className="thinborder">Affiliations: <span>"Injustice Gang, Injustice League"</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CharacterInfo;