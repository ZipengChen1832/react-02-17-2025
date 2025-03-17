import React, { useState } from "react";

type ClassCounterProps = {
  name: string;
};

type ClassCounterState = {
  count: number;
};

export class ClassCounter extends React.Component<
  ClassCounterProps,
  ClassCounterState
> {
  constructor(props: any) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    console.log("building constructor");
  }

  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("component mounted");
  }

  componentDidUpdate(): void {
    console.log("component updated");
  }

  componentWillUnmount(): void {
    console.log("component unmounted");
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }

  // equivalent to return in functional component
  render() {
    console.log("component rendering...");
    // console.log(this.state.count);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleAdd}>Increment</button>
      </div>
    );
  }
}

export function FnCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Function Counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// class Animal {
//   eat() {
//     console.log("Animal is eating");
//   }
// }

// class Dog extends Animal {
//   eat() {
//     console.log("Dog is eating");
//   }
// }

// const dog = new Dog();
// dog.eat(); // Animal is eating
