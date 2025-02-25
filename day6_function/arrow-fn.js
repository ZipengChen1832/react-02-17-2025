// normal arrow function syntax
const sum1 = (a, b) => {
  // explicit return because it has function body & return keyword
  return a + b;
};

// if the function only does one thing,
// you can omit the curly braces and the return keyword
// e.g.

// implicit return
const sum2 = (a, b) => a + b;

const sum3 = (a, b) => {
  // we are doing more than one thing here
  // so we need to have a function body
  // can't use implicit return
  console.log(a + b);
  return a + b;
};



//////////////// Examples //////////////////
const getRandNum = () => Math.random();
const getRandNums = () => [Math.random(), Math.random()];

// why does this have syntax error when doing implicit return?
// const getPerson = () => {name: "John", age: 30}

// the reason is: {} is used for function body
// correct way 1.
const getPerson1 = () => {
    // don't be lazy, make it explicit
    return {name: "John", age: 30};
};

// correct way 2. wrap the object in ()
const getPerson2 = () => ({name: "John", age: 30})

