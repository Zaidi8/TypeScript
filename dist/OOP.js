"use strict";
class Car {
    constructor(n, b, m) {
        this.name = n;
        this.brand = b;
        this.model = m;
    }
}
const civic = new Car('Civic', 'Honda', 2016);
console.log(civic);
//Shorthand Initialization
class Product {
    constructor(id, price) {
        this.id = id;
        this.price = price;
    }
}
const toy = new Product('a0345', 250);
console.log(toy);
//Access Modifiers
//Public , Privat , Abstrat , Readonly
//Inheritance
class Truck extends Car {
    constructor(n, b, m, color) {
        super('Mazda', b, m);
        this.color = color;
        this.name = n;
    }
}
;
const mazda = new Truck('', 'Toyota', 2015, 'red');
console.log(mazda);
//Getter and Setter
//getter and setter allows you to use object properties outside the class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + this.lastName;
    }
    set fullName(value) {
        const part = value.split('');
        this.firstName = part[0];
        this.lastName = part[1];
    }
}
// Person.fullName = 
// console.log(Person.first)
