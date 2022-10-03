//Write a JavaScript function to get nth largest element from an unsorted array
function nthlargest(arra,highest){
    let x,y,z,temp=0;
    const tnum = arra.length;
    let flag = false;
    let result = false;
    while(x < tnum){
        y = x + 1; 
        if(y < tnum){
            for(z = y; z < tnum; z++){       
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){               
                result = true;
            }	
        }
        if(result){
            break;
        }
    }
   return (arra[(highest - 1)]);
}
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
