//swap 2 numbers:
//temp var
function swap(n1,n2){
    temp=n1;
    n1=n2;
    n2=temp;
    console.log("value after swap:" +n1+" and "+n2);
}
swap(5,10);
//destructuring
function swap1(n1,n2){
    [n1,n2]=[n2,n1]
    console.log("value after swap:" +n1+" and "+n2);
}
swap1(15,20);
//sum and diff
function swap2(n1,n2){
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log("value after swap:" +n1+" and "+n2);
}
swap2(50,100);