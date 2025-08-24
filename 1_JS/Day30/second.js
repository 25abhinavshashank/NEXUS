cart=['Pizza','Burger','Coke']

// //  Domino's pizza order kar rahe ho:

// function placeorder(cart,callback){
//     console.log("Talking with the Dominos");
    
//     setTimeout(()=>{
//       console.log("Order placed Successfully ")
//       const order={orderId:221, food:cart,resturant:"Dominos",location:"delhi" }
//       callback(order);
//     },2000)
// }

// function preparingOrder(order,callback){
//     console.log("Preapring the order")
//     setTimeout(()=>{
//         console.log("pizza preparation done")
//         const foodDetails={token:12,resturant:order.resturant,location:order.location}
//         callback(foodDetails);
//     },5000)
// }

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching resturant for picking the order");

//     setTimeout(() => {
//         console.log("order picked up by delivery boy")
//         const droplocation=foodDetails.location;
//         callback(droplocation);
//     }, 3000);
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(() => {
//       console.log("Delivery boy delivered the order");   
//     }, 5000);
// }


// // this is the example of  real callback hell

// placeorder(cart, (order)=>{
//     preparingOrder(order,(foodDetails)=>{
//         pickupOrder(foodDetails,( droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// })
 

//---------Using promises instead of callback hell
placeorder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error))

function placeorder(cart){
    console.log("Talking with the Dominos");
    
    const pr=new Promise(function(resolve,reject){
       setTimeout(()=>{
        let food_available=1;
      if(food_available){console.log("Order placed Successfully ")
      const order={orderId:221, food:cart,resturant:"Dominos",location:"delhi" }
      resolve(order);}
      else {
        reject("Food not available")
      }
    },2000)
    })
    return pr;
}

function preparingOrder(order){
    console.log("Preparing the order");
    
    const pr=new Promise(function(resolve,reject){
        setTimeout(()=>{
        console.log("pizza preparation done ");
        const foodDetails={token:12,resturant:order.resturant,location:order.location};
        resolve(foodDetails);
    },5000);
    })
    return pr;
}

function pickupOrder(foodDetails){
    console.log("Reaching resturant for picking the order");

     const pr=new Promise(function(resolve,reject){
       setTimeout(() => {
        console.log("order picked up by delivery boy")
        const droplocation=foodDetails.location;
        resolve(droplocation);
    }, 3000);
    })
    return pr;
    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");
     const pr=new Promise(function(resolve,reject){
        setTimeout(() => {
      console.log("Delivery boy delivered the order");   
    }, 5000);
    })
    return pr;
    
}
