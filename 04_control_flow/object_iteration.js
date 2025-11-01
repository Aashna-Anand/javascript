// forin loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);  // prints only the keys
   // console.log(myObject[key]);  // prints only the values
   console.log(`${key} shortcut is for ${myObject[key]}`);  // prints key value pairs
}