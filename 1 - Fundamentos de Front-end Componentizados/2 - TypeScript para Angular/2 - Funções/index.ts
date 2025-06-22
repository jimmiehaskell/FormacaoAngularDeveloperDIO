// funções
function addNumber(x: number, y:number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Olá, ${name}!`;
}

function callToPhone(phone: string | number): string | number {
    return phone;
}

async function getDatabase(id: number) {
    return "Jimmie Haskell";
}

// type
type robot = {
     readonly id: number;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "zero",
}

// interfaces
interface robot2 {
    readonly id: number;
    name: string;
}

const bot2: robot2 = {
    id: 1,
    name: "megamen",
}

let soma: number = addNumber(2, 3);
let myName: string = addToHello("Jimmie Haskell");
let phone1: string = callToPhone("81 99809-2137");
let phone2: number = callToPhone(81998092137);
let userName: string = getDatabase(1);


console.log(soma);
console.log(myName);
console.log(phone1);
console.log(phone2);
console.log(userName);

console.log(bot1);
console.log(bot2);