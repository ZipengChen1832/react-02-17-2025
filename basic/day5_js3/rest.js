const user = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@gmail.com",
  password: "123",
  // 100 other properties
};

// const userInfo = {
//   id: user.id,
//   name: user.name,
//   email: user.email,
//   // are you going to copy all 100 properties?
// };

// rest operator always appears at the last
// only used when destructuring
const { password, ...userInfo } = user;



const arr = [1,2,3,4,5,6,7,8,9,10];
// if i want to remove the first 3 elements and store the rest in a new array
const [a, b, c, ...rest] = arr;
console.log("rest", rest);
// rest has to be the last element in the destructuring assignment
// const [a, b, c, ...rest, d] = arr; // error

//  using rest to copy an array, a bit strange
const [...copy1] = arr;
// this is like the more common way to copy an array
const copy2 = [...arr];
console.log("copy1", copy1);