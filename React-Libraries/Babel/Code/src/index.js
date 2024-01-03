import https from "https";
// ES6 Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // ES6 Method Definition
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Inheritance using the 'extends' keyword
class Dog extends Animal {
  // Constructor in the derived class
  constructor(name, breed) {
    // Call the constructor of the base class using 'super'
    super(name);
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    console.log(`${this.name} barks loudly.`);
  }

  // Static method in the derived class
  static getInfo() {
    console.log("Dogs are loyal companions.");
  }
}

// Creating instances of the classes
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Using class methods
genericAnimal.speak(); // Output: Generic Animal makes a sound.
myDog.speak(); // Output: Buddy barks loudly.

// Calling the static method
Dog.getInfo(); // Output: Dogs are loyal companions.
