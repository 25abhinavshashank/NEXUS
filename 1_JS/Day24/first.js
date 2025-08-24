// const form =document.querySelector('form');
// form.addEventListener('click',(event)=>{
//     console.log (event.target);
// })


// const form =document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//     // console.log (event.target);
//     console.log("Form submitted")
// })

// const form =document.querySelector('form');
// form.addEventListener('reset',(event)=>{
//     // console.log (event.target);
//     console.log("Form reseted")
// })

//-------------------------------------------------
const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{

    event.preventDefault();

    // const first =document.getElementById('first');
    // console.log(first.value);


    // const second =document.getElementById('second');
    // console.log(second.value);

    // const third=document.getElementById('third');
    // console.log(third.value);

    // const result=document.getElementById('result')
    // result.innerText=`${first.value} ${second.value} is a good boy`;

    // document.body.append(result);


    const data=new FormData(form);
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));
    
    // key value pair
    for(let key of data.entries()){
        console.log(key)
    }

})