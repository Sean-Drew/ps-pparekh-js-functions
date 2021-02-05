function greetings(name) {
    console.log('Hello ' + name)
}
greetings('John') // Hello John


function newGreetings() {
    return 'Hello Jack'
}
let message = newGreetings()
console.log(message) // Hello Jack
console.log(newGreetings()) // Hello Jack


function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(1, 5))


function thirdGreeting(name) {
    console.log('Hello' + ' ' + name)
}
let name = 'Sal'
thirdGreeting(name)
name = 'Mary'
thirdGreeting(name)


function printAll() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
printAll(1, 2, 3, 4, 5)
printAll(10, 20)