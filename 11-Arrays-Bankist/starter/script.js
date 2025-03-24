'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent=0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//computing user names
//console.log(containerMovements.innerHTML);
/*
const user = 'Steven Thomas Williams'; //stw
const username = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');

console.log(username);*/

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

const calDisplaybalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calDisplaybalance(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);
console.log([...arr]);

//SPLICE
//console.log(arr.splice(2));
//console.log(arr.splice(2, 4));
//console.log(arr);
//console.log(arr.splice(-2));
//console.log(arr.splice(-1));
//console.log(arr.splice(1, -2));
//console.log(arr.splice());

//reverse
console.log([...arr]);
console.log(arr);
//console.log(arr.reverse());
console.log(arr);

//concat method
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2);
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log([letters.join('-')]);

//new at method
const arr1 = [23, 11, 64];
console.log(arr1[0]);
console.log(arr1.at(0));

console.log(arr1[arr1.length - 1]);
console.log(arr1.slice(-1)[0]);
console.log(arr1.at(-1));

console.log('gevverson'.at(0));

//looping arrays for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`movement${i + 1}:you withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`MOVEMENT${i + 1}: YOU DEPOSITED ${movement}`);
  } else {
    console.log(`MOVEMENT${i + 1}:YOU WITHDREW ${Math.abs(movement)}`);
  }
});

//forEach with maps and sets
//map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//set
const currenciesnoma = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesnoma);
currenciesnoma.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//PROJECT BANKIST APP
//CODING CHALLENGE #1
/*

const checkdogs = function (dogsjulia, dogskate) {
  const dogsjuliacorected = dogsjulia.slice();
  dogsjuliacorected.splice(0, 1);
  dogsjuliacorected.splice(-2);
  console.log(dogsjuliacorected);

  //dogsjulia.slice(1, 3);

  const dogs = dogsjuliacorected.concat(dogskate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`dog number${i + 1} is an adult,and is ${dog} years old`);
    } else {
      console.log(`dog number${i + 1} is still a puppy`);
    }
  });
};
//checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkdogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);*/
//data transformations map,filter and reduce
//map

const eurtousd = 1.1;

//const movementsUSD = movements.map(function (mov) {
//return mov * eurtousd;
//});

const movementsUSD = movements.map(mov => mov * eurtousd);

console.log(movements);
console.log(movementsUSD);

const movementsusdfor = [];
for (const mov of movements) movementsusdfor.push(mov * eurtousd);
console.log(movementsusdfor);

/*const movementsdescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `movement${i + 1}: you deposited ${mov}`;
  } else {
    return `movement${i + 1}:you withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementsdescription);*/

const movementsdescription = movements.map(
  (mov, i, arr) =>
    `movements${i + 1}:${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsdescription);
//filter method
const deposits = movements.filter(function (mov, i, array) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//reduce method
console.log(movements);
//accumulator->snowball
//const balance = movements.reduce(function (acc, cur, i, array) {
//console.log(`Iteration ${i}:${acc}`);
// return acc + cur;
//}, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
