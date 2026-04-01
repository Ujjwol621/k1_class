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

// methods in array
// // 1. push() - adds an element to the end of the array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.push(6));
// console.log(arr);

// // 2. pop() - removes the last element from the array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.pop());
// console.log(arr);

// // 3. shift() - removes the first element from the array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.shift());
// console.log(arr);

// // 4. unshift() - adds an element to the beginning of the array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.unshift(0));
// console.log(arr);

// // 5. delete - removes an element from the array at a specific index
// let arr = [1, 2, 3, 4, 5];
// delete arr[2];
// // Note: This will leave an empty slot in the array, and the length of the array will not change.
// // we donot prefer to use delete method
// console.log(arr);

// // 6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice[start-index, end-index]); // start-index is inclusive and end-index is exclusive

// console.log(arr.slice(1, 4)); // [2, 3, 4]
// console.log(arr.slice(2));

// // 7. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(start-index, delete-count, item1, item2, ...));
// start-index: The index at which to start changing the array.
// delete-count: The number of elements to remove from the array.
// item1, item2, ...: The elements to add to the array (optional).

// console.log(arr.splice(2, 1)); // removes 1 element at index 2
// console.log(arr); // [1, 2, 4, 5]

// console.log(arr.splice(2, 0, "ram", "shyam")); // adds 3 at index 2 without removing any element
// console.log(arr); // [1, 2, "ram", "shyam", 4, 5]

// 8. concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let mergedArray = arr1.concat(arr2);
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// 9. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(4)); // 4 is at index 4
// console.log(arr.indexOf(10)); // 10 is not present in the array, so it returns -1

// let arr = [1, 2, 3, 4, 5];
// 10. forEach() - executes a provided function once for each array element.
// arr.forEach((items, index) => {
//   console.log(items, index);
// });

// Write a program to calculate the sum of all even numbers in an array and count the total number of even numbers using forEach() method.
// let count=0
// let sum=0
// arr.forEach((items)=>{
//     sum+=items
//     if(items%2==0){
//         count++
//     }
// })
// console.log("Sum of all even numbers: " + sum);
// console.log("Total number of even numbers: " + count);

// 11. filter() - creates a new array with all elements that pass the test implemented by the provided function.
// let arr = [1, 2, 3, 4, 5];
// let evenNumbers = arr.filter((items) => items % 2 === 0); // returns a new array with only even numbers
// console.log(evenNumbers); // [2, 4]

// OR

// let evenNumbers = arr.filter((items) => {
//     return items % 2 === 0; // you have to write return statement when you use curly braces in arrow function
// }); // returns a new array with only even numbers
// console.log(evenNumbers); // [2, 4]

// 12. map() - it is used when we want to create a new array from an existing array by applying a function to each of the elements in the original array.
// let arr = [1, 2, 3, 4, 5];
// let squaredArray = arr.map((items) => items * items); // returns a new array with squared values of the original array
// console.log(squaredArray); // [1, 4, 9, 16, 25]

// 13. reduce() - it is used to reduce an array to a single value by applying a function to each element of the array (from left to right).
// let arr = [1, 2, 3, 4, 5];
// let totalSum = arr.reduce((accumulator, items) => accumulator + items, 0); // returns the sum of all elements in the array
// console.log(totalSum); // 15    

// 14. find() - it is used to find the first element in the array that satisfies the provided testing function. 
// It returns the value of the first element that satisfies the condition, or undefined if no such element is found.
// let arr = [1, 2, 3, 4, 5];
// let foundElement = arr.find((items) => items === 5); // returns the first element that is equal to 5
// console.log(foundElement); // 5

// 15. includes() - it is used to determine whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3)); // true
// console.log(arr.includes(10)); // false

// 16. sort() - it is used to sort the elements of an array in place and returns the sorted array.
// let arr = [5, 2, 9, 1, 5, 6];
// console.log(arr.sort()); // sorts the array in ascending order by default
// console.log(arr.sort((a, b) => a - b)); // sorts the array in ascending order
// console.log(arr.sort((a, b) => b - a)); // sorts the array in descending order

// write a program that will find the sum of all even numbers in an array using filter() and reduce() methods.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNum = arr.filter((items) =>{
//      return items % 2 === 0
// });
// console.log(evenNum);
// let sumEven = evenNum.reduce((accumulator, items) => accumulator + items, 0);
// console.log(sumEven);

// or shorter form
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumEven = arr.filter((items) => items % 2 === 0).reduce((accumulator, items) => accumulator + items, 0);
// console.log(sumEven);