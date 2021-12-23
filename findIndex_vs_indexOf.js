// Create an array of objects with properties name and age
// Then, find the index of the object with the name "John"
const people = [
    { name: "John", age: 20 },
    { name: "Jane", age: 21 },
];

// findIndex() allows to pass a callback, so you can implement the equality check
// in your own way to find the index of the object with the name "John"
const findIndex = people.findIndex(person => person.name === "John");
console.log(`findIndex() returns ${findIndex}`);

// indexOf uses strict equality check which doesn't work with an array of objects
const indexOf = people.indexOf({ name: "John" });
console.log(`indexOf() returns ${indexOf}`);

// indexOf can be used on a string or an array of strings/numbers.
const indexOfString = "Hello World".indexOf("World");
const indexOfStrings = ["John", "Jane"].indexOf("John");
const indexOfNumbers = [1, 2, 3, 4, 5].indexOf(5);
console.log(`indexOfString returns ${indexOfString}`);
console.log(`indexOfStrings() returns ${indexOfStrings}`);
console.log(`indexOfNumbers() returns ${indexOfNumbers}`);
