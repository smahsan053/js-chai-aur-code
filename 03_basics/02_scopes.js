let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

// {} is scope if it is with any function or if else or others statment
if (true){
    //scope
    let d = 10
    const e = 20
    var f = 30
}
// console.log(d);
// console.log(e);
console.log(f);

// Nested Scope
// child can access parent variable but parents can't
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // website not defined beacause it is out of scope
    two()
}
one()

if(true){
    const username = "hitesh"
    if (username === "hitesh"){
    const website = " youtube"
    console.log(username +  website);
}
// console.log(website); // website not defined beacause it is out of scope
}
// console.log(username); // username not defined beacause it is out of scope

// +++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

// we can write functions in many ways in js
// following are the two ways to explain a little difference

// function declaration using function statement
// in this case we can access function even before declaration
console.log(addOne(5)); // Can access 'addOne' before initialization
function addOne(num){
    return num +1
}

// function declaraton using a const variable
// in this case we can only access function after its declaration
console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num +2
}