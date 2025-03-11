function outerFn() {
  const count = 0;

  return function innerFn() {
    // count will not be garbage collected after the
    // execution context is removed from call stack

    // because it is being used by innerFn
    console.log(count);
  };
}

// const inner = outerFn();
// inner();

function getNum() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // a million elements

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  // after this function returns, arr is no longer reachable
  // so you could say we have no need for it anymore
  // arr and sum will be considered as garbage and be collected by garbage collector

  // so after a function returns, everything in the
  // execution context should be gone
  return sum;
}

// const sum = getNum();
// console.log(arr);

// one purpose of closure is to create private variables
function createCounter() {
  let count = 0;

  return {
    add() {
      count++;
    },

    minus() {
      count--;
    },

    log() {
      console.log(count);
    },

    reset() {
      count = 0;
    },
  };
}

const counter1 = createCounter();
counter1.add();
counter1.add();
counter1.add();
counter1.minus();
counter1.log();

////////////////////////////////////////////////////////////

// closure can be used to create higher order functions
// higher orders functions reuse the logics

function limitedFn(callback, limit = Infinity) {
  let count = 0;
  // rest ...
  return (...args) => {
    if (count >= limit) {
      return "limit reached";
    } else {
      // spread ...
      const output = callback(...args);
      count++;
      return output;
    }
  };
}

const sayHi = limitedFn((name) => {
  console.log("Hi", name);
}, 2);

const gamble = limitedFn((min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}, 3);

// sayHi("Jack");
// sayHi("John");

// console.log(gamble(1, 10));
// console.log(gamble(1, 10));
