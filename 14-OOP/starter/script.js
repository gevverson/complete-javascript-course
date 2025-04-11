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
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }

  calcage() {
    console.log(new Date().getFullYear() - this.birthyear);
  }

  greet() {
    console.log(`Hey ${this.fullname}`); // Changed to use fullname instead of firstname
  }

  get age() {
    return 2025 - this.birthyear;
  }

  set fullname(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name`);
  }

  get fullname() {
    return this._fullname;
  }

  static hey() {
    console.log('Hey there!');
  }
}

const cheru = new personcl('cheru kings', 2000);
console.log(cheru);
cheru.calcage();

console.log(cheru.__proto__ === personcl.prototype);

// Remove this duplicate greet method since it's already defined in the class
// personcl.prototype.greet = function () {
//   console.log(`hey ${this.firstname}`);
// };

cheru.greet(); // Will now correctly output "Hey cheru kings"
personcl.hey(); // Will output "Hey there!"

const personproto = {
  calcage() {
    console.log(2023 - this.birthyear);
  },
};
const steven = Object.create(personproto);
console.log(steven);
steven.name = 'steven';
steven.birthyear = 2000;
steven.calcage();
console.log(steven.__proto__);
console.log(steven.__proto__ === personproto);
console.log(steven.__proto__.__proto__);
console.log(steven.__proto__.__proto__ === Object.prototype);
console.log(steven.__proto__.__proto__.__proto__);
console.log(steven.__proto__.__proto__.__proto__ === null);
//console.log(steven.__proto__.__proto__.__proto__.__proto__);
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === undefined);
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === null);
//console.log(steven.__proto__.__proto__.__proto__ === Function.prototype);
//console.log(
//steven.__proto__.__proto__.__proto__.__proto__ === Function.prototype
//);
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === Array.prototype);
//console.log(
// steven.__proto__.__proto__.__proto__.__proto__ === String.prototype
//);
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === Number.prototype
  ();
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === Boolean.prototype
  ();
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === Date.prototype);
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === RegExp.prototype
  ();
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === Error.prototype);
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === Map.prototype);
//console.log(steven.__proto__.__proto__.__proto__.__proto__ === Set.prototype);
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === WeakMap.prototype
  ();
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === WeakSet.prototype
  ();
console
  .log
  //steven.__proto__.__proto__.__proto__.__proto__ === Symbol.prototype
  ();
// coding challlenge2

class carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new carcl('ford', 120);
const tesla = new carcl('tesla', 95);
console.log(ford.speedUS);
console.log(tesla.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.accelerate();

const person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};
person.prototype.calcage = function () {
  console.log(2023 - this.birthyear);
};
const student = function (firstname, birthyear, course) {
  this.firstname = firstname;
  this.birthyear = birthyear;
  this.course = course;
  person.call(this, firstname, birthyear);
  this.course = course;
};
//linking prototypes
student.prototype = Object.create(person.prototype);

student.prototype.introduce = function () {
  console.log(`my name is ${this.firstname} and i study ${this.course}`);
};

const mike = new student('mike', 2020, 'computer science');
console.log(mike);
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__ === student.prototype);
console.log(mike.__proto__.__proto__);
console.log(student.prototype.constructor);
console.log(mike instanceof student);
console.log(mike instanceof person);
console.log(mike instanceof Object);
console.log(mike instanceof Array);
console.log(mike instanceof Function);
console.log(mike instanceof String);
console.log(mike instanceof Number);
console.log(mike instanceof Boolean);
console.log(mike instanceof Date);
console.log(mike instanceof RegExp);
console.log(mike instanceof Error);
console.log(mike instanceof Map);
console.log(mike instanceof Set);
console.log(mike instanceof WeakMap);
console.log(mike instanceof WeakSet);
console.log(mike instanceof Symbol);
console.log(mike instanceof BigInt);
console.log(mike instanceof ArrayBuffer);
console.log(mike instanceof DataView);
console.log(mike instanceof Float32Array);
console.log(mike instanceof Float64Array);

//coding challenge number 3
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  car.call(this, make, speed);
  this.charge = charge;
};
//linking prototypes
EV.prototype = Object.create(car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`charged to ${this.charge}`);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};
EV.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new car('bmw', 120);
const teslar = new EV('teslar', 120, 23);
teslar.chargeBattery(90);
console.log(teslar);
teslar.accelerate();
teslar.brake();
teslar.accelerate();
teslar.accelerate();

class studentcl extends personcl {
  constructor(fullname, birthyear, course) {
    super(fullname, birthyear);
    this.course = course;
  }
  introduce() {
    console.log(`my name is ${this.fullname} and i study ${this.course}`);
  }
  calcage() {
    console.log(
      `i am ${2023 - this.birthyear} years old and i study ${this.course}`
    );
  }
  calcage() {
    console.log(`I  am ${2023 - this.birthyear} years old ,but as a  student 
      i feel more like ${2023 - this.birthyear + 10}`);
  }
}
const martha = new studentcl('martha jones', 2000, 'computer science');
martha.introduce();
martha.calcage();
console.log(martha);

const personProto2 = {
  calcage() {
    console.log(2023 - this.birthyear);
  },
  init(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  },
};
const stephen = Object.create(personproto);
console.log(stephen);

const studentProto = Object.create(personProto2);
studentProto.init = function (firstname, birthyear, course) {
  personProto2.init.call(this, firstname, birthyear);
  this.course = course;
};
const jay = Object.create(studentProto);
jay.init('jay', 2000, 'computer science');
console.log(jay);
jay.calcage();

//inheritance between classes
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Properties with _ are considered "private" by convention
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    if (val > 0) {
      this._movements.push(val);
      return this;
    }
  }

  withdraw(val) {
    this._movements.push(-val);
    return this;
  }

  _approveLoan(val) {
    // Internal method (private)
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved for ${this.owner}`);
      return true;
    }
    return false;
  }
}

class savingsAccount extends Account {
  constructor(owner, currency, pin, interestRate) {
    super(owner, currency, pin);
    this.interestRate = interestRate;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
    }
  }
}

const acc1 = new Account('cheru', 'USD', 1111);
acc1.deposit(200);
acc1.withdraw(100);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1._pin);
console.log(acc1.requestLoan(1000));
console.log(acc1.deposit(200));
console.log(acc1.withdraw(100));
console.log(acc1.getMovements());
const acc2 = new Account('josh', 'USD', 2222);
const acc3 = new Account('matilda', 'USD', 3333);
const acc4 = new Account('jack', 'USD', 4444);
const acc5 = new Account('martha', 'USD', 5555);
const acc6 = new Account('steven', 'USD', 6666);
const acc7 = new Account('james', 'USD', 7777);
const acc8 = new Account('john', 'USD', 8888);
const acc9 = new Account('jane', 'USD', 9999);
const acc10 = new Account('jerry', 'USD', 1010);
const acc11 = new Account('joseph', 'USD', 1112);
const acc12 = new Account('jose', 'USD', 1213);
