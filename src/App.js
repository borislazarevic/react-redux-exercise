import React, { Component } from "react";

import Persons from "./containers/Persons";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Redux exercise</h1>
        <Persons />
      </div>
    );
  }
}

export default App;
