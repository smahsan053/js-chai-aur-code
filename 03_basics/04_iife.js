// Immediately Invoked Function Expressions (IIFE)
// Data base. When we need to fetch data from data base so our programs can use these data
// to reduce global scope pollution in our function

// IIFE Syntax
// ()()
// first parenthesis is where we will write function definition
// 2nd parenthesis is for execution
// ; is must so function can identify where to end

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

// no need to execute like this
// chai()

// IIFE using arrow function
// also known as unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh")