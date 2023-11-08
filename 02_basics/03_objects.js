// singleton
// Objects.create

// object literals

const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const jsUser = {
  name: "ahsan",
  fullName: "Syed Muhammad Ahsan Ali", //keys are basicall string we can write in under quotes as well
  "nick name": "Ahmas", // if keys are written under quotes, we can also give space in between them
  age: 26,
  location: "karachi",
  email: "smahsan053@gmail.com",
  isLoggedIn: false,
  mySym: "mykey1", // object will not treat it as symbol, it will be considered as normal string key
  [mySym2]: "mykey2", // always define symbol inside [] otherwise it will ba a string
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(jsUser);
// we can print value of any specfic key in two ways
console.log(jsUser.email);
// console.log(jsUser[email]); // we must nee to write keys in quotes if it's inside []
console.log(jsUser["email"]);
// we can use both ways here as wll
console.log(jsUser.fullName);
console.log(jsUser["fullName"]);
// in belo case as there is a space between two words in keys we can only use [] method
// console.log(jsUser.nick name);
console.log(jsUser["nick name"]);
// will be print as string
console.log(jsUser.mySym);
console.log(jsUser["mySym"]);
console.log(typeof jsUser["mySym"]);

// console.log(jsUser.mySym2); // will return undefined as this method can not be used for symbol to print
// console.log(jsUser["mySym2"]); // will return undefined because we can't define symbol under quotes
console.log(jsUser[mySym2]); // the only correct method for symbol
console.log(typeof jsUser[mySym2]);
console.log(jsUser);

// we can over write any key in an object
jsUser.email = "syedmahsan053@gmail.com";
console.log(jsUser);
// we can add more keys with value in an object
jsUser.status = "alive";
console.log(jsUser);
// we can freeze our object after which no changes can be done
// Object.freeze(jsUser)
// jsUser.email = "syedbhai482@gmail.com"

// we can also add function in our object
jsUser.greeting = function () {
  console.log("Hello JS User");
  return "Hello World";
};
console.log(jsUser); 
console.log(jsUser.greeting); // will return as anonymous function
console.log(jsUser.greeting()); // proper way

// another function to explain .this
// .this can be used in string interpolaion
// we can target any specific key inside any object using ,this
jsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}, ${"email"}`);
    return "Hello World";
};

console.log(jsUser);
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());