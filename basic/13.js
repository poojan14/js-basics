//pass parameter to set timeout:
// program to pass parameter to a setTimeout() function

function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');
