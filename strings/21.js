//replace string 
const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const new1 = string.replace(regex, 'blue');
//for only 1st instance
const new2 = string.replace('red', 'blue');
// display the result
console.log(new1);
console.log(new2);