// for in loop
// with object
// iterateable with object

console.log("for in with an object");
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]); // return value of key
    // console.log(Object.keys(myObject)); // return an array of keys
    // console.log(Object.keys(myObject[key])); // return an array of index of value of an object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// with an array
console.log("for in with an array");

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key); // for of loop return values of an array
    // for in loop return keys of an array
    console.log(programming[key]); // now it will return values
}


// with map
console.log("for in with map");
console.log("map is not iterable with for in loop");
// map is not iterable with for in loop
const map = new Map()
map.set('IN', "India")
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PK', "Pakistan") // it will not be added to map because map always print unique value no repetition allowed
// console.log(map);

for (const key in map) {
    console.log(key);
}