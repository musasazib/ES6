function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

function fullName(first, last = 'Chowdhory') {
    const name = first + ' ' + last;
    return name;
};