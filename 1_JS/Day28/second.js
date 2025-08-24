// callback hell

//  Domino's pizza order kar rahe ho:

function placeorder(callback){
    console.log("Talking with the Dominos");
    
    setTimeout(()=>{
      console.log("Order placed Successfully ")
      callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Preapring the order")
    setTimeout(()=>{
        console.log("pizza preparation done")
        callback();
    },5000)
}

function pickupOrder(callback){
    console.log("Reaching resturant for picking the order");

    setTimeout(() => {
        console.log("order picked up by delivery boy")
        callback();
    }, 3000);
}

function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(() => {
      console.log("Delivery boy delivered the order");   
    }, 5000);
}


// this is the example of  real callback hell

placeorder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
})
 
