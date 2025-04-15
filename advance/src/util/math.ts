function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  const product = a * b;
  return product;
}

// named export
export { sum, subtract, multiply };
