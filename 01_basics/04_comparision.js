console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
// should avoid below comparisions of different data types because it normally convert string to number before comparision
console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0); // comparision operator converts null into number before comparision
console.log(null == 0); // equality check is different from comparision operator, it does not convert null to number
console.log(null >= 0); // comparision operator converts null into number before comparision
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check
// check both data types & values
// ===

console.log("2" === 2);