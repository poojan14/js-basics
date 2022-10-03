//binary search

const binarySearch = (arr, value, low = 0, high = arr.length - 1) => {

    //Search if the array exists
    if(low <= high){
        //Get the mid
        const mid = Math.ceil((low + high) / 2);
        
        //If element found
        //Return its index
        if(value === arr[mid]){
          return mid;
        }
        
        //If value is less 
        //Then search in the lower range
        if(value < arr[mid]){
          return binarySearch(arr, value, low, mid - 1);
        }else{
          //Else search in greater range
          return binarySearch(arr, value, mid + 1, high);
        }
    }
    
    //If not found then return -1
    return -1;
  }
const arr = [1, 6,7,20, 33, 47, 52,100];
console.log(binarySearch(arr, 52));
console.log(binarySearch(arr, 11));