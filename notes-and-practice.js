"use strict";

///////////////////////////////////////////////////
///////////////////////////////////////////////////
// Lecture and Practice
// let isSorted = false;

// btnSort.addEventListener("click", (e) => {
//   e.preventDefault();

//   displayMovements(currentAccount.movements, !isSorted);
//   isSorted = !isSorted;
// });

// labelBalance.addEventListener("click", () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => +(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);

//   // Alternative solution
//   // const movementsUI2 = [...document.querySelectorAll(".movements__value")].map(
//   //   (el) => +(el.textContent.replace("€", ""))
//   // );
//   // console.log(movementsUI2);
// });

// PRACTICE
// Solution #1
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

// Solution #2 using reduce and prefixed ++ operator
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => {
//     return cur >= 1000 ? ++count : count;
//   }, 0);

// console.log(numDeposits1000);

// Using accumlator for sums within an object
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? "deposits" : "withdrawals"] += cur; // More DRY than the line above
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

/////////////////////////
/////////////////////////
// Numbers
// console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 to 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// Conversion
// console.log(Number("23"));
// console.log(+"23");

// Parsing
// Number provides a namespace
// console.log(Number.parseInt("30px", 10));
// console.log(Number.parseInt("e23", 10));

// console.log(Number.parseInt("2.5rem"));
// console.log(Number.parseFloat("2.5rem"));

// Old-school way of calling the global functions
// The following is discouraged in modern javascript
// console.log(parseFloat('2.5rem'));

// Check if value is NaN
// console.log(Number.isNaN(20)); // returns false;
// console.log(Number.isNaN("20")); // returns false;
// console.log(Number.isNaN(+"20X")); // returns true;
// console.log(Number.isNaN(23 / 0)); // returns false because anything that is divided by zero is infinity

// Number.isFinite method is the best method to check if a value is a number
// console.log(Number.isFinite(20)); // returns true
// console.log(Number.isFinite(20.123)); // returns true
// console.log(Number.isFinite("20")); // returns false b/c it is a String type
// console.log(Number.isFinite(+"20X")); // returns false
// console.log(Number.isFinite(23 / 0)); // returns false b/c it is Infinity

// Check if value is an integer
// console.log(Number.isInteger(23)); // returns true
// console.log(Number.isInteger(23.0)); // returns true
// console.log(Number.isInteger(23 / 0)); // returns false

/////////////////////////
/////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** 0.5);
console.log(25 ** 1 / 2);
console.log(8 ** 1 / 3); //cubic root

// Generating a random dice roll
console.log(Math.trunc(Math.random() * 6) + 1);

// Generating an integer
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Rounding integers
console.log("=== Rounding ===");
console.log(Math.trunc(23.2));

console.log(Math.round(23.4));
console.log(Math.round(23.5));

console.log(Math.ceil(23.4));
console.log(Math.ceil(23.5));

console.log(Math.floor(23.4));
console.log(Math.floor(23.5));

// Floor is more accurate than Trunc because Floor works for negative numbers while Trunc does NOT
console.log(Math.floor(-23.4));
console.log(Math.trunc(-23.4));

// Rounding Decimals .toFixed() returns a String NOT a Number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(3));
