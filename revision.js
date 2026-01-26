// What is hoisting?

// JS moves declarations to the top, not initializations.



let obj1 = { x: 10 }
let obj2 = obj1

obj2.x = 99

console.log(obj1.x) // 99 😱

// primitive(copy by value) and non-primitive(copy by referrence)
// == ===

console.log("Start")

setTimeout(() => console.log("Timeout"), 1000)

Promise.resolve().then(() => console.log("Promise"))

console.log("End")
