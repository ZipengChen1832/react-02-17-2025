const person = {
  name: "John",
  age: 30,
  something: undefined,
  asset: null,
  address: {
    city: "New York",
    country: "USA",
    coordinate: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  sayHi() {
    // this keyword refers to the object that is calling the function
    console.log("Hi, my name is", this.name);
  },
};

// Shallow copy
const clone = { ...person };

// const clone = {
//   name: person.name,
//   age: person.age,
//   address: person.address,
// };

// clone.name = "Peter";
// console.log(clone.address === person.address);

// // reason it happened is because the address is copied by reference
// clone.address.city = "Mars";
// console.log(person.name, person.address.city); // John
// console.log(clone.name, clone.address.city); // Peter

// Deep copy

// 1. Using JSON
// this function converts the object to string
const str = JSON.stringify(person);
// console.log("str", str);

// this function converts the string back to object
// or rather, build a new object from the string
// that's why it's guaranteed to be a deep copy
// const deepClone = JSON.parse(str);
// console.log(deepClone);

// 2. Using 3rd party library such as lodash

// 3. use structuredClone() method
const deepClone = structuredClone(person);
