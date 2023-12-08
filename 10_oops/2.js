// browser part
const newHero = ["hulk", "spiderman"]
console.log(newHero);
console.log(newHero.prototype);

const myName = "ahsan"
console.log(myName);
console.log(myName.prototype);

const playGame = function(){
    return "let's play game"
}
console.log(playGame());
console.log(playGame.prototype);
// Javascript by default has prototypal behaviour
// means it always approach to it's parents and then grand parents and so on until anyone returns null value
// and this property is also called as prototypal inheritance
// newHero => An Array will return array prorotype
// then Array prototype will return object prototype
// and object is the base it has no parents so either it will retun value or will return null
// same is the case with string, and function
// all the properties object has will have access to string, array and function

function createUser(username, score){
    // myUserName = username
    // myScore = score
    this.username = username
    this.score = score
    return this
}
console.log(createUser("ahsan", "22"));
console.log(createUser.prototype);
// when we print. prototype it returns empty{}
// it means e can inject our custom function within this parenthesis
// let's try
createUser.prototype.increment = function(){
return (`The score of ${this.username} is ${this.score} but with an increment it is now ${Number(this.score) + 1} `)
}

const ahs = new createUser("ahsan", "22")
console.log(ahs.increment());