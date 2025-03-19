import React, { useState } from "react";

// what makes a component render?
// 1. state changes
// 2. parent component re-renders

export default function Rendering() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    // every time "setState" is called, the component re-renders
    setIsDark((isDark) => !isDark);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle</button>
      <ChildCounter isDark={isDark} />
    </div>
  );
}

// another syntax for functional component with React.FC
const ChildCounter: React.FC<{ isDark: boolean }> = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setState triggers re-render
    setCount(count + 1);
    // console.log(count);
  };

  console.log("rendering child counter");

  return (
    <div>
      <h2>Child Counter</h2>
      {/* <div>{isDark ? "dark" : "light"}</div> */}
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// <div>
//   <div key={1}>1</div>
//   <div key={2}>2</div>
//   <div key={3}>3</div>
// </div>;

// <div>
//   <div key={1}>0</div>
//   <div key={2}>1</div>
//   <div key={3}>2</div>
//   <div key={4}>3</div>
// </div>;



// ChildCounter()
//     handleClick() //count 0

// ChildCounter() // where count becomes 1

// problem on line 28: why is the console.log(count) displaying the old value?
// 1. when function component re-renders, it calls the function again
// 2. the function is called, everything inside the function is re-created (except for some hooks like useState, useReducer)
// 3. when you call the setState, the value at that time is already 0
// 4. the count value of 1 only exist in the new closure after calling the ChildCounter function again
