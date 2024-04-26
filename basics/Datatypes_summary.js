const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId)

console.log(id)
console.log(anotherId)


//symbols are used to uniquily identify the components
//primitive data types
// number, string, null, undefined,symbol,boolean,bigint(copy by value)

// Non primitive (copy by referrence)
//Arrays,objects,functions




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


// const bigNumber = 3456543576654356754n
//put n at the end to make a number as bigint


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
//object should be enclosed within {} & inside that key & value pair.


const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof undefined)//undefined
console.log(typeof anotherId);// symbol
console.log(typeof null) //object
console.log(typeof heros) //object 
console.log(typeof myObj);//object
console.log(typeof myFunction) //function or object function
//data types of all non primitive data types will be object only, data type of null is also object.
//  data type of function is function or its called object function

// https://262.ecma-international.org/5.1/#sec-11.4.3
