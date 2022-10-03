//Merge 2 arrays remove duplicate item
function getUniqueAfterMerge(arr1, arr2){
    let arr = [...arr1, ...arr2];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
getUniqueAfterMerge([1,2,3],[2,3,5]);