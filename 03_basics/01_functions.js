function addTwoNumbers(a, b) {
    // let result = a + b;
    // return result;
    return a + b; // Return the sum of a and b directly

}

const result = addTwoNumbers(3, 5); // Call the function with arguments 3 and 5
// console.log("result:",result); // Output the result to the console

function logInUserMessage(username) {
    return `${username} just logged in.`;
}
// console.log(logInUserMessage("samuel")); // Output: samuel just logged in.
// console.log(logInUserMessage()); // Output: undefined just logged in.

// function calculatecartPrice(...itemPrice) {// if used(item price) without ... it will return only first argument i.e 200
//     return itemPrice
// }
// console.log(calculatecartPrice(200,400,4000));


function calculateCartPrice(val1,val2, ...itemPrices) { // here val1 and val2 will take first two arguments and rest will go to itemPrices array
    return itemPrices;

}
// console.log(calculateCartPrice(200,400,4000,70000,20002));


const user = {
    username: "samuel",
    age: 24,
}

function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);

// or 

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
