
["", "", ""] // string inside array
[{}, {}, {}] // object inside array

const arr = [1, 2, 3, 4, 5]

// for loop
console.log("for loop");
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);   
}

// for of
// with an array
console.log("for of loop");
for (const index of arr) {
    console.log(index); // for of loop return values of an array
                        // for in loop return keys of an array
}

// with a string
console.log("for of loop with string");
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// with Maps
console.log("for of loop with maps");
const map = new Map()
map.set('IN', "India")
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PK', "Pakistan") // it will not be added to map because map always print unique value no repetition allowed
console.log(map);

// will print key & value as an individual array for each element
for (const key of map) {
    console.log(key);
}

// array destructuring
// will print key and values seperately
for (const [key, value] of map) {
    console.log(key, ":", value);
    console.log(key);
    console.log(value);
}

// with object
console.log("for of loop with an object");
console.log("object is not iterable with for of loop");
// object is not iterable with for of loop
const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}
// for (const key of myObject) {
//     console.log(key);
// }

