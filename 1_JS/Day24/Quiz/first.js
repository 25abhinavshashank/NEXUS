// const original=["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
const original={q1:"Sachin Tendulkar",
   q2:"West Indies",
   q3:"Sachin Tendulkar",
   q4:"264",
   q5:"Muttiah Muralitharan"}

const form=document.querySelector('form')

form.addEventListener('submit',(event)=>{
   event.preventDefault();
   const data=new FormData(form);

   const ans=Array.from(data.values());

   let result=0;
   // for(let i=0;i<ans.length;i++){
   //    if(ans[i]===original[i])result++;
   // }
   for(let[key,value] of data.entries()){
      if(value===original[key]) result++;
   }

   const mark=document.querySelector('#result');
   mark.innerText=`${result } out of 5 is correct`
   // console.log(result);
})