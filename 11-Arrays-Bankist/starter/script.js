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
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

//computing user names
//console.log(containerMovements.innerHTML);

const user = 'Steven Thomas Williams'; //stw
const username = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');

console.log(username);

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
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calDisplaybalance(currentAccount);
  //display summary
  caldisplaysummary(currentAccount);
};
console.log(accounts);

const calDisplaybalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  //acc.balance = balance;
  labelBalance.textContent = `${acc.balance} EUR`;
};
//calDisplaybalance(account1.movements);

const caldisplaysummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//caldisplaysummary(account1.movements);

//Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 && //receiverAcc
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
    //console.log('transfer valid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  //console.log('delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

/*const movementsUSD = movements.map(mov => mov * eurtousd);

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

//const movementsdescription = movements.map(
//(mov, i, arr) =>
//`movements${i + 1}:${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//);
//console.log(movementsdescription);
//filter method
//const deposits = movements.filter(function (mov, i, array) {
// return mov > 0;
//});
/*console.log(movements);
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

//maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
//CODIMNG CHALLENGE
/*
const calcavaregehumanage = function (ages) {
  const humanages = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanages.filter(age => age >= 18);
  console.log(humanages);
  console.log(adults);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};
const avg1 = calcavaregehumanage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcavaregehumanage([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

//THE MAGIC OF CHAINING METHODS
const EURtousd = 1.1;
console.log(movements);
//PIPELINE
const totaldepositsusd = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurtousd;
  })
  //.map(mov => mov * eurtousd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totaldepositsusd);*/

//CODING CHALLENGE #3
const calcavaregehumanage2 = function (ages) {
  const humanages = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanages.filter(age => age >= 18);

  const avarege = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return avarege;
};
const calcavaregehumanage = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcavaregehumanage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcavaregehumanage([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
//find method
const firstwithdrawal = movements.find(mov => mov <= 0);

console.log(movements);
console.log(firstwithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//some and every
console.log(movements);
//equality
console.log(movements.includes(-130));
///some:condition
const anydeposit = movements.some(mov => mov > 0);
console.log(anydeposit);

//every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
//flat and flatmap
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3.flat());
const arrdeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrdeep.flat(2));

const accountmovements = accounts.map(acc => acc.movements);
console.log(accountmovements);
const allmovements = accountmovements.flat();
console.log(allmovements);
const overallbalance = allmovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallbalance);
//falt
const overallbalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallbalance1);
//flatmap
const overallbalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallbalance2);
const overallbalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallbalance3);

//sorting arrays
