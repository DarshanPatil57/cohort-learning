// let x:number = 1;
// console.log(x);



// Write a function that greats a user given their firstname

// JS:
// {
//     function greeting(firstName){
//     console.log("Hello" + firstName);
// }

// greeting()

// }

// TS

function greeting(firstName:string){
    console.log("Hello " + firstName);
}

greeting("Darshan")



// Write a function that calculates the sum of two function : return type

function sum(a:number,b:number){
    return a+b
}
const value = sum(2,3)
console.log(value);


// Write true or false based on if person age is 18+ :type inference

function isLegal(age:number){
    if(age>18){
        return true
    }
    else {
        return false
    }
}
let result = isLegal(21)
console.log(result);


// Create a function that takes another function as input and runs it after 1 second. "type to the function"

function abc(fn: () => void){
    setTimeout(fn,1000)
}

abc(function(){
    console.log("Hi after 1s");
    
})


// --------------------------------------------------------------------------------------------------------------------------------------


// Interfaces : How can u assign types to objects ? To assign a type to object we can use interfaces.

// Create a function islegal that returns true or false if user is above 18+

interface User {
    firstName: string,
    lastName:string,
    age:number
}

function isLegal1(user:User){
    if(user.age > 18){
        return true
    }
    else{
        return false
    }
}

const output =isLegal1({
    firstName:"Rohit",
    lastName:"Sharma",
    age:45

})

console.log(output);


// --------------------------------------------------------------------------------------------------------------------------------------


// Types: Very similar to interfaces , types lets you aggregate data together.
// Example:
type UserInfo = {
    name:string,
    age:number
}

// TODO:  But we can do some extra things with type:=>

// 1. Unions : print id of user that can be string or number 
 type StringOrNumber = string | number;

 function printId(id:StringOrNumber){
    console.log(`ID : ${id} ` );
    
 }

 printId(100)
 printId("two hundread")

// 2. Intersection: if we want to create a type that has every property of multiple types / interfaces 

type Employee = {
    name?:String,
    company:string
}

type Manager = {
    name?:string,
    department:string
}

type TeamLead = Employee & Manager

function project(teamLead:TeamLead){
    console.log("Company : " +teamLead.company);
    console.log("Department : " +teamLead.department);
    
}

project({
    company:"OpenAI",
    department:"SDE"
})

// TODO: What is difference between interface and type
/* interfaces can be implemented by class and type lets u do union and interfaces .*/


// --------------------------------------------------------------------------------------------------------------------------------------

//ARRAYS IN TS 

// if u want to access array in ts , its simple  as adding a [] annotation next to the type

// Given an array of postive intiger as input return the maximum value in the array 

function MaxValue(arr:number[]){
    let max = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max
}

console.log(MaxValue([1,2,3]));


// Given list of users filter out users firstname that are legal to vote(greater that 18)

interface Data{
    firstname:string,
    lastname:string,
    age:number
}

function filterUser(user:Data[]){
    return user.filter(x => x.age>=18).map(x=> x.firstname)
}

console.log(filterUser([{
    firstname:"Rohit",
    lastname:"Sharma",
    age:45
},{
    firstname:"Virat",
    lastname:"Kohli",
    age:44
}]));


// --------------------------------------------------------------------------------------------------------------------------------------


// Enums : enumeration => features that  allows use to define a set of named constants.

enum Direction {
    Up,
    down,
    left,
    right
}

function game(keyPressed:Direction){
    if(keyPressed== Direction.Up){
        console.log("Up is pressed");
        
    }
    else{
        console.log("Any different key is pressed");
        
    }
}

game(Direction.Up)


// --------------------------------------------------------------------------------------------------------------------------------------

// Generics : generics unables you to create components that work with any data type while still providing compile-time type safety....

// during defination dont know the type of this it can be anything 
function identity<T>(arg:T){
    return arg
}

let output1 = identity<string>("string")
let output2 = identity<number>(1)

console.log(output1);
console.log(output2);
