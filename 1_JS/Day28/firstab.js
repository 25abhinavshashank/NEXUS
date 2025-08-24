// callback hell

function fetchuser(callback){
    console.log("Fetching the user details.....")
    setTimeout(()=>{
        console.log("Data fetched successfully...");

        // greet("Abhi");
        // meet("Abhi");
        const obj={
            name:"Abhinav",
            age:22,
            city:"Kudra"
        };
        callback(obj);
    },2000)
}
function greet(obj){
    console.log(`${obj.name} ,Good Morning`)
}
function meet(obj){
    console.log(`${obj.name} ,we will at ${obj.city}`)
}

function edit(obj){
    const edited=obj.name.toUpperCase();
    console.log(`${edited} , edited name of user`)
}
// fetchuser(greet);
fetchuser(meet);
// fetchuser(edit);