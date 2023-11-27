// fetch('http://something.com').then().catch().finally()  // how promises are consumed

// before promises in js
// Q Bird
// Blue Bird

// promise creation
// Promise One
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptofraphy, Network
    setTimeout(() => {
        console.log('Promise One Created');
        resolve()
    }, 1000);
})
promiseOne.then(function () {
    console.log('Promise One Consumed');
})

// Promise Two
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Two Created');
        resolve();
    }, 1000)
}).then(() => {
    console.log("Promise Two Consumed");
})

// Promise Three
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000);
})
promiseThree.then((value) => {
    console.log(value);
})

// Promise Four
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
// callback hell
// we want to extract username from above promise if it gets resolved
// trying to hold .then in another variable so we can get data by using console log
// but this logic won't work

/*
const userName = promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
console.log(userName);
*/

// so we can use promise chaining method to explore further values
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('The promise is either resolved or rejected');
    })

// Promise Five
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

// async await can not handle error gracefully, so we use try catch function if error occurs
async function consumePromiseFive() {
    try {
        const response = await promiseFive; // promise is an object so we wil not write like this promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // response will come as string
        // so need to convert into json
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})