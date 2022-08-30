var deposit = 400;
// condition of six types
if(deposit > 500){

}
else if(deposit == 540){
    
}
else if(deposit <= 500){
    
}
else if(deposit >= 650){

}
else if(deposit != 500){

}
else if(deposit < 500){

}
else{

}

// array
const numbers = [13, 87, 90, 100, 250, 99, 120, 700];
// const numberCount = numbers.length;
// numbers.push(200)
// numbers.pop();
numbers[2] = 900;

// console.log(numbers);
if(numbers.indexOf(13) != -1){
    // console.log(true)
}
else{
    // console.log(false)
}

if(numbers.includes(222)){
    // console.log(true)
}
else{
    // console.log(false)
}

// loop
for(const number of numbers){
    // console.log(numbers.indexOf(13));
}

// function
function objectName(first, second){
    const fullName = first + ' ' + second;
    return fullName
}

const hisName = objectName('Kamal', 'Ahmed')
// console.log(hisName)

// Object
const bottle = {color: 'Blue', price: 25, contain: 'Water'}
const price = bottle.price;
console.log(price);


