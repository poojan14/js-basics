//sort words in alphabetical order:
function sortalp(str){
const words = str.split(' ').sort();
console.log('The sorted words are:');
for (const element of words) {
  console.log(element);
}
}
sortalp('hello bob');