///Hoisting
// let b = 20;
// function add() {
//   console.log(b);
// }
// add();
// var a = 10;

// const c = 30;

///Call back & call back hell

// setTimeout(() => {});

///Scopes & lexical environment

// function one() {
//   let a = 10;
//   function two() {
//     let b = 20;
//     return a + b;
//   }
//   two();
// }
// one();

///primitive & non primitive

// let a = "harshal";

// let b = a; //pointing to new memory location

// b = "amit";
// console.log(a);          ///shallow copy
// console.log(b);
// let x = { name: "harshal" };

// let y = x; //points to same address
// y.name = "amit";
// console.log(x);    ///deep copy
// console.log(y);

// first-class function

// let x = function add(a, b) {
//   a + b;                                 //when func is stored inside variable
// };

///Anonmous and non anonmous function

// let x = function () {}; //function which doesn't have any name

///IIFE Immediately invoke function

// (function add(a, b) {
//   console.log(a + b);
// })(5, 4);

/////////  Closures

// function one() {
//   let a = 10;
//   let m = function two() {
//     let b = 10;
//     return a + b;
//   };
//   console.log(m());
// }
// one();

////Higher order function

///map func
// returns array
// let arr = [1, 2, 3, 4, 5];

// output = [2, 4, 6, 8, 10];

///forEach
// let arr = [1, 2, 3, 4, 5];
//doesnt return anything
// arr.forEach((element) => {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

////filter

// let arr = [1, 2, 3, 4, 5];

// let x = arr.filter((element) => {
//   if (element % 2 === 0) {
//     return element;
//   }
// });
// console.log(x);

/////////////////Reduce /////////////////////////

// let arr = [1, 2, 3, 4, 5];

// let x = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(x);
