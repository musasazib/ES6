// function declaration 
function add(num1, num2) {
    return num1 + num2;
}
const sum1 = add(15, 17);
console.log(sum1);

// function Expression
const add2 = function add3(num1, num2) {
    return num1 + num2;
}
const sum2 = add2(15, 17);
console.log(sum2);

// Function expression (antonymous)
const add4 = function (num1, num2) {
    return num1 + num2;
}
const sum3 = add4(15, 17);
console.log(sum3);

// Arrow Function
const add5 = (num1, num2) => num1 + num2;
const sum4 = add5(15, 17);
console.log(sum4);