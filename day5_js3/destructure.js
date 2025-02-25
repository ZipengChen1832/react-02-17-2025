// if you are dealing with a single noun,
// the variable name should be singular
const user = {
  id: 1,
  name: "Alice Johnson",
  gender: "Female",
  age: 28,
  profession: "Software Developer",
};

function renderUser(user) {
  const peopleList = document.getElementById("people-list");
  const personElement = document.createElement("li");
  peopleList.appendChild(personElement);
  // innerHTML should be avoided, because it's prone to XSS attacks / HTML injection
  // this string syntax is called "string literals" | "string interpolation",
  // with a backtick `
  // personElement.innerHTML = `
  //     <div>Name: ${user.name}</div>
  //     <div>Age: ${user.age}</div>
  //     <div>Gender: ${user.gender}</div>
  //     <div>Profession: ${user.profession}</div>
  // `;

  // the above code is little bit verbose, we could use destructure
  const { name: fullName, age, gender, profession } = user;
  personElement.innerHTML = `
        <div>Name: ${fullName}</div>
        <div>Age: ${age}</div>
        <div>Gender: ${gender}</div>
        <div>Profession: ${profession}</div>
    `;
}

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    gender: "Female",
    age: 28,
    profession: "Software Developer",
  },
  {
    id: 2,
    name: "Bob Smith",
    gender: "Male",
    age: 34,
    profession: "Project Manager",
  },
  {
    id: 3,
    name: "Charlie Brown",
    gender: "Male",
    age: 22,
    profession: "Graphic Designer",
  },
  {
    id: 4,
    name: "Diana Prince",
    gender: "Female",
    age: 30,
    profession: "Marketing Specialist",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    gender: "Male",
    age: 40,
    profession: "Sales Executive",
  },
];

const numbers = [1, 2, 3, 4, 5];

// for (const user of users) {
//   renderUser(user);
// }

// more examples of destructuring
// 1. Destructuring in normal place
// const { name, age } = user;
// const [num1, num2] = numbers;
// console.log(num1, num2);

// 2. Destructuring in function parameter / argument
function changeUser({ name, age, gender }) {
  //   console.log(name, age, gender);
}
changeUser(user);

// 3. Destructure in a for loop
for (const { name, age } of users) {
}

// 4. destructure a function's return value
// function getUser() {
//   return user;
// }
// const { name, age } = getUser();

// difference between destructuring object and array
// 1. Object
// order doesn't matter
// const { name, age } = user;
// const { age, name } = user;

// however, key name must match
// const { name, age } = user; // correct
// const { fullName, age } = user; // incorrect

// 2. Array
// order matters
// const [num1, num2] = numbers;

const [user1, user2] = users;

const { id: id1, name: name1 } = user1;
const { id: id2, name: name2 } = user2;
console.log(id1, name1);
