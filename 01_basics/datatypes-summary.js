// # Primitive  Data Types
// 7 types 
// String, Number, Boolean, Null, undefined, symbol, Bigint

// JavaSript is dynamically typed language, it does not need to define data types during code compilation
const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId)

const bigNumber = 345678934567n



// # Reference Type or Non Primitive
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "ahsan",
    age: 26,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);