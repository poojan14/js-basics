//generate random number between 2 numbers:
function r(min,max){

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
}
r(20,200);