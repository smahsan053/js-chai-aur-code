// Array

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

console.log(myArr);
console.log(myArr[0]); // targetting first element

// Array Methods
// Push
myArr.push(10)
myArr.push(11) // push an element at last of an Array
console.log(myArr);

//Pop
myArr.pop()
myArr.pop()
console.log(myArr); // pop out last element from an array

// Unshift
myArr.unshift(-1)
console.log(myArr); // push an element at the start of an array

// Shift
myArr.shift()
console.log(myArr);

// Includes
console.log(myArr.includes(9));

// Indexof
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(19));

// Join
const newArr = myArr.join()
console.log(myArr);
console.log(typeof myArr);
console.log(newArr); // join converts an array into an string
console.log(typeof newArr);

// slice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B" , myArr); // slice does not change original array

// splice
const myn2 = myArr.splice(1, 3)
console.log("C" , myArr); // splice manipulates original array
console.log(myn2);
