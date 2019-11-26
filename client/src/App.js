import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SearchHero from "./components/pages/SearchHero";
import CreateHero from "./components/pages/CreateHero";
import NavBar from "./components/pages/NavBar";
import './App.css';

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
          <NavBar />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SearchHero" component={SearchHero} />
          <Route exact path="/CreateHero" component={CreateHero} />
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
