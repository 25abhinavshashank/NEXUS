const form=document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const income=document.getElementById('income');

    const value=income.value;

    let tax;
    if(value<=300000)tax=0;
    else if(value>300000&&value<=700000)tax=value*.05;
    else if(value>700000&&value<=1000000)tax=value*.1;
    else if(value>1000000&&value<=1200000)tax=value*.15;
    else if(value>1200000&&value<=1500000)tax=value*.2;
    else if(value>1500000)tax=value*.3;
    
    const result=document.getElementById('result')
    result.innerText=`${tax} is the income tax on Rs${value}`

    form.reset();
})