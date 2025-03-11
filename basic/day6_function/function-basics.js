// ways to write function in javascript
// always have: name, arguments, body

// 1. Function Declaration (common)
function foo(a, b){
    return a + b;
}

// 2. 2nd way (less common)
const bar = function(){

}

// 3. Arrow Function (common)
const baz = (a, b) => {

}

// 4. anonymous function (common)
setTimeout(function(){
    console.log("Hello");
}, 1000);


// Difference between foo vs foo(); !important

console.log(foo) //this is simply the foo function definition
console.log(foo(1,1)) //this is the foo function's return value after calling it




