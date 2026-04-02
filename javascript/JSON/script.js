// JSON (JavaScript Object Notation)
// JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications.
// Example of a JSON object
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Converting JavaScript object to JSON string
const person = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
console.log("JavaScript Object:", person);
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Converting JSON string to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// why use JSON?
// 1. Data Interchange: JSON is a common format for exchanging data between a server and a client in web applications.
// 2. Readability: JSON is easy to read and write for humans, making it a popular choice for configuration files and data storage.
// 3. Language Independence: JSON is language-independent, meaning it can be used with any programming language that supports text parsing.
// 4. Lightweight: JSON is a lightweight format, which makes it efficient for transmitting data over the network.