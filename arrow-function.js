function add(num1, num2){
    return num1+ num2
}
// function expression
const add2 = function(num1, num2){
    return num1 + num2
}
// function expression (anonymous)
const add3 = function(num1, num2){
    return num1 + num2;
}
// Arrow function
const add4 = (num1, num2) => num1 + num2

const result = add(10, 20);
const result2 = add2(10, 20)
const result3 = add3(100, 550)
const result4 = add3(100, 550)
console.log(result, result2, result3, result4)

// document.getElementById('button-id').onclick() = function handleEvent(){

// }
