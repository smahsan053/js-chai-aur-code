// if
// If the conditons are true then code inside the scope execute otherwise it bypass

const temperature = 41;
if (temperature < 50) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greater than 50");
}

// Comparision Operators
// <, >, <=, >=, ==, !=, ===, !==

// double equal operator
if (2 == "2") {
  console.log("Executed");
} else {
  console.log("Bypassed");
}

// triple equal operator
if (2 === "2") {
  console.log("Executed");
} else {
  console.log("Bypassed");
}

// != operator
if (2 != 3) {
  console.log("Executed");
} else {
  console.log("Bypassed");
}

// Block Scope
const score = 200;
if (score > 100) {
  // var power = "fly" // Have Global scope, not recommend
  //   let power = "fly";
  const power = "fly";
  console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);

// shorthand
// Implicit scope
const balance = 1000;
if (balance > 500) console.log("test"), console.log("test2");

// nested scope
if (balance < 500) {
  console.log("Less than");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Less than 1200");
}

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true
if (isUserLoggedIn && debitCard) {
  // && will check both statement
  // both must be true
  console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  // || will check both  or any of one statement 
  // one of the condition must be true 
  console.log("User loged In");
}
