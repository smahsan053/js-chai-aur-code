const myNums = [1, 2, 3]

// Array.reduce( function (accumulator, currentValue){
//     return accumulator + currentValue;
// }, initialValue)

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)
console.log(myTotal);

// using arrow function
const mySum = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(mySum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceToPay);

// factorial
// function for finding the factorial of n
function factorial(num) {
    return Array.from({length: num}, (_, i) => i + 1)
    .reduce((acc, val) => acc * val, 1);
 }
 console.log(factorial(5));
 console.log(factorial(10));
 console.log(factorial(0)); 