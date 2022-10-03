//Remove the duplicates items in array
function getUnique(arr){
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
getUnique(array);
//2nd method
function getUnique2(arr){
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }}
    console.log(uniqueArr);
}
getUnique2( [10, 20, 30, 20, 30]);
