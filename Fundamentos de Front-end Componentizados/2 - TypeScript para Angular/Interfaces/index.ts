interface Person {
    name: string,
    email: string,
    birthday: Date,

    helloPerson(): string
}

class Person implements Person {
    name: string;
    email: string;
    birthday: Date;

    constructor(name: string, email: string, birthday: Date) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }

    helloPerson(): string {
        return `Hello ${this.name}!`;
    }
}

let person: Person = new Person("Jimmie Haskell", "haskell4228@gmail.com", new Date("1992-08-01 20:00"));

console.log(person);