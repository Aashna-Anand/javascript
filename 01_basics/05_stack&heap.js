// let youtubeChannel = "codevolution";
// let anothername = "codevolution";             // stack without reference
// anothername = "hello hello";                

// console.log(youtubeChannel);
// console.log(anothername);

let userone = {
  name: "aashna",
  email: "aashna@google.com",
};                                                // heap with reference
let usertwo = userone;
usertwo.email = "hello@google.com";
console.log(userone.email);
console.log(usertwo.email);