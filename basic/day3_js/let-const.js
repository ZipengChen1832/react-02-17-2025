let count = 0;
count++;
// console.log(count); // 1
count++;
// console.log(count); // 2


const first_name = 'John';
// first_name = 'Doe'; // TypeError: Assignment to constant variable.

// we are able to modify value of a 
// you could do whatever you want with the object, but you can't reassign it to a different object.

// analogy:
// you could change what's in your house, add, change, remove furniture
// but you can't change the house address itself
const values = [1, 2, 3];
values.push(4);
values.pop();
values.sort();
values[0] = "fiuqwjfqwhofjqwoifjwqoij";

// values = [1, 2, 3]; // TypeError: Assignment to constant variable.