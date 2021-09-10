// 1. Let and Const ----------
const hubby = 'Omar Sani';
let phone = 'Samsung';
phone = 'iPhone 15';

// 2. Template String ------------
const myNotes = `Iam monju of ${hubby}. I dont have a ${phone}.`;
console.log(myNotes);

// 3. Default Parameter -----------
function maxNumberDots(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumberDots();
console.log(biggest);

// 4. Spread or three Dots ---------------
function maxNumberDots(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggestNumber = maxNumberDots();
console.log(biggestNumber);

// 5. Arrow Function --------------
const square = x => x * x;
console.log(square(8));