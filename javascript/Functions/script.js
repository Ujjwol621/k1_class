//function
// function is a block of code designed to perform a particular task.
// It is executed when "something" invokes it (calls it).

// function function_name() {
//     //logic
// }
// function_name(); // calling the function


// function add(){
//     console.log(5 + 3);
// }
// add(); // calling the function


// function with parameters and return statement
// function add(a, b) {
//     // console.log(a + b);
//     return a + b; // return statement is used to return a value from the function
// }
// let sum=add(5, 3); // calling the function with arguments
// console.log(sum); // printing the returned value


// function with default parameters
// function greet(name = "Guest") {
//     console.log("Hello, " + name + "!");
// }
// greet(); // calling the function with default argument
// greet("Alice"); // calling the function with a specific argument


// function expression
// A function expression is a function that is assigned to a variable.
// It can be anonymous (without a name) or named.
// const greet = function(name) {
//     console.log("Hello, " + name + "!");
// };
// greet("Bob"); // calling the function expression

// write a function that will display the given number is even or odd
// function check(num){
//     if (num % 2 === 0) {
//         console.log(num + " is even");
//     } else {
//         console.log(num + " is odd");
//     }
// }
// check(10); // calling the function with the number to check

// Write a function to count the total even numbers betweeen 1-20
// let count=0
// function countEven(){
//     for(let i=1; i<=20; i++){
//         if(i%2===0){
//             count++;
//         }
//     }
//     console.log("Total even numbers between 1-20: " + count);
// }
// countEven(); // calling the function to count even numbers


// Hoisting of functions
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can call a function before it is defined in the code.
greet("Charlie"); // calling the function before its declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
// In the above code, the function greet is hoisted, so we can call it before its declaration without any error. The output will be "Hello, Charlie!"
//but in other types of functions like function expression and arrow function, hoisting does not work. 
// If we try to call them before their declaration, it will result in an error.


// Types of functions in JavaScript
// 1. Arrow Function
// 2. Function Expression
// 3. Function Declaration
// 4. Anonymous Function
// 5. IIFE (Immediately Invoked Function Expression)

// Arrow Function
// const greet = (name) => {
//     console.log("Hello, " + name + "!");
// }; // for multiple lines of code we need to use curly braces and return statement if we want to return a value
// greet("David"); // calling the arrow function

// const sum1 = a => a; 
// console.log(sum1(5)); // calling the arrow function with single parameter

// const sum = (a, b) => a + b; // implicit return
// console.log(sum(5, 3)); // calling the arrow function to get the sum

