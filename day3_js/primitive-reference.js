// primitive data types
const str = "hello world";
// console.log(str, typeof str);
const number = 1;
// console.log(number, typeof number);
const bool = true;
// console.log(bool, typeof bool);
const nullllll = null;
// console.log(nullllll, typeof nullllll);
const undefinedddd = undefined;
// console.log(undefinedddd, typeof undefinedddd);

// reference data types
const arr1 = [1, 2, 3];

const arr2 = arr1;
arr2.push(4);
// console.log("arr1", arr1);
// console.log("arr2", arr2);

// comparing two arrays by reference, which is same, thus true
// console.log(arr1 === arr2);

// This condition will always return 'false' since JavaScript compares objects by reference, not value.
// console.log([]===[]);

// console.log(arr, typeof arr);

const person = {
  name: "John",
  age: 30,
};

function changePerson(p) {
  p.name = "Jane";
}

changePerson(person);
// console.log(person);



// primitive data types are passed by value
// thus not changed
function changeNum(num){
    num = 2;
}

const num = 1;
changeNum(num);
// console.log(num);


// console.log(person, typeof person);

function sum(a, b) {
  return a + b;
}
// console.log(sum, typeof sum);


