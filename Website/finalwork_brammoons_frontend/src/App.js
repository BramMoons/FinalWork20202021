import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import AddAnimal from "./AddAnimal";
import AddWalk from "./AddWalk";
import AllWalks from "./AllWalks";

class App extends Component {

  render() {
    return(
      <HashRouter>
        <div>
          <div id="nav">
            <h1 id="title">Final work Bram Moons</h1>
            <ul>
              <li id="navLi"><NavLink exact to="/">Home</NavLink></li>
              <li id="navLi"><NavLink exact to="/AddAnimal">AddAnimal</NavLink></li>
              <li id="navLi"><NavLink exact to="/AddWalk">AddWalk</NavLink></li>
              <li id="navLi"><NavLink exact to="/AllWalks">AllWalks</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/AddAnimal" component={AddAnimal} />
            <Route path="/AddWalk" component={AddWalk} />
            <Route path="/AlLWalks" component={AllWalks} />
          </div>
        </div>
      </HashRouter>
    );
  }

}

export default App;