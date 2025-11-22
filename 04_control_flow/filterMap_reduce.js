const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)                                                       // 0 is here initial value of acc

//const myTotal = muNums.reduce( (acc,)currval ) => acc + currval, 0)  // arrow function version

const myTotal = myNums
                    .map( (num) => num * 10 )          // first map then reduce
                    .reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);