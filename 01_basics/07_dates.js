// January 1st 1970

let myDate = new Date()
console.log(myDate); // Non readable
console.log(typeof myDate);
console.log(myDate.toString);
console.log(myDate.toString()); // Somewhat readable format
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate);
console.log(myCreateDate.toDateString()); // Months Start from 0 n Js

let myCreateDateWithTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDateWithTime);
console.log(myCreateDateWithTime.toDateString()); // Months Start from 0 n Js
console.log(myCreateDateWithTime.toLocaleDateString()); 
console.log(myCreateDateWithTime.toLocaleString()); 

let myCreateDateInCustomFormat = new Date("2023-01-14") //yy-mm-dd : Moths start from 1
console.log(myCreateDateInCustomFormat);
console.log(myCreateDateInCustomFormat.toDateString());
console.log(myCreateDateInCustomFormat.toLocaleString());

let myCreateDateInAnotherCustomFormat = new Date("01-14-2023") //mm-dd-yy : Moths start from 1
console.log(myCreateDateInAnotherCustomFormat);
console.log(myCreateDateInAnotherCustomFormat.toDateString());
console.log(myCreateDateInAnotherCustomFormat.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp) //time in milli second from January 1st 1970
console.log(myCreateDate.getTime());
console.log(Date.now());
// Converting millisecond in to seconds
console.log(Date.now()/1000); // returns decimal value
console.log(Math.floor(Date.now()/1000)); // solution will return value in whole number

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); // Months starts from 0 in Js 
console.log(newDate.getDay()); // Starting from Monday (1)

// Customizing date formate
newDate.toLocaleString('default'{
    weekday: "long"
})
