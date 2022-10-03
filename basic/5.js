//prime number in interval:

function primeno(l,h){

console.log(`The prime numbers between ${l} and ${h} are:`);
for (let i = l; i <= h; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
}
primeno(10,50);