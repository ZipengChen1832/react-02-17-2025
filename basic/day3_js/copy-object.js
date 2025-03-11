const defaultList = ["pear", "apple", "banana", "orange", "grape"];

// Copy the groceryList array
// using spread operator
const myList = [...defaultList];
// what we did with ... is literally copying the values of defaultList into myList
// it's equivalent to
// const myList = [defaultList[0], defaultList[1], defaultList[2], defaultList[3], defaultList[4]];

myList.push("mango");
// console.log("myList", myList);
// console.log("defaultList", defaultList);

const original = {
  id: 1,
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Copy the person object
const clone = { ...original };
// this is equivalent to
// const clonePerson = {
//   id: person.id, // id is a primitive data type
//   name: person.name, // primitive data types get copied by value
//   age: person.age, // so they are not changed
//   address: person.address // person.address is an object, so it gets copied by reference
// }

clone.name = "Jane";
clone.address.city = "Mars";
// console.log("original person", original);
// console.log("cloned person", clone);

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
    },
  },
];

const usersCopy = [...users];
// console.log(users[0] === usersCopy[0]);

usersCopy[0].name = "hacked xxxxxxxxxxxxxxxx";
// console.log(users);
