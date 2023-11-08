// if value it is true, that's why it is truthy value
// const userEmail = "h@hitesh.ai" // truthy value
// const userEmail = "" // falsy value
const userEmail = [];
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// following are always considered as false in js
// false, 0, -0, BigInt, 0n, ", null, undefined, NaN"

// truthy value
// following are always considered as true in js
// All values that are not falsy are truthy values
// "0", "false", " ", [], {}, function(){}

// false == 0 ==> true
// false == "" => true
// 0 == "" => true

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  // Object.keys(emptyObj) this will return object into an array
  // and .length will give its length
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
let val1;
val1 = 5 ?? 10;
// if 1st value is null it will display 2nd value
val2 = null ?? 10;
// if 1st value is undefined it will display 2nd value
val3 = undefined ?? 15;
// will return 1st number
val4 = null ?? 10 ?? 20;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator
// syntax
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
