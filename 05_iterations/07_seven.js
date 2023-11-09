// adding 10 to each element of an array
// using map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);

// using for each
const anotherNums  = []
myNumbers.forEach(item => {
    // console.log(item);
    if (true){
        anotherNums.push(item + 10)
    }
});
console.log(anotherNums);


// chaining
const newNum = myNumbers
                        .map((num) => num * 10 )
                        .map((num) => num +1)
                        .filter((num) => num >= 40)
console.log(newNum);