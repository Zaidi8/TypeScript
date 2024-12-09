function Logger(Target:Function){
    console.log('Decorator started')
    console.log(Target)
}

@Logger
class Labour{
    name='Sharafat'
    constructor(){
        console.log(this.name + ' is working...')
    }
}
const l1=new Labour
console.log(l1)


//We can use decorator as factories by returning target function and we can take arguments through the function that we will use inside the funcion


function Greeter(greet:string , name :string){
    return function(Target:Function){
    console.log(greet+name)
    console.log(Target)}
}

@Greeter('Hello ','Im max')
class Labours{
    name='Sharafat'
    constructor(){
        console.log(this.name + ' is working...')
    }
}
const l2=new Labours
console.log(l2)

