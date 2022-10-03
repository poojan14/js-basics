
/* program to check whether the last digit of three
numbers is same */

function lastd(a,b,c){

// find the last digit
const r1 = a % 10;
const r2 = b % 10;
const r3 = c % 10;

// compare the last digits
if(r1 == r2 && r1 == r3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}
}
lastd(7,17,27);