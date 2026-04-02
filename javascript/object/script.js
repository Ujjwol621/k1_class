// Object
// it is a collection of properties and methods
// it is a data structure that can store multiple values in a single variable
// it is a key-value pair

// creating an object
// let object_name {
//     key1: value1,
//     key2: value2,
//     key3: value3
// };

// accessing object properties
// object_name.key1
// object_name["key1"]

// Example
// let user = {
//     name: "ram",
//     age: 30,
//     city: "New York",
//     phone: "1234567890",
//     isAdmin: true,
// };

// accessing object properties
// using dot notation
// console.log(user.name);
// console.log(user.age);
// console.log(user.city);
// console.log(user.phone);
// console.log(user.isAdmin);

// or using bracket notation
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["city"]);
// console.log(user["phone"]);
// console.log(user["isAdmin"]);

// adding or updating new properties to an object
// user.isAdmin = false;
// user.email = "ram@gmail.com";
// console.log(user);

// deleting properties from an object
// delete user.phone;
// delete user.name;
// console.log(user);

// Objects are mutable, which means we can change their properties and values after they have been created.
// Objects donot stores duplicate keys, if we try to add a duplicate key, it will overwrite the existing key and value.

// let user = {
//     name: "ram",
//     age: 30,
//     city: "New York",
//     phone: "1234567890",
//     isAdmin: true,
// };
// user.name = "shyam";
// console.log(user);

// Dynamic key in object
// let key = "name";
// let user = {
//     [key]: "ram"
// };
// console.log(user);

// Objects are reference type, which means when we assign an object to a variable,
// we are assigning a reference to that object in memory. So when we compare two objects,
// we are comparing their references in memory, not their values.
// Therefore, even if two objects have the same properties and values,
// they will be considered different objects in memory
// and will not be equal when compared using the equality operator (== or ===).
// let u1 = {
//     name: "ram",
// }
// let u2 = {
//     name: "ram",
// }
// console.log(u1 == u2); // false, because they are different objects in memory

// Nested objects
// let user = {
//     name: "ram",
//     age: 30,
//     address: {
//         city: "New York",
//         state: "NY",
//         country: "USA"
//     },
//     mark: {
//         nepali: [56, 80, 60]
//     }
// };
// console.log(user.address.city); // New York
// console.log(user.mark.nepali)

// find the average of the marks in nepali
// let totalMarks = 0;
// let marksArray = user.mark.nepali;
// for (let i = 0; i < marksArray.length; i++) {
//     totalMarks += marksArray[i];
// }
// let averageMarks = totalMarks / marksArray.length;
// console.log(averageMarks);

// or using reduce method
// console.log(user.mark.nepali.reduce((total, mark) => total + mark, 0) / user.mark.nepali.length);

// Array of objects
// let products =[
//     {
//         id: 1,
//         title: "Iphone 12",
//         price: 1000,
//     },
//     {
//         id: 2,
//         title: "Iphone 12 pro max",
//         price: 1000,
//     },
//     {
//         id: 3,
//         title: "Iphone 14 pro max",
//         price: 1000,
//     },
//     {
//         id: 4,
//         title: "Iphone 15",
//         price: 1000,
//     },
// ]
// console.log(products[0].title); // Iphone 12
// console.log(products[1].title);

// products.forEach((items) => {
//     console.log("ID: " + items.id);
//     console.log("Title: " + items.title);
//     console.log("Price: " + items.price);
// });

let products = [
  {
    id: 1,
    title: "Iphone 12",
    price: 1000,
  },
  {
    id: 2,
    title: "Iphone 12 pro max",
    price: 1000,
  },
  {
    id: 3,
    title: "Iphone 14 pro max",
    price: 1000,
  },
  {
    id: 4,
    title: "Iphone 15",
    price: 1000,
  },
];
// Q1 - find the total price of all products
// const totalPrice = () => {
//     return products.reduce((total, item) => total + item.price, 0);
// }
// console.log(totalPrice());

// Q2 - find the products with price greater than 1000
// const checkGreaterThan = () => {
//     return products.filter((item) => item.price > 1000);
// }
// console.log(checkGreaterThan());

// Q3 - find the total price of products with odd IDs
// const checkoddid = () => {
//     return products.filter((item) => item.id % 2 !== 0).reduce((total, item) => total + item.price, 0);
// }
// console.log("Total price of products with odd IDs: " + checkoddid());


