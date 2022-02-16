// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: this.props.initialValue,
//     };
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   render() {
//     return <span onClick={this.increment}>Contador: {this.state.counter}</span>;
//   }
// }

import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  return <span onClick={increment}>Counter: {counter}</span>;
};

export default Counter;