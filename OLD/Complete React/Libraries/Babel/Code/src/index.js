// 1. Let and Const
let greeting = "Hello";
const name = "Boss";

// 2. Arrow Functions
const greet = (message, person) => {
  return `${message}, ${person}!`;
};

// 3. Template Literals
const fullGreeting = `${greeting}, ${name}!`;

// 4. Destructuring Assignment
const person = {
  firstName: "John",
  lastName: "Doe",
};

const { firstName, lastName } = person;

// 5. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// 6. Modules
// Assume this is in a separate file
// Exporting:
// export const myVariable = "This is a variable.";

// Importing:
// import { myVariable } from './path/to/module';

// 7. Promises
const myPromise = new Promise((resolve, reject) => {
  // Simulate asynchronous operation
  setTimeout(() => {
    resolve("Operation successful!");
  }, 2000);
});

myPromise.then((result) => {
  console.log(result);
});

// 8. Default Parameters
const greetPerson = (person = "Guest") => {
  console.log(`Hello, ${person}!`);
};

// Usage
greetPerson(); // Output: Hello, Guest!
greetPerson("Alice"); // Output: Hello, Alice!
