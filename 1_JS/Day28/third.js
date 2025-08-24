// JS is a single threaded synchronus language

// JS behaviour :Async


// // Async Task  is not a part of js .its a part of web api . it is not a part of Echma script


// console.log("200")
// setTimeout(() => {
//     console.log("600")
// }, 3000);
// console.log("400")

//------------------------------------------------

// Sync task is part of js so js is single threaded sync lang 
// single threaded means ek kaam jab tak pura nhi hoga dusre pe nhi jayenge
console.log("200");

const timer=Date.now();
while(Date.now()-timer<2000){
    // wait for 2 sec
}
console.log("600")
console.log("400")
