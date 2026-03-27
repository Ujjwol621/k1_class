// console.log("Hello, World!");
// alert("Welcome to JavaScript!");
// document.writeln("This is a simple JavaScript code.");
// fullName= prompt("Please enter your name:")
console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// console.log("Hello,! Welcome to JavaScript programming.")
// document.writeln("Hello, " + fullName + "! Welcome to JavaScript programming.")

// datatype in js
// 2 types 
// 1. primitive data type
// 2. non-primitive data type

// primitive data type
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. BigInt
// 7. Symbol

// non-primitive data type
// 1. object
// 2. array
// 3. function
// 4. date
// 5. RegExp etc.

// 1. number 
// 

// isadmin=true
// console.log(isadmin)
// console.log(typeof isadmin)

// let y=null
// console.log(y)
// console.log(typeof y)

// let x;
// console.log(x)
// console.log(typeof x)

// let number= 11223586308510851082653081263508n //adding n at the end of the number to make it a BigInt
// let number= BigInt(12351613473725756143513451235) //you can also use the bigint() function
// console.log(number)
// console.log(typeof number)

// let id1="ram"
// let id2="ram"

// console.log(id1==id2)

// let id1=Symbol("ram")
// let id2=Symbol("ram")

// console.log(id1==id2)

// 2 non-primitive data type
// 1. array
// var arr=[1,2,3,4,5,"Ujjwol", 1,2,1.22, true]
// console.log(arr)
// console.log(typeof arr)

//2 object
// let user={
//     name:"Ujjwol",
//     age:23,
//     address: "BKT"
// }
// console.log(user)
// console.log(typeof user)

//3 function
// block of code that performs a specific task

// function function_name(parameters){
//     //logic
// }

// function add(){
//     console.log(2+4)
// }
// add() //function call

// function add(a,b){
//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }
// add(5,10) //function call with arguments
// console.log(typeof add)

// const today= new Date()
// console.log(today.toLocaleString())
// console.log(typeof today)

//rules for variables in js
// 1. variable name must start with a letter, underscore or dollar sign
// 2. variable name cannot start with a number
// 3. variable name cannot contain spaces
// 4. variable name cannot be a reserved keyword
// 5. variable name is case sensitive
// 6. Conventionally, camelCase is used for variable names in JavaScript eg. firstName, lastName, etc.


// let, var, const //these are used to declare variables in JavaScript
// var is function scoped and can be re-declared and updated
// let is block scoped and can be updated but cannot be re-declared
// const is block scoped and cannot be updated or re-declared

//global scope and block scope

//var
// var x= 10
// x= "Hello, JavaScript!" // Update allowed
// var x= 20 // Re-declaration allowed
// console.log(x)

// {
//     var x= 10 //global scope variable
//     console.log(x) // Output: 10
// }
// console.log(x) // Output: 10 (var is function scoped, so it is accessible outside the block)

//hoisting
// console.log(a) // Output: undefined (var is hoisted but not initialized)
// var a= 5 // Output: 5 (after initialization)
// it is important to note that only 
// the declaration of the variable is hoisted, (hoisted means that the variable is moved to the top of its scope)
// not the initialization. 
// So, if you try to access the variable before it is initialized, you will get undefined.

// const PI=3.14
// // PI=3.14159 // This will throw an error because you cannot reassign a value to a constant variable
// console.log(PI)
//Update and redeclaration of const is not allowed.

// {
//     const a=10
// }
// console.log(a) // This will throw an error because a is block scoped and cannot be accessed outside the block

// console.log(a)
// const a=10
// This will throw an error because const is not hoisted.
// You cannot access a constant variable before it is declared.  

//let
// let y= 20
// y= "Hello, JavaScript!" // Update allowed
// let y= 30 // This will throw an error because you cannot re-declare a variable declared with let
// console.log(y)

// {
//     let a=10
// }
// // console.log(a) // This will throw an error because a is block scoped and cannot be accessed outside the block

// console.log(a) // This will throw an error because let is not hoisted.
// You cannot access a variable declared with let before it is declared.