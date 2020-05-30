import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters- constructor");
  }

  compoentDidMount() {
    console.log("Counters- component did mount");
  }

  render() {
    console.log("Counters- rendered");
    const { counters, onIncrement, onDelete, onReset } = this.props;
    return (
      <div>
        <button className="btn btn-primary sm-2 m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
