
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName  // reference of function
sayMyName() // executio of function

// functions when we know the number of parameters we need for our function
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
addTwoNumbers() // will return NaN because we didn't provide any argument here, while function has defined parameters
addTwoNumbers(3,4)
addTwoNumbers(3,"4") //js will treat both arguments as string
addTwoNumbers(3,"a") 
addTwoNumbers(3, null) 
const result = addTwoNumbers(3,5)
console.log("Result:", result); //will return undefined because function is nor returning any thing

//solution
function addAnotherTwoNumbers(number1, number2){
    let result = number1 + number2
    return result;
    // or we can write like this
    // return number1 + number2;
}
const result2 = addAnotherTwoNumbers(3,5)
console.log("Result:", result2); // will return sum of 3 & 2 not NaN. Because return allows the fuction value to be save in another value

function logInUserMessage(username = "sam"){
    // username = "sam" will void the use of if statement here. Whenever there is a null or undefined username, function will return its default value "sam"
    // if(username === undefined){ // or we can write like this
        if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(logInUserMessage("Ahsan"));
console.log(logInUserMessage("")); // null
console.log(logInUserMessage()); // undefined

// functions when we don't know the number of paramenters 
// in such cases we use rest operator "..."
// rest operator will bind all arguments into an array
// function calculateCartPrice(...num1){
    //  or we can also write like this
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "hitessh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject()
// handleObject() with predefined object (users)
handleObject(user)
// handleObject() with new random object
handleObject({
    username: "Ahsan",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 1000, 400, 300]));