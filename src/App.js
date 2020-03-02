import React, { Component } from "react";
// import * as ReactStrap from "reactstrap";

// import { Counter } from "./features/counter/Counter";
import styles from "./App.module.css";

import Wrapper from "./hoc/Wrapper";

class App extends Component {
  render() {
    return (
      <Wrapper classes={styles.App}>

      </Wrapper>
    );
  }
}

export default App;
