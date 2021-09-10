const myObject = { x: 2, y: 71, z: 34, a: 43, b: 12, c: 09 };
const { y, b } = myObject;
console.log(b);

// Destructuring Array ------
const [p, q] = [12, 23, 34, 45, 56, 67, 78];
console.log(p, q);

const [best, faltu] = ['Rohim', 78];
console.log(best, faltu);

const company = {
    name: 'GP',
    ceo: { name: 'Ajmol', food: 'Banana', address: 'Bonani' },
    web: { work: 'Development', employee: 22, framework: 'react' },
};
console.log(company?.website?.work);
console.log(company?.web?.framework);