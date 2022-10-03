//Compare elements of 2 arrays
function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    } 
    else { 
        let result = false;
        for(let i=0; i<arr1.length; i++) {
            if(arr1[i] != arr2[i]) {
                return false;
            }
            else {
                result = true;
            }
        }
        return result;
        }}

result = compareArrays([5,7], [5]);

if(result) {
    console.log('The arrays have the same elements.');
}
else {
    console.log('The arrays have different elements.');
}