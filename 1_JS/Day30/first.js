//Callback Hell

//Async Task
// Weather

const Promises=fetch(`http://api.weatherapi.com/v1/current.json?key=1aeea0f31d5d4565a5b132906251008&q=London&aqi=no
`);
// Promises.then((response)=>{// then ka matlab ye hai ki jab promise me value ayega tabhi aage ka code run hoga
//     const pro2=response.json();
//     pro2.then((data)=>{
//          console.log(pro2);
//     })
   
// }).catch((error)=>{
//     console.log(error);
// })
// pending resolve reject


//----------------- promise chaining to convert the response in json format . convertion in json(java script object notation) object is also a asyn task
// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })
//--- more cleaner way to write this above code
Promises
.then(response=>response.json())
.then(data=>console.log(data.current. temp_c))
.catch(error=>console.log(error))
