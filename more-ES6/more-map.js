const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Tabu'];

const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'Water bottle', price: 50, color: 'Yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'Blue' },
    { name: 'Smart Watch', price: 5000, color: 'Black' },
    { name: 'Sticky Note', price: 50, color: 'pink' },
    { name: 'Money Bag', price: 500, color: 'Black' }
];

const productName = products.map(products => products.name);
console.log(productName);

const productPrice = products.map(p => p.price);
console.log(productPrice);

products.map(product => console.log(product));

// for each
products.map(pd => console.log(pd));