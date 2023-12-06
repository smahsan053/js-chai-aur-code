// Object Literals
const user = {
    username: "ahsan",
    loginCount: "8",
    signedIn: "true",
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username) // accessing object property
console.log(user.getUserDetails()); // accessing object method
console.log(this);


// Now if we want to print another userdata as well
// we need to make another object literals for user2
// and so on for all user we need to make individual object literals which will make the code messy
// therefore oops concept is introduced to make the code short & precise

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User("ahsan", 12, true)
console.log(userOne);
// const userTwo = User("Ali", 11, false)
// console.log(userOne); // userTwo overwrite userOne
const userTwoNewCopy = new User("Ali", 11, false)
console.log(userOne);
console.log(userTwoNewCopy); // new key word is a consructor function gives a new instance instead of overwriting the existing one
console.log(userOne.constructor); // reference to itself
console.log(userOne.greeting());

// new keyword in js
// Step 1: Generate an empty object called as Instance
// Step 2: call constructor function, and wraps up all arguments and other things in it
// Step 3: Inject all wrapped things in this keyword
// Step 4: Return in function