import Lecture from "./Lecture";
import { UseClickOutsideDemo } from "./useClickOutside";
import { UseDisClosureDemo } from "./useDisClosure";
import { UseLocalStorageDemo } from "./useLocalStorage";
import { useState } from "react";

export default function HookPlay() {
  const [count, setCount] = useState(0);

  // const func = (prev) => prev + 1;
  // return (
  //   <div>
  //     <div>
  //       <h1>HookPlay</h1>
  //       <h2>count: {count}</h2>
  //       <button onClick={() => setCount(func)}>+</button>
  //       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Lecture />
      {/* <UseClickOutsideDemo /> */}
      {/* <UseDisClosureDemo /> */}
      {/* <UseLocalStorageDemo /> */}
    </div>
  );
}

