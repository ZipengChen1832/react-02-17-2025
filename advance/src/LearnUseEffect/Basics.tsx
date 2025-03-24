import React, { useEffect } from "react";

// function components do not have lifecycle methods
// instead, we use useEffect to mimic these methods

export default function Basics() {
  const [count, setCount] = React.useState(0);
  const [theme, setTheme] = React.useState("blue");
  // this will behave like componentDidUpdate
  useEffect(() => {
    console.log("Component re-rendered");
  });

  // still similar to componentDidUpdate,
  // but only runs when the count changes
  useEffect(() => {
    console.log("count has been updated");
  }, [count]);

  // this will behave like componentDidMount
  useEffect(() => {
    // const id = setInterval(() => {
    //   console.log("count: ", Date.now());
    // }, 1000);

    console.log("Component did mount");
    return () => {
      // this cleanup function
      // will behave like componentWillUnmount
      console.log("Component will unmount");

    //   clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "blue" ? "red" : "blue")}>
        Toggle Theme
      </button>
    </div>
  );
}
