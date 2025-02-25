function delayedCall(callback) {
  setTimeout(() => {
    // () only works after a function
    // if it's not a function, it will return an error
    callback();
  }, 1000);
}

const sayHi = (name) => {
  console.log("Hello", name);
  //if there is no return statement, it will return undefined
};

// important in react
delayedCall(() => sayHi("John"));
