import React, { useEffect, useMemo, useState } from "react";
import useForceUpdate from "../hooks/useForceUpdate";

export default function Rendering() {
  const forceUpdate = useForceUpdate();
  console.log("Parent rendered");

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.userId === 1);
  }, [posts]);
  // const filteredPosts = posts.filter((post) => post.userId === 1);
  console.log("Filtered posts rendered", filteredPosts);

  // memoize the object so that its reference does not change
  const info = useMemo(() => {
    return { name: "John", age: 2 };
  }, []);

  return (
    <div>
      <h2>Prevent unnecessary re-rendering</h2>
      <h3>Parent: </h3>
      <button onClick={forceUpdate}>Force update</button>

      <Child info={info} />
      {/* <ClassChild /> */}
    </div>
  );
}

const Child = React.memo(({ info }: any) => {
  const { name, age } = info;
  const [count, setCount] = useState(0);
  console.log("Child rendered");
  return (
    <div>
      <h3>
        Child: {name} {age}
      </h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
});

// if props and state are not changing, the component will not re-render
class ClassChild extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("ClassChild rendered");
  }

  render() {
    console.log("ClassChild rendered");

    return (
      <div>
        <h3>Class Child</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
