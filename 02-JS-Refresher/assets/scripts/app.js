// import { apiKey } from "./util.js";

// import apiKeyDefault from "./util.js"

// import { apiKey, abc } from "./util.js";

// import * as util from './util.js'

// import { apiKey, abc as content } from "./util.js";

// console.log(apiKeyDefault, apiKey, abc);

// console.log(util.apiKey);
// console.log(content);

// let userMessage = "Hello User"
// const userMessage = "Hello User"

// console.log(userMessage)

// console.log(10 <= 10)

// if (10 === 10) {
//   console.log("works");
// }

// function greet() {
//   console.log("Hello");
// }

// greet();
// greet();
// greet();

// function greetUser(userName, message = "Hello!") {
//   console.log(userName);
//   console.log(message);
// }

// greetUser("Mire");
// greetUser("Max", "Hello what's up?");

// function createGreeting(userName, message = "Hello!") {
//   return "Hi, I am " + userName + ". " + message
// }

// console.log(createGreeting("Mire"));
// const user = createGreeting("Max", "Hello, what's up?");
// console.log(user)

// Exercise: Working with Functions
// Your task is to write a new function that should be named combine and have the following characteristics:

// Accept three input values

// Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

// Return the calculated result

// function combine(a, b, c) {
//     const result = (a * b) / c
//     return result;
// }

// export default function() {
//     console.log('Hello')
// }

// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message;
// };

// const user = {
//   name: "Mire",
//   age: 27,
//   greet() {
//     console.log("Hello " + this.name);
//   },
// };

// console.log(user);
// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Mire", 27);
// console.log(user1)
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];

// console.log(hobbies[0]);

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// for (let hobbie of hobbies) {
//     console.log(hobbie)
// }

// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that should transform a
// list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the
// transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

// let arr1 = [1, 2, 3];

// function transformToObjects(numberArray) {
//   return numberArray.map((number) => ({ val: number }));
// }

// const testObj = transformToObjects(arr1);
// console.log(testObj);

// const userNameData = ["Mire", "Becirbegovic"];
// const [firstName, lastName] = ["Mire", "Becirbegovic"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName)
// console.log(lastName)

// const user = {
//   name: "Mire",
//   age: 27,
// };

// const { name: userName, age } = {
//   name: "Mire",
//   age: 27,
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];

// const newHobbies = ["Reading"];

// console.log(newHobbies);

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies)

// const user = {
//     name: "Mire",
//     age: 27
// }

// const extendedUser = {
//     isActive: true,
//     ...user
// }

// console.log(extendedUser)

// if (10 === 10) {
//   // ...
// } else if (2 === 2) {
//   // ...
// } else if (5 === 5) {
//   // ...
// } else {
//   // ...
// }

// const password = prompt("Your password: ");

// if (password === "Hello") {
//   console.log("Hello works!");
// } else if (password === "hello") {
//   console.log("hello works!");
// } else {
//   console.log("access not granted.");
// }

// const hobbies = ["Sports", "Cooking"]

// for (const hobby of hobbies) {
//     console.log(hobby)
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => {
//   console.log("Hi");
// });

function init() {
  function greet() {
    console.log("Hi!");
  }
  greet();
}

init()