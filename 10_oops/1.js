function user(a, b, c){
// in this case this will not identify what is variable and what its value is
// a = a;
// b = b;
// c = c;
// in this case this will identify its variable but when we will use new keyword to make an object retur n will be empty parethesis.
// bcoz its this keyword that is responsible to inject value when there is new keyword
// ah = a;
// bh = b;
// ch = c;
this.a = a;
this.b = b;
this.c = c;
return this;
// return a+b+c;
// return { sum: a + b + c, message: "Explicit return value" };
}
const userOne = user(3,3,3)
const userTwo = user(4,4,4)
console.log(userOne); // userTwo overwrite value in userOne
// solution is to create new instance for each user
// and it is possible through new key word
// new keyword basically give a a copy of user to each users instead of overwriting the exixting one
const userThree = new user(5,5,5) // now userThree will not overwrite userOne
// One thing to understand
// if instead of return this, if we return a+b+c;
// we can see userOne as 9, usertwo as 12.
// But userthree will rerun an object instead of sum because new keyword a;ways return an object.
// so if we want the sum to return we will need to explicitly return sum as an pbject
console.log(userOne);
console.log(userTwo);
console.log(userThree); 