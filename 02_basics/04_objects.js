// object literals
// no singleton
const tinderUser2  = {}
console.log(tinderUser2);

// object constructor
// singleton

const tinderUser = new Object()
// const tinderUser = new Object({})
// const tinderUser = new Object({email : "a@gmail.com"})
console.log(tinderUser);
// console.log(Array.from(tinderUser));
// Object.create

tinderUser.id = "123abc"
tinderUser.name = "ahsan"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ahsan",
            lastName: "Ali"
        }

    },
    userShortIntro: function () {
        console.log(`My name is ${this.fullName.userFullName.firstName} ${this.fullName.userFullName.lastName} and my email Id is ${this.email}`);
      }
}
regularUser.userShortIntro()
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

// combining/adding objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}
const obj3 = {obj1, obj2}
console.log(obj3);
// Object.assign(target, source1, source2,....)
const obj4 = Object.assign({}, obj1, obj2, obj5) // obj1 & obj2 will be added to an empty object {}
console.log(obj4);

// alternative way
// spread method
const obj6 = {...obj1, ...obj2, ...obj5}
console.log(obj6);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
    {
        id: 4,
        email: "l@gmail.com"
    },
    {
        id: 5,
        email: "g@gmail.com"
    }
]

console.log(users[1]);
console.log(users[1].email);

console.log(tinderUser);

console.log((Object.keys(tinderUser))); // return all keys in an Array
console.log((Object.values(tinderUser))); // return all values in an Array
console.log(Object.entries(tinderUser)); // returns an array inside of another array
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));

// destructuring of an object

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course);
// we need to write below lines of code if want to recall courseInstructor name
// if we want to do so multiple times, we need to type this lines again & again
console.log(course.courseInstructor);
// so the solution is destructuring
const {courseInstructor} = course
// now we only need to write this
console.log(courseInstructor);
// we can also rename as below
const {courseName: cn} = course
console.log(cn);

// react example
// props.company
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

// complex xml structure
// JSON
// {}

// available in two formats
// object form
// {
//     "name": "hitesh",
//     "courseName": "Js in hindi",
//     "price": "free"
// }

// array form
[
    {},
    {},
    {},
    {},
    {}
]
