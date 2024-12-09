// // // interface Banda{
// // //     name:string;
// // //     age:number;
// // // }
// // // class Employee implements Banda {
// // //     name : string;
// // //     age: number
// // //     constructor( n:string , a:number){
// // //         this.name=n;
// // //         this.age=a;    }

// // //     getDetails(name:string,age:number){
// // //         this.name=name
// // //         this.age=age
// // //         return name+' '+age
// // //     }

// // // }
// // // let e1= new Employee('Max' , 36)
// // // console.log(e1)
// // // console.log(e1.getDetails('Williams',29))

// // class Animal{
// //     constructor(public name:string){}
// //     speak():void{
// //         console.log('Animal makes sound');
// //     }
// // }
// // class Cat extends Animal{
// //     speak():void{
// //         // this.name=n
// //         console.log(`${this.name} says Meow`);
// //     }
// // }
// // let c1 = new Cat('Billi');
// // console.log(c1.speak())

// interface Workable{
//     work():void
// }
// interface Eatable{
//     eat():void
// }
// class Workerr implements Workable,Eatable{
//     work(): void {
        
//     }
//     eat(): void {
        
//     }
// }
// class Robot implements Workable{
//     work(): void {
        
//     }
// }

interface shape{
    area():number
}
class Circle implements shape{
    constructor(public radius:number , public shape :string){}
    area(){
        return this.radius*2*Math.PI
    }
}
let c1= new Circle(4,'Circle')
console.log(c1.area())
class Rectangle implements shape{
    constructor(public height:number  , public width :number , public shape  :string){}
    area(){
        return this.height*this.width
    }
}
let r1= new Rectangle(4,3,'Rectangle')
console.log(r1.area())

// function printArea(shape:shape):number{
//     if (this.shape==='Circle'){
//         return Circle.area()
//     }
// }



// function identityy<T>(arg: T): T {
//     return arg
//   }
  
//   const output = identityy<string>("Hello, Generics!");
//   console.log(output); // Expected Output: "Hello, Generics!"
  
  

// function getFirstElement<T>(arr: T[]): T | undefined {
//     return arr[0]
//   }
  
//   const firstNumber = getFirstElement<number>([1, 2, 3]);
//   console.log(firstNumber); // Expected Output: 1
  
//   const firstString = getFirstElement<string>(["a", "b", "c"]);
//   console.log(firstString); // Expected Output: "a"




  
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const person2 = { name: "Ali", age: 25 };
  const nameofperson = getProperty(person2, "name");
  console.log(nameofperson); // Expected Output: "Ali"
  
  const age = getProperty(person2, "age");
  console.log(age); // Expected Output: 25
  




  function filterByProperty<T extends object,U extends keyof T>(fruits:T[] , key:U , value:T[U]){
    return fruits.filter((itemslist)=>itemslist[key]===value)
  }
  const itemslist = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Apple" },
  ];
  
  const filteredItems = filterByProperty(itemslist, "name", "Apple");
  console.log(filteredItems); 
  // Expected Output: [{ id: 1, name: "Apple" }, { id: 3, name: "Apple" }]
  