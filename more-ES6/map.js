const numbers = [2, 4, 6, 8, 10];
const output = [];

// Old
function doubleOld(number) {
    return number * 2;
}
// ES6
const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output);

// ES6
const outputNumber = numbers.map(doubleIt);
const outputNumber2 = numbers.map(number => number * 2);
console.log(outputNumber, outputNumber2);
// 1. Loop through each element
// 2. for each element call the provided function
// 3. Result for each element will be stored in an array

const square = numbers.map(number => number * number);
console.log(square);