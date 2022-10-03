//count vowels in string:

function countV(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
console.log(countV('Ahelloi'));