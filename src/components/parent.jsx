import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  state = {};
  render() {
    console.log("Props", this.props);
    return (
      <div>
        <h3>This is parent Component</h3>
        <Child />
      </div>
    );
  }
}

export default Parent;
