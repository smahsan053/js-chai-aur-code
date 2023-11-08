const coding = ["js", "ruby", "java", "python", "cpp"]

// for each 
coding.forEach(  function (value) {
console.log(value);
})

// arrow function
// array.forEach(element => {
    
// });
// for each using arrow function
coding.forEach((value) => {
  console.log(value);  
})

// for each usin custom function
function printMe(value){
    console.log(value);
}
coding.forEach((printMe))

// we can use any other key word instead of value, like item, key, index etc
coding.forEach((item) => {
    console.log(item);
})


coding.forEach((item, index, arr) => {
    // console.log(item);
    // console.log(index);
    // console.log(arr);
    console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item); // will print each object inside an array as an individual object
    console.log(item.languageName);
    console.log(item.languageFileName);
})