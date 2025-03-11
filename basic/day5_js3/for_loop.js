const arr = [1, 2, 3, 4, 5, 6, 7, 8, "not a number", 9, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) continue; // skip the current iteration
  if (typeof arr[i] !== "number") break; // exit the loop
  //   console.log(arr[i]);
}

for (const number of arr) {
  // ...your code here
  console.log(number);

  // with this syntax, we can still use continue and break
  // however, we cannot access the index
}

// forEach is simpler to use, but we lack precise control
arr.forEach((item) => {
  if (item % 2 === 0) return;
  // we could skip the current iteration by returning
  //   console.log(item);

  // however, there is no way to exit the loop
});
