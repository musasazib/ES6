const numbers = [12, 34, 56, 78, 90, 64];
console.log(numbers);
// ES6------
console.log(...numbers);

const max = Math.max(23, 45, 67);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const number2 = [...numbers, 55];
console.log(number2);