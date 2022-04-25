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
// console.log(Math.sqrt(25));
// console.log(25 ** 0.5);
// console.log(25 ** 1 / 2);
// console.log(8 ** 1 / 3); //cubic root

// // Generating a random dice roll
// console.log(Math.trunc(Math.random() * 6) + 1);

// // Generating an integer
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// // Rounding integers
// console.log("=== Rounding ===");
// console.log(Math.trunc(23.2));

// console.log(Math.round(23.4));
// console.log(Math.round(23.5));

// console.log(Math.ceil(23.4));
// console.log(Math.ceil(23.5));

// console.log(Math.floor(23.4));
// console.log(Math.floor(23.5));

// // Floor is more accurate than Trunc because Floor works for negative numbers while Trunc does NOT
// console.log(Math.floor(-23.4));
// console.log(Math.trunc(-23.4));

// // Rounding Decimals .toFixed() returns a String NOT a Number
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(3));

// // Using modulo to see if a number is even or odd;
// // For every nth time use the remainder (modulo) operator
// const isEven = (n) => n % 2 === 0;

// console.log(isEven(123));
// console.log(isEven(12));

// // Numeric Separators (_) ES2021
// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// console.log(String(230_000)); // this will work
// console.log(Number("23_000")); // this will return NaN

// // Biggest number JS can safely save
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// // BigInt (suffix n) ES2020
// console.log(1234553245532454345654n);
// console.log(BigInt(234523432443));

// // Impossible to mix BigInt to other types
// const huge = 213453245324434n;
// const num = 23;
// // console.log(huge * num); // returns an error, Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(huge * BigInt(num)); // have to convert num into BigInt

// console.log(20n > 15);
// console.log(20n === 20); // returns false because different primitive types
// console.log(20n == 20); // returns true because of type coercion

// // Divisions
// console.log(11n / 3n); // returns 3n
// console.log(10 / 3); // returns 3.333

/////////////////////////
/////////////////////////
// Create a date

// Four ways of creatind dates
// const now = new Date();
// console.log(now);

// console.log(new Date("Mon Apr 25 2022 12:44:50"));
// console.log(new Date("December 24, 2022"));

// Note that the month 10 in JS is zero based. Odd but something we need to get used to
// returns Thu Nov 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0));

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23, 12);
// console.log(future);

// Never use the method .getYear();
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // Timestamp

// console.log(new Date(2142274992000));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);
