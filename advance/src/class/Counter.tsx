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
  // temporary
  id: ReturnType<typeof setInterval> | undefined;
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
    this.id = setInterval(() => {
      console.log(this.state.count);
    }, 1000);
  }

  componentDidUpdate(): void {
    console.log("component updated");
  }

  componentWillUnmount(): void {
    clearInterval(this.id);
    console.log("component unmounted");
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 });
  }

  // equivalent to return in functional component
  // every time component re-renders, the "render" function is called again
  render() {
    // console.log("component rendering...");
    // console.log(this.state.count);
    // this.setState({ count: this.state.count + 1 });

    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleAdd}>Increment</button>
      </div>
    );
  }
}

// every time component re-renders, the function is called again
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
