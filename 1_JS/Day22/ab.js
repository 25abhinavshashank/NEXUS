const button=document.querySelector('button')
const result=document.querySelector('#result')


button.addEventListener('click',()=>{
    const val1=Number(document.querySelector('#first').value);
    const val2=Number(document.querySelector('#second').value);
    const ans=val1+val2;
    
    result.textContent="Result : "+ans;
})