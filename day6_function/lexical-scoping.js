const a = "a";

if (true) {
  const b = "b";
  // can access a, because inner scope can access outer scope
  console.log(a); // a
}

// console.log(b); // ReferenceError: b is not defined
// because b is not defined in the outer scope

function foo() {
  const f = "f";
  console.log(a);
}
