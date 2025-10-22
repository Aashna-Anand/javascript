const marvel_heroes = ['Iron Man', 'spiderman', 'Thor'];
const dc_heroes = ['Batman', 'Superman', 'Flash', ];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes);

// console.log(all_heroes);

// const all_heroes2 = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes2);

// use of flat()

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.flat();

// console.log(all_heroes);

// use of isArray and  Array.from

//  console.log(Array.isArray(marvel_heroes));
//     console.log(Array.isArray('hello'));
//     console.log(Array.from(marvel_heroes));
//     console.log(Array.from('hello'));

console.log(Array.from({name: "aashna"})); //important for interview,,jab bhi ye decide nahi kar [ata ki kiska array banau pehle key ka yaa value ka to  ye empty set de deta hai]


let score1 = 100
let score2 = 200
let scor3 = 300

console.log(Array.of(score1, score2, scor3));
