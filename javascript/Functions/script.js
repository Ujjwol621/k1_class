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
// greet("Charlie"); // calling the function before its declaration
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
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

// 2 Function Expression or Anonymous Function
// const add = function(){
//     console.log("This is add function")
// }
// add()

// Immediately invoked function expression (IIFE)
// (function(){
//     console.log("This is an immediately invoked function");
// })(); // this function will be executed immediately after its definition

//Nested Function
// A nested function is a function that is defined inside another function.
// function outerFunction() {
//     console.log("This is the outer function");
//     function innerFunction() {
//         console.log("This is the inner function");
//     }
//     innerFunction(); // calling the inner function inside the outer function
// }
// outerFunction(); // calling the outer function which will also call the inner function

// Hidden Function
// A hidden function is a function that is defined inside another function and is not accessible from outside the outer function. It can only be called from within the outer function. 
// function outerFunction() {
//     console.log("This is the outer function");
//     function hiddenFunction() {
//         console.log("This is the hidden function");
//     }
//     hiddenFunction(); // calling the hidden function inside the outer function
// }
// outerFunction(); // calling the outer function which will also call the hidden function
// hiddenFunction(); // this will result in an error because hiddenFunction is not accessible from outside the outer function
// to call it we need to return it from the outer function
// function outerFunction() {
//     console.log("This is the outer function");
//     function hiddenFunction() {
//         console.log("This is the hidden function");
//     }
//     return hiddenFunction;
// }
// const myHiddenFunction = outerFunction(); // calling the outer function and storing the returned hidden function
// myHiddenFunction(); // calling the hidden function


// Callback Function
// A callback function is a function that is passed as an argument 
// to another function and is executed after some operation has been completed.

// let first = () => {
//     console.log("Hi i am first function");
// };
// const outer = () => {
//     console.log("Hi i am outer function");
//     first(); // calling the callback function inside the outer function
// }
// outer();

//modifying it to show the callback function more clearly
// const outer=(fn, a) => {
//     fn(1,2)
// };
// outer((m,n)=>{
//     console.log("I am first", m, n,);
// }, 1000)

// Write a function that takes another function as an argument 
// and calls it with a number to check if it's even or od
// const parent = (fn, number) => {
//     fn(number);
// }
// parent((num) => {
//         if(num % 2 === 0){
//             console.log(num + " is even");
//         } else {
//             console.log(num + " is odd");
//         }
// }, 5);

//Default Parameters
// const add = (a, b = 0, c=1) => a + b + c;
// console.log(add(5, 3, 2)); // it takes the provided values of a, b and c, so the output will be 10
// console.log(add(5, 3)); // it takes default value of c as 1, so the output will be 9
// console.log(add(5)); // it takes default value of b as 0 and c as 1, so the output will be 6


