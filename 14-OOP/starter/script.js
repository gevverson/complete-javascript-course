'use strict';
//prototypal inheritance is a prototype that contains methods that are
// accessible to all objects linked to that prototype
//OOP is programmming paradigm that organizes software design around
//  data, or objects, rather than functions and logic,focusing on
//objects that have unique attributes and behaviors
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never use this
  //this.calcage= function () {
  //console.log(2023 - this.birthYear);

  //}
};
const Cheru = new Person('Cheru', 2000);
console.log(Cheru);
//1.New {} is created
/*
1. New {} is created
2. Function is called, this = {}
3. {} is linked to prototype
4. Function automatically returns {}
5. The new object is returned

const josh = new Person('Josh', 2000);
console.log(josh);

console.log(cheru instanceof Person);
console.log(josh instanceof Person);
console.log(cheru instanceof Object);
console.log(josh instanceof Object);
console.log(cheru instanceof Array);
console.log(josh instanceof Array);
console.log(cheru instanceof String);
console.log(josh instanceof String);
console.log(cheru instanceof Number);
console.log(cheru instanceof Boolean);
console.log(cheru instanceof Date);
console.log(cheru instanceof Function);
console.log(cheru instanceof Error);
console.log(cheru instanceof RegExp);
console.log(cheru instanceof Map);
console.log(cheru instanceof Set);
console.log(cheru instanceof WeakMap);
console.log(cheru instanceof WeakSet);
console.log(cheru instanceof Symbol);
console.log(cheru instanceof BigInt);
console.log(cheru instanceof ArrayBuffer);
console.log(cheru instanceof DataView);
console.log(cheru instanceof Float32Array);
console.log(cheru instanceof Float64Array);
console.log(cheru instanceof Int8Array);
console.log(cheru instanceof Int16Array);
console.log(cheru instanceof Int32Array);
console.log(cheru instanceof Uint8Array);
console.log(cheru instanceof Uint8ClampedArray);
console.log(cheru instanceof Uint16Array);
console.log(cheru instanceof Uint32Array);
const matilda = new Person('Matilda', 2000);
console.log(matilda);
const jack = new Person('Jack', 2000);
console.log(jack);

//prototypes
//every function in js has a prototype property
//all objects have a prototype property
Person.prototype.calcage = function () {
  console.log(2023 - this.birthYear);
};
//prototypes
console.log(Person.prototype);

Person.prototype.calcage = function () {
  console.log(2050 - this.birthYear);
};
Cheru.calcage();
console.log(Cheru.__proto__);
console.log(Cheru.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Cheru));
Person.prototype.species = 'homo sapiens';
console.log(Cheru.species, matilda.species);
console.log(Cheru.hasOwnProperty('firstName'));
console.log(Cheru.hasOwnProperty('species'));

console.log(Cheru.__proto__);
//object.prototype(top of prototype chain)
console.log(Cheru.__proto__.__proto__);
console.log(Cheru.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4.5, 3, 3, 5, 5, 8, 9, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//coding challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
*/

class personcl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //methods will be added to the .prototype property
  calcage() {
    console.log(2025 - this.birthyear);
  }
}

const cheru = new personcl('cheru', 2000);
console.log(cheru);
cheru.calcage();

console.log(cheru.__proto__ === personcl.prototype);
/*console.log(personcl.prototype.isPrototypeOf(cheru));
console.log(cheru.__proto__.__proto__);
console.log(cheru.__proto__.__proto__.__proto__);
console.dir(personcl.prototype.constructor);
console.log(cheru.__proto__ === personcl.prototype);
console.log(cheru.__proto__.__proto__ === Object.prototype);
console.log(cheru.__proto__.__proto__.__proto__ === Function.prototype);
console.log(cheru.__proto__.__proto__.__proto__ === Object.prototype);
*/
personcl.prototype.greet = function () {
  console.log(`hey ${this.firstname}`);
};
cheru.greet();

//1.classes are not hoisted
//2.classes are first-class citizens
//3.classes are executed in strict mode
//4.classes can have static methods
//5.classes can have static properties
//6.classes can have getters and setters
//7.classes can have private fields
//8.classes can have private methods
//9.classes can have public fields
//10.classes can have public methods
//11.classes can have public static methods
//12.classes can have public static properties
//13.classes can have public static getters
//14.classes can have public static setters
//15.classes can have public static private fields
//16.classes can have public static private methods
//17.classes can have public static private getters
//18.classes can have public static private setters
//19.classes can have public static private properties
