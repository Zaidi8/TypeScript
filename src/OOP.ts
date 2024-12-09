class Car{
    name:string;
    brand:string;
    model:number;

    constructor(n:string , b:string ,m:number){
        this.name=n
        this.brand=b
        this.model=m
    }
}

const civic= new Car('Civic','Honda',2016)
console.log(civic)

//Shorthand Initialization
class Product{
    constructor(public id:string ,public price :number){}

}
const toy = new Product('a0345',250)
console.log(toy)

//Access Modifiers
//Public , Privat , Abstrat , Readonly


//Inheritance
class Truck extends Car{
    constructor(n:string,b:string,m:number,public color:string){
        super('Mazda', b, m)
        this.name=n
    }
};
const mazda =new Truck('','Toyota',2015,'red');
console.log(mazda);


//Getter and Setter
//getter and setter allows you to use object properties outside the class

class Person{
    constructor(public firstName :string , public lastName:string){}
    get fullName(){
        return this.firstName+this.lastName;
    }
    set fullName(value :string){
        const part=value.split('');
        this.firstName=part[0];
        this.lastName=part[1];
    }

}
// Person.fullName = 
// console.log(Person.first)