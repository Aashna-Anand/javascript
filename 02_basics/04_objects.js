// const tinderUser = new Object();  // singleton
 const tinderUser = {} // non singleton object
tinderUser.id = "12345";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;


const object1 = {1: "a", 2: "b", 3: "c"};
const object2 = {3: "c", 2: "b", 1: "a"};

// const object3 = {object1 , object2}; // wrong way to merge objects
const object3 = Object.assign({}, object1, object2); // correct way to merge objects
// console.log(object3); // { '1': 'a', '2': 'b', '3': 'c' }

// nested objects

const users = [{
    id: 1,
    email: "a@gmail.com",

},
{
    id: 2,
    email: "b@gmail.com",

},
{
    id: 3,
    email: "c@gmail.com"
},
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// // to delete a property from an object
delete tinderUser.isLoggedIn;
// console.log(tinderUser);

// console.log(tinderUser.hasOwnProperty("name")); // true

// +++++destructor of object+++++

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "John Smith"
}
const {courseInstructor: Instructor} = course;
console.log(Instructor); // John Smith