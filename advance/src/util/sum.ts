function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// default export can be imported with any name
export default sum;

// named export
export { subtract };
