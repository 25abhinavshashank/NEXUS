const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

// event capturing and event bubbling

child.addEventListener('click',()=>{
    console.log('child clicked');
},false)

parent.addEventListener('click',()=>{
    console.log('parent clicked');
},true)

grandparent.addEventListener('click',()=>{
    console.log('grandparent clicked');
},false)

// event bubbling me ander se bahar ki taraf event move karta hai but capturing me bahar se ander ata hai


// event delegation