let person = 'Shakib Al Hasan';
person = 'Mushfiqur Rahim';
// console.log(person);

// function calculate(first, second){
//     return first + second
// }
// const result = calculate(10, 12)
// console.log(result)

const calculate = (first, second) => first + second;
const Hisab = calculate(2, 5)

// console.log(Hisab);
// multiple parameter declear by a arrow function.
const bigNumber = (num1, num2, num3) =>{
    const add = num1 + num2;
    const diff = num1 - num2;
    const result = (add + diff) * num3;
    const more = result * diff;
    return more;

}


const math = bigNumber(15, 10, 6)
const parse = parseInt(math)
// console.log(math);

// template string
const template = `amar sonar bangla tar sonar sele ${person} his income is ${parse}`
// console.log(template)

// spread operator
const numbers = [34, 98, 547, 90, 30]

const array = [...numbers, 300]
numbers.push(10)
console.log(numbers)
console.log(array)
