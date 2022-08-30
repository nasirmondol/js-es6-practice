// ... ke spread operator bola hoy. er maddome kono ekta array k new ar ekti array te copy kore  bosiye convert kora jay.
const numbers = [29, 12, 17, 9000, 88, 55]
// console.log(numbers);
// console.log(...numbers);

const numbers2 = [...numbers, 100];
// numbers.push(25, 27)
// console.log(numbers)
// console.log( numbers2)



const numbers3 = [...numbers, 00, 11]
console.log(numbers3);

// const math = Math.max(89, 12, 45, 1000, 22)
// const maxInArray = Math.max(...numbers)
// console.log( maxInArray, math);