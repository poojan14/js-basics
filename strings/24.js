//1st letter of string to uppercase:
function capitalize(str) {
const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
return capitalized;
}
console.log(capitalize('hello'));

