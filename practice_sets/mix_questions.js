//  ⁠Convert ⁠ true ⁠ to a number, then add 5.  
   let b = true;
   let numB = Number(b);
   //console.log(numB + 5); // output: 6 because true converts to 1

//  ⁠Convert ⁠ false ⁠ to a number, then add 10.  
   let c = false;
   let numC = Number(c);
  // console.log(numC + 10); // output: 10 because false converts to 0

//⁠What is the output of:  
   //console.log("5" - 2); 
   //console.log("5" + 2);

//    Predict the output:  

   let x = 2;
   //console.log(++x + x++ + x); 
   
//Find all methods to get the last character of a string ⁠ str ⁠. Then do it for ⁠ let str = "hello" ⁠.  Solution:  
   
   let str = "hello";
   let last1 = str.charAt(str.length - 1);   // "o"
   let last2 = str.slice(-1);                // "o"
   let last3 = str.substring(str.length - 1); // "o"

// replace - with / in the following date string:


let dateStr = "2025-10-25";
let newDateStr = dateStr.replace(/-/g, "/"); // meaning of /-/g: global replacement of - with /
// console.log(newDateStr); // output: "2025/10/25"


const firstName = "aashna";
const repoCount = 50;

//console.log(`Hello, ${firstName}! You have ${repoCount} repositories.`); // template literal example

//Use `.splice()` to insert `'a', 'b'` at index 2.
// let arr = [1, 2, 3, 4];
// arr.splice(2, 0, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 3, 4]   //array.splice(start, deleteCount, item1, item2, ...);
// // console.log(arr);



// Create an array of 3 user objects with ⁠ id ⁠ and ⁠ email ⁠. Access email of the second user.
let users = [
   { id: 1, email: "user1@example.com" },
   { id: 2, email: "user2@example.com" },
   { id: 3, email: "user3@example.com" }
]; 

// Access email of the second user
// console.log(users[1].email); // output: "user2@example.com"

// loop through the keys of objet

let obj = { name: "Alice", age: 30, city: "New York" };

for (let key in obj) {
   // console.log(key); // outputs: name, age, city
}

// loop through the values of objet

for (let key in obj) {
   let value = obj[key]; // meaning of obj[key]: access value using key
   // console.log(value); // outputs: Alice, 30, New York
}

// loop through both keys and values of objet

for (let key in obj) {
   let value = obj[key];
   // console.log(`${key}: ${value}`); // outputs: name: Alice, age: 30, city: New York
}

// Convert object keys into an array
let keysArray = Object.keys(obj);
// console.log(keysArray); // output: ["name", "age", "city"]

// Convert object values into an array
let valuesArray = Object.values(obj);
// console.log(valuesArray); // output: ["Alice", 30, "New York"]

// Convert object entries into an array of [key, value] pairs
let entriesArray = Object.entries(obj);
// console.log(entriesArray); // output: [["name", "Alice"], ["age", 30], ["city", "New York"]]