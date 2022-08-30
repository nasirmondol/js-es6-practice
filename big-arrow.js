const add = (num1, num2, num3) => num1 * num2 * num3
const result = add(2, 5, 3)
console.log('amar hisab', result)
const add2 = num => num*2;
const value = add2(10)

const getName = () => 'Abu Obayda'
const name1 = getName()
// console.log(name1)

const doMath = (x, y) =>{
    const add = x + y;
    console.log(add)
    const diff = x-y;
    console.log(diff)
    const multiply = add * diff;
    const result = multiply / 3;
    return result;
}

const math = doMath(20,5)
console.log(math);