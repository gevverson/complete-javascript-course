'use strict ';
/*
scoping;how our programs variables are organized and  accessed
lexical scoping:scoping is controlled by functions and blocks in the program code
scope:space or environment in which certain variable is declared
types of scope
1.global scope=accessed outside function
2.function scope=also called local scope.accessed only inside function
3.block scope=variables accessible only inside block and it applies to let and const variables.
scope of variable:region of code where a certain variable can be accessed,
*/
/*
const firstname = 'givverson';
calcage(2000);
function calcage(birthyear) {
  const age = 2050 - birthyear;
  function printage() {
    const output = `${firstname},you are ${age},born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 2000 && birthyear <= 2010) {
      const str = `oh ,and you are millenial,${firstname}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3));
  }
  printage();
  console.log(firstname);
  return age;
}*/

//THIS KEYWORD
/*
console.log(this);
const calcage = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcage(2000);

const calcagearrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcagearrow(2004);

const givverson = {
  year: 2000,
  calcage: function () {
    console.log(2037 - this.year);
  },
};
givverson.calcage();

const momaaa = {
  year: 2017,
};
momaaa.calcage = givverson.calcage;
momaaa.calcage();

const g = givverson.calcage;
g();

*/
const givverson = {
  firstname: 'givverson',
  year: 2000,
  calcage: function () {
    console.log(2037 - this.year);
  },
  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstname}`);
  },
};
givverson.greet();
//console.log(this.firstname

//arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 23);
var addArrow = (a, b) => a + b;

let lastname = 'williams';
let oldlastname = lastname;
lastname = 'cheru';
console.log(lastname, oldlastname);

const cheru = {
  firstname: 'cheru',
  lastname: 'williams',
  age: 25,
};
const marriedcheru = cheru;
marriedcheru.lastname = 'williams';
console.log('before marriage:', cheru);
console.log('after marriage:', marriedcheru);
