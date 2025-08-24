 function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },2000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },1000)
    })

    return p2;

}



//  async function greet() {
//     const data1 =await test1();
//     console.log(data1);

//     const data2 =await test2();
//     console.log(data2);
// }

// greet(); 
// console.log("Hello Coder Army");
// console.log("Kaise ho aap sab log");

// use of PROMISE.ALL to execute the 2 promises simultaneously

async function greet() {
    const[data1,data2]  =await Promise.all([test1(),test2()]);
    console.log(data1);
    console.log(data2);
}
greet()

        
