console.log("Hello, World!");

//Operators in JavaScript
//Arithmetic Operators
//Assignment Operators
//Comparison Operators
//Logical Operators
//Bitwise Operators
//Ternary Operator
//Type Operators

//Arithmetic Operators
// +, -, *, **, /, %, ++, --
// console.log(5 + 3); // 8
// console.log(5 - 3);
// console.log(5 * 3);
// console.log(5 ** 3);
// console.log(6 / 3);
// console.log(6 % 3);

// let x = 5;
// console.log(x++);// post-increment: returns 5, then x becomes 6 in the next line
// console.log(x);// 6

// let y = 5;
// console.log(++y);// pre-increment: y becomes 6, then returns 6
// console.log(y);// 6

// let a= 10;
// console.log(a--); // post-decrement: returns 10, then a becomes 9
// console.log(a); // 9

// let b = 10;
// console.log(--b); // pre-decrement: b becomes 9, then returns 9
// console.log(b); // 9

//Assignment Operators
// =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x += 3; // x = x + 3
// console.log(x); // 8

// let y = 10;
// y -= 3; // y = y - 3
// console.log(y); // 7

// let z = 5;
// z *= 3; // z = z * 3
// console.log(z); // 15

// let w = 5;
// w /= 3; // w = w / 3
// console.log(w); // 1.6666666666666667

// let a = 10;
// a %= 3; // a = a % 3
// console.log(a); // 1

// let b = 2;
// b **= 3; // b = b ** 3
// console.log(b); // 8

//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

// console.log(5 == '5'); // true (loose equality, type coercion(doesnot care about types))
// console.log(5 === '5'); // false (strict equality, no type coercion(also checks types))
// console.log(5 != '5'); // false (loose inequality, type coercion)
// console.log(5 !== '5'); // true (strict inequality, no type coercion)

// let x= 5, y = 10;
// console.log(x > y); // false 
// console.log(x < y); // true
// console.log(x >= y); // false // x is greater than y or x is equal to y
// console.log(x <= y); // true
// console.log(x == y); // false

//Logical Operators
// &&, ||, !

// let a = 10, b = 20;
// console.log(a > 5 && b > 15); // true (both conditions are true)
// console.log(a > 15 || b > 15); // true (one of the conditions is true)
// console.log(!(a > 5)); // false (negation of true is false)

//Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse

// true? console.log("This is true") : console.log("This is false"); // This is true

// false? console.log("This is true") : console.log("This is false"); // This is false

// 9%2==0? console.log("Even") : console.log("Odd"); // Odd

// let age = 18;
// let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote); // Yes, you can vote.


//Brainstorming 
// console.log(true+5); // 6
// console.log(false+5); // 5
// console.log(true+true); // 2
// console.log(false+false); // 0
// console.log(true+false); // 1

// console.log("5" + 5); // "55" (string concatenation)
// console.log("5" - 5); // 0 (string is coerced to number)
// console.log("5" * 5); // 25 (string is coerced to number)
// console.log("5" / 5); // 1 (string is coerced to number)
// console.log("5" % 2); // 1 (string is coerced to number)

// //Type coercion in JavaScript

// //Math Mode: true and false are treated as 1 and 0 respectively when used with arithmetic operators.
// //String Concatenation: When a string is involved in an operation, all other operands are converted to strings and concatenated.

// //The Golden Rule: Once you hit a string, the "Math Mode" is broken for the rest of that specific line. 
// // Everything else just gets "glued" to the end of the text.

// console.log(true+false+"HI"+5) //1HI5
// console.log(5+true+"HI"+false) //6HIfalse
// console.log(true+false+"hi"+5+true) //1hi5true

// console.log(5+true) //6
// console.log(true+5) //6
// console.log("Hello"+true+4+1) //Hello141
// console.log(true+"Hello"+10) //1Hello10
// console.log(5+1+true+"Hello"+10) //7Hello10



