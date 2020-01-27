import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SearchHero from "./components/pages/SearchHero";
import CreateHero from "./components/pages/CreateHero";
import NavBar from "./components/pages/NavBar";
import Creations from "./components/pages/Creations";
import PowerStats from "./components/pages/PowerStats";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import Footer from "./components/pages/Footer";
import Picture from "./components/pages/backgroundmarvel.jpg"
import './App.css';
import './components/pages/hometwo.css';


const styles = {
  wrapper: {
    marginBottom: "100px"
  }
}

class App extends Component {
  state = {
    data: null
  };


  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div style={styles.wrapper}>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SearchHero" component={SearchHero} />
            <Route exact path="/PowerStats" component={PowerStats} />
            <Route exact path="/CreateHero" component={CreateHero} />
            <Route exact path="/Creations" component={Creations} />
            <Route exact path="/Favorites" component={Favorites} />
          </div>
          {/* <Footer /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;




// function App() {
//   return (
//     <Router>
//       <React.Fragment>
//         <NavBar />
//         <Route exact path="/Login" component={Login} />
//         <Route exact path="/SearchHero" component={SearchHero} />
//         <Route exact path="/CreateHero" component={CreateHero} />
//       </React.Fragment>
//     </Router>
//   );
// }

// export default App;
