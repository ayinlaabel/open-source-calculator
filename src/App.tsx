import React from "react";
import { Body } from "./AppStyle";
import Calculator from "./components/calculator/calculator";

class App extends React.Component {
  render() {
    return (
      <Body>
        <Calculator />
      </Body>
    );
  }
}

export default App;
