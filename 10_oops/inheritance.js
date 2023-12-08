class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // instead of using call keyword for classes here we have special keyword super()
        // super solve our problem if we want to get some variables from another class
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()
const masalaChai = new User("masalaChai")
// masalaChai.addCourse()
chai.logMe()
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(Teacher instanceof User);