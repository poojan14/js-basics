function compare(s1,s2){
const result = s1.toUpperCase() === s2.toUpperCase();
if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
}
compare('hello','HELLO');
compare('hello','HELO');