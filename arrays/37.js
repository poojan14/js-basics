//Insert item in an array 
function insertElement(index,element) {
    let array = [1, 2, 3, 4, 5];
    array.splice(index, 0, element);
    console.log(array);
}
insertElement(4,100);