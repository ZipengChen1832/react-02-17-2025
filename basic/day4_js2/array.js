const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(numbers) {
  let sum = 0;
  numbers.forEach((elem) => {
    sum += elem;
  });
  return sum;
}

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);


