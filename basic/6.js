//factorial
function f(n){
if (n < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
 
// if number is 0
else if (n=== 0) {
    console.log(`The factorial of ${number} is 1.`);
}
 
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact =fact* i;
    }
    console.log(`The factorial of ${n} is ${fact}.`);
}
}
f(4);
