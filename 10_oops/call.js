function setUserName(username){
    // complex DB calls
    // console.log(`${this.username}`);
    this.username = username
    console.log(` setUserName: CALLED`);
}
setUserName.call("username")

function createUser(username, email, password){
    setUserName.call(this,username)
    // when a function executes, all variables within function get deleted
    // so we need to hold reference of the function
    // we used .call to hold the reference of setUserName
    // this is an empty variable, where reference of setUserName will be hild before it get deleted
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);