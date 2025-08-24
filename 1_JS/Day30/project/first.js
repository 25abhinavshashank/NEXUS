document.querySelector('button').addEventListener('click',()=>{
    const place=document.getElementById('location').value;
   
   function updateTemp(data){
     const element=document.querySelector('#weatherInfo');
    if(typeof data === "object" && !data.error)
   { const temp=data.current. temp_c;
   
    element.innerHTML=`The temperature of ${place} is ${temp}C`}
    else if(data.error) {
       element.innerHTML=`Error: ${data.error.message}`; 
    }
   }

   const Promises=fetch(`http://api.weatherapi.com/v1/current.json?key=1aeea0f31d5d4565a5b132906251008&q=${place}&aqi=no`);

   Promises
   .then(response=>response.json())
   .then(data=>updateTemp(data))
   .catch(error=> updateTemp({ error: { message: error.message } }))

   
})