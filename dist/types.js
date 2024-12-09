"use strict";
var _a, _b;
//Number
let a;
a = 13;
console.log(a);
//String
let b;
b = "Hello World";
console.log(b);
//Boolean
let admin;
admin = true;
console.log(admin);
//Object
let Car1 = {
    Color: "Red",
    Hp: 1600,
    Brand: 'Honda'
};
console.log(Car1);
//Array
let even = [];
even = [2, 4, 6, 8];
console.log(even);
// Tupple
const person = {
    role: [1, 'zaid']
};
console.log(person.role[1]);
// Enum
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
console.log(Colors.green);
//Any
let person1;
person1 = ['Zaid', 'Zaheer', 3837, true];
person1 =
    console.log(person1);
//Union
let c;
c = 3;
c = "BlueSoft";
console.log(c);
function combine(input1, input2) {
    //This if check is also known as type guard because it will check the type aand make decision accordingly
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
console.log(combine("BlueSoft", "Company"));
console.log(combine(3, 5));
let emp1;
emp1 = {
    name: 'Mark',
    id: 3445,
    dpname: 'IT'
};
console.log(emp1);
//Literal Type
let d;
//If i write hello in d it will give an error because I have defined it earlier
d = "Hi";
console.log(d);
let e;
e = 'zaidi';
e = 3;
console.log(e);
let f;
//if i enter zaid instead of zaidi or 87 instead of 88 it will give error
f = 88;
//Function
//Function is also a type in typescript where we can assign a function to a variable
let g;
g = combine;
console.log(g(4, 9));
//if you  want to sure the funcion assigned variable only accepts 2 parameter function you can do by
let h;
h = combine;
console.log(h(2, 3));
//unkown
//never
//Return Types
//Number
function add(input1, input2) {
    return input1 + input2;
}
//String
function concat(input1, input2) {
    return input1 + input2;
}
//Void
function nothing(input) {
    input = "nothing";
    console.log(input);
}
let item1 = {
    item: 'Pen',
    itemid: 1234
};
if ('itemid' in item1) {
    console.log(item1.item + '  ' + item1.itemid);
}
else
    console.log('Wrong item');
class Vehical {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Boat {
    constructor(name, engine, boatNo) {
        this.name = name;
        this.engine = engine;
        this.boatNo = boatNo;
    }
}
let v1, v2;
v1 = new Vehical('Corola', 'Black');
v2 = new Boat('Yatch', '1700hp', 7887);
function printConviece(v) {
    v.name;
    if (v instanceof Vehical) {
        console.log('It is Corola');
    }
    else if (v instanceof Boat) {
        console.log('It is Yatch');
    }
}
console.log(printConviece(v2));
function movingSpeed(a) {
    let speed;
    switch (a.type) {
        case 'horse':
            speed = a.runningspeed;
            break;
        case 'bird':
            speed = a.flyingspeed;
    }
    return 'The ${animal} is moving with speed ' + speed;
}
console.log(movingSpeed({ type: 'bird', flyingspeed: 300 }));
//TypeCasting
//TypeCasting helps you to tell typescript about the type earlier about which typesript is not sure. It can work with booth HTML doocument or ts.
const input = document.getElementById('name-input');
//You can enter <HTMLInputElement> at start or as keyword after the excamation mark.
// const input = document.getElementById('name-input')! as HTMLInputElement;
input.value = "John";
//  The "!" tells typescriipt that it will never be null
console.log(input.value);
const p1 = {
    ali: 923000000000,
    ahmad: 923000000001,
    hassan: 923000000002
    //I Cant enter here string instead of phone numbers and number instead of names that is string becausse we havee defined in earlier in iintterface
};
function combineAble(input1, input2) {
    //This if check is also known as type guard because it will check the type aand make decision accordingly
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
const combined1 = combineAble('Hello', 'World');
combined1.split('');
console.log(combined1.split(''));
//Here the typescrit will allow to split because it knows the combined1 will have string because of the function overloading
//Optional Chaining
const computer1 = {
    Screen: '44-in',
    inputDevices: { keyboard: 'hp', Mouse: 'dell' }
};
console.log((_a = computer1 === null || computer1 === void 0 ? void 0 : computer1.inputDevices) === null || _a === void 0 ? void 0 : _a.keyboard);
const fetchedUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_b = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _b === void 0 ? void 0 : _b.title);
//Nullish  Coalescing
//We use ?? to check if the value is NULL or undefined istead of || operator to ensure it only consider second condition if first is NULL or undefined
const arg = '';
const argument = arg !== null && arg !== void 0 ? arg : 'Not present';
console.log(argument);
//Generic 
//Generic is a data type used with data type that helps to use typescript more effectively
const odd = [1, 3, 5, 7, 9];
// Another Example
function identity(arg, arg2) {
    return [arg, arg2];
}
console.log(identity(3, 4));
//You can extend type if you want to specify it more
function hello(abc1, abc2) {
    return Object.assign(abc1, abc2);
}
const greet = hello({ ahmad: 'hi', ali: 'hello' }, { hamza: 'AOA' });
//Here you can only assign objects to the function because we have set constraints to the gereics by using extend
console.log(greet);
;
function countAndDescribe(element) {
    let descriptionText = 'Goot no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (descriptionText.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi Brother'));
//keyOf constraint 
function f1(o, value) {
    return o[value];
}
console.log(f1({ name: 'John Wick' }, 'name'));
//Generic Classes
class Data {
    constructor(diskAddress) {
        this.diskAddress = diskAddress;
    }
}
const d1 = new Data(['36576', '8989', '78687']);
const s1 = {
    stock: 30
};
//ReadOnly that will help you to not allow add or remove properties
const items = ['Book', 'Pen'];
// items.pop()
//Generic Types help when you want to go throughout the same type but union type is helpful when you want to go through different types in a function or class intance. generic type locks in a type
