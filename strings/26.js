// program to check if a string starts with and ends with  specified character

function checkString(str) {
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}
checkString('SahilG');
//2nd method

function specified(str){
if (str.charAt(0) == 'a' && str.charAt(str.length-1) == 'g') {
    console.log(`${str} starts with a and ends with g`);
}
else{
    console.log(`${str} does not starts with a and ends with g`);
}
}
specified('age');
specified('ageg');