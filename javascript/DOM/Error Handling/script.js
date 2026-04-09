// Erro Handling in JavaScript
// async, await, promises, try, catch, throw

// try-catch block is used to handle errors in JavaScript.
//  It allows you to write code that may throw an error and 
// catch that error to prevent the program from crashing.

// Example of try-catch block
// try {
//     // Code that may throw an error(risky code)
// }
// catch (error) {
//     console.log(error); // Handle the error
// }

// Example of try-catch block
// try {
//     console.log(x)
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log("This will still run even if there is an error above.");

// Types of error
// 1. SyntaxError: This error occurs when there is a syntax error in the code.
// 2. ReferenceError: This error occurs when you try to access a variable that is not defined.
// 3. TypeError: This error occurs when you try to perform an operation on a value of the wrong type.
// 4. RangeError: This error occurs when you try to use a number that is out of range.
// 5. EvalError: This error occurs when you use the eval() function in an incorrect way.
// 6. URIError: This error occurs when you use the encodeURI() or decodeURI() functions in an incorrect way.

// SyntaxError example
// console.log("hello world)

// ReferenceError example
// console.log(x);

// TypeError example
// let num = 5;
// num.toUpperCase();

// try catch finally
// try{
//     console.log(x);
// }
// catch(error){
//     console.log("An error occurred: " + error.message);
// }
// finally{
//     console.log("This will always run regardless of whether an error occurred or not.");
// }