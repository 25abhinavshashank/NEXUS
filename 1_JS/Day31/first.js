const cart = ["Pizza","Coke", "sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })
    
    return pr;
    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}





// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));

//----------------------------------
// await keyword  donot allow the process to move to the next the process till the previous process is not completed
// await ka use async fn me hi hoga

async function greet() {
    const order= await placeOrder(cart);
    const foodDetails=await preparingOrder(order);
    const droplocation=await pickupOrder(foodDetails);
    deliverOrder(droplocation)
}

// greet()// calling the above fun


//-----------------------------------------------------------------------
// creating the new promise
/*const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("HIII,EveryONE")
    }, 2000);
})*/
// same way to use run the promise 
// p1.then((response)=>{console.log(response)})

// use of async fun  and await keywords to run the promise fun
// **************Same promise ko do baar call karne se wo ek hi baar time lega kyuki p1 (promise) ki value reolve ho chuki rehti hai

/***
async function meet() {
    const data1 =await p1;
    console.log(data1);

    const data2 =await p1;
    console.log(data2);
}
meet()
***/

//---------------------------------------------------------------------------
//*********now we see how to 2 different promise execute at same time?? 


const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("1st promise is resolved")
    }, 2000);
})

const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("2nd promise is resolved")
    }, 2000);
})

/* yaha pe bhi ye saval aata hai ki kaise do promise same time le rahe hai iska ans ye hai ki promise ke liye rukta wo  p1 aur p2 me value store karega bhale hi await p1 call ho yaha nhi ye dono p1 aur p2 same time pe value share karenge*/


async function ab() {
    const data1 =await p1;
    console.log(data1);

    const data2 =await p2;
    console.log(data2);
}
//  ab();//calling fn

 // Passing promise in the new 2 fn 
 /* isme ek fn execute hoga then dusra execute hoga*/

 function test1(){
    const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("1st promise is resolved")
    }, 5000);
    })
    return p1;
 }
 function test2(){
    const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("2nd promise is resolved")
    }, 5000);
    })
        return p2;

 }
async function abc() {
    const data1=await test1();
    console.log(data1)
    const data2=await test2();
    console.log(data2)
}
 
 abc();