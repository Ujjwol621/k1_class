// Data storing in JavaScript can be done using various data structures, including:
// array
// string
// object
// array of objects
// JSON

// Array: An array is a collection of elements that can be of any data type.
// It is ordered and indexed, allowing you to access elements using their position in the array.
// Example of an array:
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(fruits[0]);
// console.log(fruits.length)

//last-index = 2
// length = index + 1
// index = length - 1

// for(let i =0; i<fruits.length; i++){ // ascending order
//     console.log(fruits[i]);
// }

// for(let i = fruits.length - 1; i >= 0; i--){ // descending order
//     console.log(fruits[i]);
// }

// Print the sum of all elements in the array.
// let sum =0
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log("Sum of all elements: " + sum)

// Print even numbers from the array and count the total number of even numbers.
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     count++;
//   }
// }
// console.log("Total number of even numbers: " + count);


//Print prime numbers from the array and count the total number of prime numbers.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let countPrime = 0;
// for (let i = 0; i < arr.length; i++) {
//   let isPrime = true;

//   if (arr[i] < 2) {
//     isPrime = false;
//   }
//   for (let j = 2; j < arr[i]; j++) {
//     if (arr[i] % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(arr[i]);
//     countPrime++;
//   }
// }
// console.log("Total number of prime numbers: " + countPrime);
