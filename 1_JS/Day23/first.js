// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const green=document.getElementById('green');
// const orange=document.getElementById('orange');
// const purple=document.getElementById('purple');
// const body=document.querySelector('body')

// red.addEventListener('click',()=>{
//     body.style.backgroundColor='red'
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor='blue'
// })
// green.addEventListener('click',()=>{
//     body.style.backgroundColor='green'
// })
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor='orange'
// })
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor='purple'
// })




// -------------------------------------------------------------------------------------
// const buttons=document.querySelectorAll('button')
// const body=document.body;


// buttons.forEach((button)=>{
     
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor=button.id;
//     })

// })

//-------------------------------------------------------------------------

const root=document.getElementById('root')
root.addEventListener('click',(event)=>{
      if(event.target.tagName==='BUTTON')
         {const color=event.target.id;
       document.body.style.backgroundColor=color;}
})