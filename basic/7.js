//fibonacci series
function fibo(n){
let n1 = 0, n2 = 1, next;
console.log('Fibonacci Series:');
for (let i = 1; i <= n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
}
fibo(8);