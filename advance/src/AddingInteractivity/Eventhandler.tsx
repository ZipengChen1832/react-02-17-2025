import React from "react";

export default function Eventhandler() {
  const handleClick = () => {
    console.log("handle click function called");
  };

  const sayHi = (name: string) => {
    console.log(`Hi ${name}`);
  };

  const handleClick2 = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <h3>Event handler</h3>
      {/* anonymous function for event handler */}
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Click
      </button>
      {/* create a named function */}
      {/* this is bad, because you created an unnecessary function */}
      <button onClick={() => handleClick()}>Click bad</button>
      {/* this one below is better */}
      <button onClick={handleClick}>Click good</button>
      {/* calling a function with an argument */}
      <button onClick={() => sayHi("John")}>Say hi</button>
      <h3>Event handler with the event argument</h3>
      {/* handleClick2 is called with the "event" object */}
      <button onClick={handleClick2}>Click</button> {/* this is better */}
      <button onClick={(event) => handleClick2(event)}>Click</button>
    </div>
  );
}
