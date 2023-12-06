const newHero = ["hulk", "spiderman"]
function multiplyBy5(num) {
    return num*5;
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // empty parenthesis //empty value of this in current context

function createUser(username, score){
    this.username = username // this set current context
    this.score = score
    return this
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai", 25) 
const tea = createUser("tea", 250)
// console.log(chai);
chai.printMe()
tea.printMe()
console.log(createUser("ahsan", 27));
console.log(createUser("ahsan", 27));
console.log(new createUser("ahsan", 27).printMe());
