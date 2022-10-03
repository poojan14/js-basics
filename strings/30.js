// convert the letters of a given string in alphabetical order
function alphabet(str) { 
return str.split("").sort().join("");         
}
console.log(alphabet("Python"));