const numbers = [4, 65, 44, 38, 2, 90, 5, 7, 34, 65];

const bigNumber = numbers.filter(number => number > 20);
console.log(bigNumber);

const smallNumber = numbers.filter(number => number < 20);
console.log(smallNumber);


const products = [
    { name: 'Water bottle', price: 50, color: 'Yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'Blue' },
    { name: 'Smart Watch', price: 5000, color: 'Black' },
    { name: 'Sticky Note', price: 50, color: 'pink' },
    { name: 'Money Bag', price: 500, color: 'Black' }
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);

const Blacks = products.filter(pd => pd.color == 'Black');
console.log(Blacks);


// find -------------------
const findItem = products.find(pd => pd.color == 'pink');
console.log(findItem);

const findItem2 = products.find(pd => pd.color == 'purple');
console.log(findItem2);