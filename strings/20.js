
//reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//palindrom string
function palindrome(str) {
    const reversed = str.split("").reverse().join("");
    if(str==reversed){
        console.log(`${str} is palindrome`);
    }
    else{
        console.log(`${str} is not palindrome`);
    }
}
palindrome("mada");