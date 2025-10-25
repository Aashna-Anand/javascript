let c = 300

if (true) {
    var a = 100
    let b = 200
    let c = 30
}
// console.log(a); // 100
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)
console.log(addTwo(5))