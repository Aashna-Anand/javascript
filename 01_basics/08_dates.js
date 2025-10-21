let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// let specificDate = new Date(2023,0,23,5,3);
// console.log(specificDate.toLocaleString());

myDate.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
console.log(myDate.toDateString());

`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`;
console.log(myDate);