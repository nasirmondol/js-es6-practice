function add(num1, num2 = 38){
    // option 1
    // num2 = num2 || 0
    // option 2
    // if(num2 == undefined){}
    // num2 = 0;
    // console.log(num1, num2)
    const total = num1 + num2
    return total
}

const result = add(10, 110)
console.log(result)