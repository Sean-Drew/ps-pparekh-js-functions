// function greetings(name) {
//     console.log('Hello ' + name)
// }
// greetings('John') // Hello John


// function newGreetings() {
//     return 'Hello Jack'
// }
// let message = newGreetings()
// console.log(message) // Hello Jack
// console.log(newGreetings()) // Hello Jack


// function sum(num1, num2) {
//     return num1 + num2
// }
// console.log(sum(1, 5))


// function thirdGreeting(name) {
//     console.log('Hello' + ' ' + name)
// }
// let name = 'Sal'
// thirdGreeting(name)
// name = 'Mary'
// thirdGreeting(name)


// function printAll() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// printAll(1, 2, 3, 4, 5)
// printAll(10, 20)

// function greeting() {
//     let message = 'Hello'
//     let sayHi = function hi() {
//         console.log(message)
//     }
//     sayHi() // Hello
// }
// greeting()
// sayHi() // not defined (scoping)

// let message = 'Hello'
// if (message === 'Hello') {
//     let message = 'Inside if block'
//     console.log(message) // Inside if block (block scope)
// }
// console.log(message) // Hello

// let greeting = (function() {
//     let message = 'Hello'
//     let getMessage = function() {
//         return message
//     }
// })()
// console.log(greeting.message) // Uncaught TypeError: Cannot read property 'message' of undefined

// let greeting = (function() {
//     let message = 'Hello'
//     let getMessage = function() {
//         return message
//     }
// })
// console.log(greeting.message) // undefined

// let greeting = (function() {
//     let message = 'Hello'
//     let getMessage = function() {
//         return message
//     }
//     return {
//         getMessage: getMessage
//     }
// })()
// console.log(greeting.getMessage()) // Hello
// // example of a closure
// // this is logging the getMessage property of the greeting variable, which is returned from inside
// // the greeting variable as an object, and logged using dot notation.


// function setupCounter(value) {
//     return function counter() {
//         return value++
//     }
// }
// let counter1 = setupCounter(0)
// console.log(counter1()) // 0
// console.log(counter1()) // 1
// console.log(counter1()) // 2
// console.log(counter1()) // 3
// let counter2 = setupCounter(10)
// console.log(counter2()) // 10
// console.log(counter2()) // 11
// console.log(counter2()) // 12
// console.log(counter2()) // 13


// Base function
// let greetings = function () {
//     return 'Hello World'
// }
// let message = greetings()
// console.log(message) // Hello World

// Now as arrow function. Hello World is explicitly returned.
// let greetings = () => {
//     return 'Hello World'
// }
// let message = greetings()
// console.log(message)

// Arrow function further reduced. Hello World is implicitly returned.
// let greetings = () => 'Hello World'
// let message = greetings()
// console.log(message)


// Base function
// let greet = function greetings(name) {
//     return 'Hello ' + name
// }
// let message = greet('John')
// console.log(message) // Hello John

// Now as arrow function.
// let greetings = (name) => {
//     return 'Hello ' + name
// }
// let message = greetings('John')
// console.log(message)

// Further reduced / implicit return
// let greetings = (name) => 'Hello ' + name
// let message = greetings('Jacob')
// console.log(message)