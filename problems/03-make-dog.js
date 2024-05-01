class Dog {
  constructor(name) {
    this.name = name; // 1st run = Jet
  }
  static makeJet(name) {
    // Makes new name instance
    const jet = new Dog("Jet");
    // Merges original and new object together (Modifies both objects)
    // Object.assign(this.name);
    //returning new instance of name
    return jet;
  }

  changeName(newName) {
    this.name = newName; // assigns new value to predetermined variable
  }

  speak(word) {
    return `${this.name} says ${word}`;
  }
}

let dog1 = Dog.makeJet(); // returns an object

console.log(dog1.name); // Jet
console.log(dog1.speak("hello")); // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name); // Freyja
console.log(dog1.speak("hello")); // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name); // Jet

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}
