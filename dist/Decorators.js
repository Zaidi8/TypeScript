"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(Target) {
    console.log('Decorator started');
    console.log(Target);
}
let Labour = class Labour {
    constructor() {
        this.name = 'Sharafat';
        console.log(this.name + ' is working...');
    }
};
Labour = __decorate([
    Logger
], Labour);
const l1 = new Labour;
console.log(l1);
//We can use decorator as factories by returning target function and we can take arguments through the function that we will use inside the funcion
function Greeter(greet, name) {
    return function (Target) {
        console.log(greet + name);
        console.log(Target);
    };
}
let Labours = class Labours {
    constructor() {
        this.name = 'Sharafat';
        console.log(this.name + ' is working...');
    }
};
Labours = __decorate([
    Greeter('Hello ', 'Im max')
], Labours);
const l2 = new Labours;
console.log(l2);
