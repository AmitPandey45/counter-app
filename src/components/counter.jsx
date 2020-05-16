import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //   constructor() {
  //     super();
  //     this.handleIcrement = this.handleIcrement.bind(this);
  //   }

  handleIcrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // first way to pass argument to method call (and second way descrbe with button control)
  doHandleIncrement = () => {
    this.handleIcrement({ id: 1 });
  };

  handleCounterLogWithArgument = (counter) => {
    console.log(counter);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIcrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleCounterLogWithArgument(this.state.count)}
          className="btn btn-primary"
        >
          Log Counter Value
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
