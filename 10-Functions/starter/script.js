'use strict';
/*
const bookings = [];
const createbooking = function (
  flightnum,
  numpassengers = 1,
  price = 199 * numpassengers
) {
  //ES5 way
  //numpassengers=numpassengers||1;
  //price=price||199

  const booking = {
    flightnum,
    numpassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createbooking('LH123');
createbooking('LH123', 2, 800);
createbooking('LH123', 2);
createbooking('LH123', 5);
createbooking('LH123', undefined, 1000);
*/
const flight = 'LH234';
const Gevverson = {
  name: 'Gevverson Kings',
  passport: 12345678,
};
const checkin = function (flightnum, passenger) {
  flightnum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 12345678) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};
//checkin(flight, Gevverson);
//console.log(flight);
//console.log(Gevverson);

const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000000000);
};
newpassport(Gevverson);
checkin(flight, Gevverson);
const oneword = function (str) {
  return str.replace(/  /g, '').toLowerCase();
};
const upperfirstword = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
};
//higher order function
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};
transformer('javascript is the best!', upperfirstword);
transformer('javascript is the best!', oneword);

const high5 = function () {
  console.log('....chamgei');
};
document.body.addEventListener('click', high5);
