function changeContext(func, obj) {
  // Your code here
  // const person1 = Person.extractName();
  // call method invokes the function being indirectly called
  // bind method returns the function rather than the functions return value
  /* apply method takes function ex:(Math.max.apply()) and applies that function/method
   to the given parameters
   // First parameter refers to scope
  */
  return func.call(obj);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person("Kristen");
console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
