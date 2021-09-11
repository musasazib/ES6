class Support{
    name;
    designation = "Support web dev";
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

const amir = new Support('Amir Khan', 'Dubai');
const salman = new Support('Salman Khan', 'BD');
const shaown = new Support('Showon Kumar Bissash', 'Naogaon');
const rabbi = new Support('Golam Rabbi', 'Pahar Pur');
const hasib = new Support('Handful Hasib', 'Rajshahi');
amir.startSession();
salman.startSession();
shaown.startSession();
rabbi.startSession();
hasib.startSession();

