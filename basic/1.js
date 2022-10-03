//sum of 1st n natural numbers:
//using function
function sum (n) {
    sum = (n * (n+1)) /2
}
sum(6);
console.log(sum);

//using for loop
let sum2=0;
for(let i=0;i<=7;i++){
   sum2= sum2+i;
}
console.log(sum2);

//using reduce method
function add(...n){
    return n.reduce((s,i)=>s+i,0)
}
let data=add(1,2,3,4);
console.log(data);