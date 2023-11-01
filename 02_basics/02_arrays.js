const marvel_heros = ["thor", "ironman", "spderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // will push wole array of dc_heros to marvel_heros as an element
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);
const allHeros = marvel_heros.concat(dc_heros); // solution : will push wole array of dc_heros to marvel_heros as an individual element
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread method also used to add two or more arrays together as an individual element
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// const real_another_array = another_array.flat(3)
// const real_another_array = another_array.flat(2)
const real_another_array = another_array.flat(1)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));