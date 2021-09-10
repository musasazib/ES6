const fish = { id: 56, name: 'King Hilsha', price: 9000, phone: '01715767578', address: 'Chadpur', color: 'Silver' };

const { phone, id, color, price } = fish;
console.log(phone, price);
console.log(id, color);
console.log(price, id);
console.log(color, phone);

const company = {
    name: 'GP',
    ceo: { name: 'Ajmol', food: 'Banana', address: 'Bonani' },
    web: { work: 'Development', employee: 22, framework: 'react' },
};

const workOld = company.web.work;
const frameworkOld = company.web.framework;
// ES6 
const { work, framework } = company.web;
const { food } = company.ceo;

console.log(work, framework, food);