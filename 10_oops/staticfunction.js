class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}, TEST ID: ${User.createId()}`);
    }
    static createId(){
        return `123`
    }
}
const hitesh = new User ("hitesh")
// console.log(hitesh.createId()); // at the time createId is normal function so its executing as normal
// now if we turn the method as static, above line will not work
// it can only be accessed through its class

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.logMe());
iphone.logMe()
// console.log(iphone.createId()) // not accessible due to static method

console.log(Teacher.createId());
console.log(User.createId());