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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0])
      .join('');
  });
};
createUsername(accounts);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const dithdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(deposits);
console.log(dithdrawals);

const totalDeposits = deposits.reduce(function (acc, cur, i, arr) {
  return acc + cur;
});

console.log(totalDeposits);
const dog = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

const str = 'this is mamun';
const dogs = str.split(' ').reduce(function (acc, cur, i, arr) {
  return (acc = acc + ' ' + cur[0].toUpperCase() + cur.slice(1));
}, '');
console.log(dogs);

const cat = 'this is mamun';
console.log([...cat]);


//coding challenge #1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (julia, kate) {
//   const dogsJuliaCorrected = julia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(kate);

//   dogs.forEach(function (mov, i) {
//     if (mov > 2) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${mov} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs(dogsJulia, dogsKate);
// console.log('============new data==========');
// checkDogs(dogsJulia2, dogsKate2);
//calculator
// (function () {
//   let screen = document.querySelector('.w-full');
//   let btn = document.querySelectorAll('.btn');
//   let clear = document.querySelector('.btn-clear');
//   let equal = document.querySelector('.btn-equal');

//   btn.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//       let value = e.target.dataset.num;
//       screen.value += value;
//     });
//   });
//   equal.addEventListener('click', function (e) {
//     if (screen.value === '') {
//       screen.value = '';
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   });
//   clear.addEventListener('click', function (e) {
//     screen.value = '';
//   });
// })();
//
//
//
//
//
// account4.movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You have deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You have withdrew ${Math.abs(mov)}`);
//   }
// });
// console.log('              ====map===');
// account4.movements.map(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You have deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You have withdrew ${Math.abs(mov)}`);
//   }
// });

//small project================xxxxxxxxxxxxxx==============
// const bio = [
//   {
//     name: 'Liton',
//     title: 'Merchandising Supervisor',
//     picture: 'Pic-1.jpeg',
//   },
//   {
//     name: 'Anik',
//     title: 'Assistant Merchandiser',
//     picture: 'Pic-2.jpeg',
//   },
//   {
//     name: 'Shemul Hasan',
//     title: 'Merchandising Supervisor',
//     picture: 'Pic-3.jpeg',
//   },
//   {
//     name: 'Jahid',
//     title: 'Assistant Merchandiser',
//     picture: 'Pic-4.jpeg',
//   },
//   {
//     name: 'Milky',
//     title: 'Assistant Manager',
//     picture: 'Pic-5.jpeg',
//   },
//   {
//     name: 'Yeasin Ali',
//     title: 'Assistant Manager',
//     picture: 'Pic-6.jpeg',
//   },
// ];

// const personName = document.querySelector('.text-xl');
// const personBio = document.querySelector('.text-base');
// const btn = document.querySelector('.bg-blue-500');
// const pictureField = document.querySelector('.w-full');

// let currentIndex = 0;

// personName.textContent = bio[0].name;
// personBio.textContent = bio[0].title;
// pictureField.src = bio[0].picture;

// btn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % bio.length;
//   const currentPerson = bio[currentIndex];
//   pictureField.src = currentPerson.picture;
//   personName.textContent = currentPerson.name;
//   personBio.textContent = currentPerson.title;
// });
//small project...........................

//comments
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach((mov, i, arr) => {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
//   }
// });

///////////////////////////////////////////////
// const slice = [2, 3, 5, 6, 4, 7];
// console.log(slice.slice(2, 4));
// console.log(slice.slice(5));
// console.log(slice.slice(-1));
// console.log(slice.slice(-3));
// console.log(slice.splice(2, 1));
// console.log(slice);

// console.log(slice.join('-'));
// let todoList = [];

// function addTodo(todoItem) {
//   todoList.push(todoItem);
// }

// function deleteTodo(todoItem) {
//   let index = todoList.indexOf(todoItem);
//   todoList.splice(index, 1);
// }

// function displayTodos() {
//   console.log(todoList);
// }

// function toggleCompleted(todoItem) {
//   let index = todoList.indexOf(todoItem);
//   todoList[index].completed = !todoList[index].completed;
// }

// function displayCompleted() {
//   let completedTodos = todoList.filter(todo => todo.completed);
//   console.log(completedTodos);
// }

// function displayIncomplete() {
//   let incompleteTodos = todoList.filter(todo => !todo.completed);
//   console.log(incompleteTodos);
// }

// // Example usage
// addTodo({
//   text: 'Learn JavaScript',
//   completed: false,
// });
// addTodo({
//   text: 'Build a todo app',
//   completed: false,
// });
// toggleCompleted(todoList[0]);
// displayCompleted(); // logs [{ text: "Learn JavaScript", completed: true }]
// displayIncomplete(); // logs [{ text: "Build a todo app", completed: false }]
// console.log(todoList);
// console.dir(todoList);
