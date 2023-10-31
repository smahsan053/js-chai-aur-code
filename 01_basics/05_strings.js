const name = "ahsan"
const repoCount = 50
console.log(name + repoCount + " Value"); //concatenation old way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //mordern technique of string manupulation

const gameName = new String('ahsan-hc')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);
console.log(gameName.substring(1,5));

const anotherString = gameName.slice(0,4)
// const anotherString = gameName.slice(-5,8)
// slice(indexStart)
// slice(indexStart, indexEnd)
    console.log(anotherString);

    const newStringOne = "    hitesh    "
    console.log(newStringOne);
    console.log(newStringOne.trim());

    // const url = "https://hitesh.com/hitesh choudhary"
    const url = "https://hitesh.com/hitesh%20choudhary" // browser automatically converts space into %20
    console.log(url.replace('%20', '-'))

    console.log(url.includes('hitesh'))
    console.log(url.includes('hiteshh'))

    const gameName2 = new String('ahsan-hc-hc-hc-hc') 
    console.log(gameName2.split('-'));