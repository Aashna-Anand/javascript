//browser pe object window hota hai jisme sare global functions aur variables hote hain 
// {jab hum this ka use global scope me karte hain to ye window object ko refer karta hai yaha vs code mein ye undefined hota hai}
// function ke andar aakr this ka use nahi ho paata wo undefined hota hai and agar hum arrow function ka bhi use karte hain to this ke jagah tab bhi empty object milta hai

const user = {
    username: "aashna",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

};

 user.welcomeMessage();

user.username = "sam"
 user.welcomeMessage()

 console.log(this);

function chai2() {
    let username = "aashna";
    console.log(this.username);
}
chai2();

const chai = function () {
    let username = "aashna";
    console.log(this.username);
}

const chai1 =  () => {
    let username = "aashna";
    console.log(this);
}



chai1()

// chai()

// const addTwo = (num1, num2) => { // explicit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"}) 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()