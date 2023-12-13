import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    if (this.state.counter < 10) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  decrementCounter = () => {
    if (this.state.counter > -10) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  getLabelColor() {
    if (this.state.counter > 0) {
      return 'green';
    } else if (this.state.counter < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <label style={{ color: this.getLabelColor() }}>{this.state.counter}</label>
      </div>
    );
  }
}

export default Counter;
