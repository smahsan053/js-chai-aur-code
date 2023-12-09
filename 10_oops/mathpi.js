// browser
const myNewObj = {
    username: "username"
}
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
// I tried to overwrite theconstant alue of pi
// but i got the same value both times
// let's check its property to understand what is going here under the hood
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// searching the description of property PI from Math module
console.log(descriptor);
// return
// {
//     value: 3.141592653589793,
//     writable: false, // we can't overwrite
//     enumerable: false, // we can't apply loop
//     configurable: false
//   }

// now let's try if we can set our custom object as constant which is not writeable & iterateable

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log(`Chai nhi bani`);
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// searching the description of property name from chai obj
// return
// {
//     value: 'ginger chai',
//     writable: true, // we can overwrite
//     enumerable: true, // we can iterate
//     configurable: true
//   }

// now let's change it

Object.defineProperty(chai, 'name', {
    writable: false,
    // enumerable: false, // if enumerable is true, loop will not be applied on name
    // configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = 'iceTea' // name can't be overwrite
chai.price = 300 // price is writeable
console.log(chai);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
    console.log(`${key}: ${value}`);
    }
}