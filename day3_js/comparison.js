// type coercion is the automatic conversion of one data type to another data type
console.log("I have " + 10 + " apples");

console.log(1 + "1") // 11

// 0 will be converted to falsy value
// same with null, undefined, NaN, and empty string
if ("") {
  console.log("true");
} else {
  console.log("false");
}



// loose comparison
// it will do a type coercion before comparing the values
console.log("1" == 1);

// strict comparison: always use this
// it will compare the values without type coercion
// if types are different, false
console.log("1" === 1);
