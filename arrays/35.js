//Print the matched elements of an array

function FindDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(FindDuplicates([10, 20,  30, 40, 30, 400]));

//we compare the index of all the items of an array
// with the index of the first time that number occurs. 
//If they don’t match, that implies that the element 
//is a duplicate. filter return sepearate array.