import React from 'react';
import { Link } from 'react-router-dom'

function PageCards() {
    return (
        <React.Fragment>
            <div class="container marketing">

                <div class="row">
                    <div class="col-lg-4">
                        <center>
                            <img class="rounded-circle" src="https://www.superherodb.com/pictures2/portraits/10/100/140.jpg" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Characters</h2>
                            <p>Statistics and information particular to each character can be found here. Featuring combat statistics, character alliances, and background information on each Character.</p>
                            <button class="btn btn-secondary"><Link to="/Characters" className="pagecardlink">Search Characters »</Link></button>
                        </center>
                    </div>


                    <div class="col-lg-4">
                        <center>
                            <img class="rounded-circle" src="https://www.superherodb.com/pictures2/portraits/10/100/53.jpg" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Compare</h2>
                            <p>Compare characters against one another to find out which character has stronger combat statistics. Each character has 6 categories which include: Intelligence, Power, Speed, Durability, Strength, and Combat.</p>
                            <button class="btn btn-secondary"><Link to="/Characters" className="pagecardlink">Compare Characters »</Link></button>
                        </center>
                    </div>


                    <div class="col-lg-4">
                        <center>
                            <img class="rounded-circle" src="https://www.superherodb.com/pictures2/portraits/10/100/768.jpg" alt="Generic placeholder image" width="140" height="140" />
                            <h2>Results</h2>
                            <p>Character comparisons are saved here. Find out which characters other users have compared and the outcomes of those battles. Characters may be compared more than once for different outcomes based on the win percentage.</p>
                            <p><a class="btn btn-secondary" href="#Results" role="button">View Results »</a></p>
                        </center>
                    </div>
                </div>
                </div>

               
               
        </React.Fragment>
    )
}
export default PageCards;

