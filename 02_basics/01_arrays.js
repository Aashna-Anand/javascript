// javascript mein jo arrays mein agar copy operation kare to wo shallow copy banata hai
const myArr = [0,1, 2, 3, 4, 5];
const myHeroes = ['thor', 'spiderman', 'ironman', 'hulk'];

// const myArr2 = new Array(1,2,3,4,5); // ye bhi array banata hai
// console.log(myArr[1]); // 1

// myArr.push(6); // array ke end mein element add karta hai
// console.log(myArr); // [0,1,2,3,4,5,6]

// myArr.pop(); // array ke end se element remove karta hai
// console.log(myArr); // [0,1,2,3,4,5]

// myArr.unshift(-1); // array ke starting mein element add karta hai
// console.log(myArr); // [-1,0,1,2,3,4,5]

// myArr.shift(); // array ke starting se element remove karta hai
// console.log(myArr); // [0,1,2,3,4,5]

// slice and splice
console.log("A", myArr);
 const myn1 = myArr.slice(1,4); // slice(startIndex, endIndex) endIndex exclusive hota hai
 console.log(myn1); // [1,2,3]
 console.log("B", myArr);

 const myn2 = myArr.slice(1,3);
    console.log(myn2); // [1,2]

const myn3 = myArr.splice(1,3); // splice(startIndex, deleteCount, item1, item2, ...) deleteCount ke baad ke elements ko remove karta hai aur naye elements add karta hai
console.log(myn3);
console.log("C", myArr); // [0,1,2,3]

// slice original array ko change nahi karta hai lekin splice original array ko change karta hai