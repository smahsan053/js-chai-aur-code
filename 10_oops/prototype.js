let myName = "hitesh"
console.log(myName.length);
let modifiedName = "   hitesh    "
console.log(modifiedName.length);

// Length is a built in property that gives the length of an element
// but when there is a space in element it counts it as well
//  I want to build acustom method that will give me true length of string excluding extra spaces
// so lets build a trueLength method
// console.log(modifiedName.trueLength());

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// creating a hitesh mehod that can be accesible to all objects
Object.prototype.hitesh = function(){
    console.log('Hitesh is present in all objects');
}
heroPower.hitesh()
myHeros.hitesh() // object is a tp levele hirarchy in js. Any metho or property associated with object is accesible to all of its below element like function, array, string

// now let's check if we create a method with array can it be accesble to all as it was wit object or not

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`);
}
myHeros.heyHitesh()
// heroPower.heyHitesh() // Error: bcause heyHitesh is associated with Array, and object is super element can not acces its lower elements.

// inheritance
// __proto__ reference

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport // taSupport will have access to all property of teachingSupport
}
// we can link inheritace property wihin object or outside object both works well
teacher.__proto__ = user // teacher will have all property of user
// this is called inheritance

// Mordern Syntax of inheritance
Object.setPrototypeOf(teachingSupport, teacher)

// Now coem to our point
let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
modifiedName.trueLength()
"    iceTea      ".trueLength()