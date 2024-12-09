//Number
let a:number;
a=13;
console.log(a)

//String
let b:string;
b="Hello World";
console.log(b)

//Boolean

let admin:boolean;
admin=true;
console.log(admin)


//Object
let Car1 = {
    Color:"Red",
    Hp:1600,
    Brand:'Honda'
}
console.log(Car1)

//Array
let even:number[]=[];
even=[2,4,6,8];
console.log(even)

// Tupple

const person : {
    role: [number,string]
} = {
    role:[1,'zaid']
}
console.log(person.role[1])

// Enum
enum Colors{
    red,
    blue,
    green
}
console.log(Colors.green)

//Any

let person1 : any;
person1=['Zaid','Zaheer',3837,true]
person1=
console.log(person1)

//Union

let c:number | string
c=3;
c="BlueSoft";
console.log(c);

function combine(input1 : number | string ,input2 : number | string){

//This if check is also known as type guard because it will check the type aand make decision accordingly
    if(typeof input1=== 'number' &&typeof input2==='number'){
       return input1+input2;
}
    else{
            return input1.toString()+" "+input2.toString()
    }

   }
   console.log(combine("BlueSoft","Company"));
   console.log(combine(3,5));
    


//Intersection Type

   type employee = {
    name :string
    id:number
   }
   type department = {
    dpname:string
   }

   type employeeDetails = employee&department
   let emp1:employeeDetails
   emp1 = {
    name:'Mark',
    id:3445,
    dpname:'IT'
   }
   console.log(emp1)


   //Literal Type
   
   let d:"Hi";
   //If i write hello in d it will give an error because I have defined it earlier
   d="Hi";
   console.log(d)

   //Alias
   //Alias allows you to create a custom data type forexample union type of number and string
   type Combinedtype = number | string;
   let e:Combinedtype;
   e='zaidi';
   e=3;
   console.log(e)
   
   type specified = "zaidi" | 88
   let f:specified
   //if i enter zaid instead of zaidi or 87 instead of 88 it will give error
   f=88


   //Function
   //Function is also a type in typescript where we can assign a function to a variable
   
   let g:Function
   g=combine
   console.log(g(4,9))
   //if you  want to sure the funcion assigned variable only accepts 2 parameter function you can do by
   let h:(a:Combinedtype , b:Combinedtype)=>Combinedtype;
   h=combine
   console.log(h(2,3))


   //unkown


   //never





   //Return Types

    //Number
   function add(input1 :number, input2 : number):number{
        return input1+input2
   }
 
    //String
   function concat(input1 :string, input2 : string):string{
    return input1+input2
}
    //Void
    function nothing(input:string):void{
        input="nothing"
        console.log(input)
    } 


    //Type Guards

    interface Stock  {
        item:string
        itemid:number
    }
    let item1:Stock={
        item:'Pen',
        itemid:1234
    }
    if('itemid' in item1){
        console.log(item1.item+'  '+item1.itemid) 
    }
    else
    console.log('Wrong item')

    class Vehical{
        constructor(public name:string  ,  public color:string){}
    }
    class Boat{
        constructor(public name :string , public engine:string , public boatNo:number){}
    }
    type Conviece = Vehical | Boat
    let v1,v2:Conviece
     v1= new Vehical('Corola','Black')
     v2= new Boat('Yatch','1700hp',7887)
    function printConviece(v:Conviece):void{
        v.name
        if(v instanceof Vehical){
            console.log('It is Corola')
        }
        else if (v instanceof Boat){
            console.log('It is Yatch')
        }
    } 
    console.log(printConviece(v2))

    //Descriminated Union
    interface Bird{
        type:'bird'
        flyingspeed:number
    }
    interface Horse{
        type:'horse'
        runningspeed:number
    }
    type Animal = Bird | Horse
    function movingSpeed(a:Animal):string{
        let speed;
        switch(a.type){
            case 'horse':
            speed=a.runningspeed;
            break
            case 'bird':
            speed=a.flyingspeed;
        }
        return 'The ${animal} is moving with speed '+speed;
    }
    console.log(movingSpeed({type: 'bird' , flyingspeed:300}))


    //TypeCasting

    //TypeCasting helps you to tell typescript about the type earlier about which typesript is not sure. It can work with booth HTML doocument or ts.

    const input = <HTMLInputElement>document.getElementById('name-input')!;
    //You can enter <HTMLInputElement> at start or as keyword after the excamation mark.
    // const input = document.getElementById('name-input')! as HTMLInputElement;
    input.value="John"
    //  The "!" tells typescriipt that it will never be null
    console.log(input.value)




    //Index Propety

    //It helps you to restrict your object for a specifiic type forexample striiing or number

    interface PhoneNumbers{
        [prop:string]:number
    }
    const p1:PhoneNumbers = {
        ali:923000000000,
        ahmad:923000000001,
        hassan:923000000002
        //I Cant enter here string instead of phone numbers and number instead of names that is string becausse we havee defined in earlier in iintterface
    }



    //Function Overloading
    function combineAble(input1:number , input2:number):number;
    function combineAble(input1:string , input2:string):string;
    function combineAble(input1 : number | string ,input2 : number | string){

        //This if check is also known as type guard because it will check the type aand make decision accordingly
            if(typeof input1=== 'number' &&typeof input2==='number'){
               return input1+input2;
        }
            else{
                    return input1.toString()+" "+input2.toString()
            }
        
           }
const combined1 = combineAble('Hello' , 'World')
combined1.split('')
console.log(combined1.split(''))
//Here the typescrit will allow to split because it knows the combined1 will have string because of the function overloading



//Optional Chaining

const computer1={
    Screen : '44-in',
    inputDevices:{ keyboard:'hp', Mouse:'dell' }
};
console.log(computer1?.inputDevices?.keyboard)



const fetchedUserData ={
    id : 'u1',
    name :  'max',
    job : {title : 'CEO' , description : 'My own company'}
};
console.log(fetchedUserData?.job?.title)


//Nullish  Coalescing
//We use ?? to check if the value is NULL or undefined istead of || operator to ensure it only consider second condition if first is NULL or undefined
const arg=''
const argument = arg ?? 'Not present'
console.log(argument)



//Generic 
//Generic is a data type used with data type that helps to use typescript more effectively

const odd: Array<number>=[1,3,5,7,9]
// Another Example
function identity<T,U>(arg:T  , arg2:U){
    return [arg,arg2];
}
console.log(identity(3,4))
//You can extend type if you want to specify it more

function hello<X extends object,Y extends object>(abc1:X , abc2:Y){
        return Object.assign(abc1,abc2)
}
const greet = hello({ahmad : 'hi',ali :'hello'},{hamza : 'AOA' })
//Here you can only assign objects to the function because we have set constraints to the gereics by using extend
console.log(greet)
interface lengthy{
    length:number;
};
function countAndDescribe<T extends lengthy>(element:T){
    let descriptionText ='Goot no value'
    if (element.length===1) {
        descriptionText='Got 1 element'        
    }
    else if (descriptionText.length>1) {
        descriptionText='Got ' + element.length + ' elements'       
    }
    return [element , descriptionText]
}
console.log(countAndDescribe('Hi Brother'))

//keyOf constraint 
function f1<T extends Object , U extends keyof T>(o:T , value:U){
    return o[value];
}
console.log(f1({name : 'John Wick'},'name'))


//Generic Classes
class Data<T extends number|string>{
    constructor(public diskAddress:T[]){}
}
const d1= new Data<string>(['36576','8989','78687'])




//Generic Utility Types

//Partial -> that sets all properties as optional
interface Store{
    items:string
    stock:number
}
const s1:Partial<Store>={
    stock:30
}
//ReadOnly that will help you to not allow add or remove properties
const items:Readonly<string[]>=['Book','Pen']
// items.pop()


//Generic Types help when you want to go throughout the same type but union type is helpful when you want to go through different types in a function or class intance. generic type locks in a type


