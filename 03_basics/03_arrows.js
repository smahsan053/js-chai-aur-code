const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // in node environment .this will return an empty object if there is no global context
 // in browser .this will return a window object even if there is no global context because winow is global object in browser

 // function in js
 // function can be write in three ways in js

 // 01
 function chai(){
    let username = "hitesh"
    console.log(this);
    // console.log(this.username); // will return undefined because it only works in object not with function
 }
 chai()

 // 02
 const code = function(){
    let username = "hitesh"
    console.log(this);
    // console.log(this.username); // will return undefined because it only works in object not with function
 }
 code()

 // 03
const chaiAurCode = () => {
    let username = "hitesh"
    console.log(this);
    // console.log(this.username); // will return undefined because it only works in object not with function
 }
 chaiAurCode()
// explicit return
// we write return key here
 const addTwo = (num1, num2) => {
    return num1 + num2
 }
 console.log(addTwo(5, 3));

 // implicit return in arrow function is when we don't need to write return key word in a function
 // we can write as below
 // no need to write return keyword
 // we can also enclose output into parenthesis like (num1 + num2 + num3)
 // in this case as well no need to write return keyword
 // but instead of parenthesis() if we enclose into braces {} return key is must to write
 const addThree = (num1, num2, num3) => num1 + num2 + num3
 console.log(addThree(5, 3, 8));
 
 // implicit return is useful when we want to return object in our function
 const objectReturn = (num1, num2, num3) => ({username: "hitesh"})
 console.log(objectReturn(5, 3, 8));
 
const myArray = [2, 5, 3, , 9]
// myArray.forEach(() =>{})