const coding = ["js", "ruby", "java", "python", "cpp"]

// for each
coding.forEach((item) => {
    console.log(item);
})
// holding for each in a variable to check what it returns
const values = coding.forEach((item) => {
    console.log(item);
    // return item; // for each always return undefined whether we use return keyword or not
})
console.log(values); // it return undefined

// solution
// using filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = myNums.filter( (num) => num>4) // implicit return
console.log(newNums);
const newNum = myNums.filter( (num) => {
    return num > 4 // return key word is must if we open scope or want return as explicit
})
console.log(newNums);

// same problem, if we want to solve using for each loop
const anotherNums = []
myNums.forEach((num) => {
    if (num > 4) {
        anotherNums.push(num)
    }
})
console.log(anotherNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks_genre = books.filter((bk) => bk.genre === "History")
  console.log(userBooks_genre);
  const userBooks_publish = books.filter((bk) => { return bk.publish >= "1995"})
  console.log(userBooks_publish);
  const userBooks_publish_genre = books.filter((bk) => { 
    return bk.publish >= "1995" && bk.genre === "Science"
})
  console.log(userBooks_publish_genre);
