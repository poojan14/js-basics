//hcf and lcm
// program to find the HCF or GCD of two integers
function hcf(n1,n2){
let hcf;

for (let i = 1; i <= n1 && i <= n2; i++) {
    // check if is factor of both integers
    if( n1 % i == 0 && n2 % i == 0) {
        hcf = i;
    }
}

let lcm = (n1 * n2) / hcf;

// display the hcf
console.log(`HCF of ${n1} and ${n2} is ${hcf}.`);
console.log(`LCM of ${n1} and ${n2} is ${lcm}.`);

}

hcf(15,20);