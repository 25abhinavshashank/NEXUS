interface person{
 name:string,
 roll:number,
 adhar?:number
}

const c1:person={
    name:"Abhi",
    roll:23,
    adhar:123,
    
}

interface customer{
    name:string,
    age:number,
    balance:number
}

const c2:Partial<customer>={
    name:"abhi",
    age:23
}

//partial-all property become optional
//required-all property must be filled
//readonly-all property can be read only ,write option is not available


interface people {
    name:String,
    age:number
}

let arr:people[]=[{name:"an",age:20},{name:"abc",age:32}]


function greet(a:number):number{
    console.log(a);
    return(a+5)
}

console.log(greet(10))

function meet(name:string,age:number){
    console.log(name + age)
}
meet("Abhi",20)

// default parameter

function neet(name:string="abhinav"){
    console.log (name)
}

neet()
neet("shashank")

// optional parameter

function gate(person?:string){
    console.log(person || "Mohan")
}

gate("asz")
gate()

// Arrow function


const sum=(num2:number,num1:number):number=>{
   return (num2+num1)
}

console.log(sum(10,20))

//call back function

function placeOrder(order:number,callback:(amount:number)=>void):void{
      const amount :number=order+10;
      callback(amount)
}

placeOrder(10,(amount)=>{
    console.log(amount);
})

// rest parameter

function total(...arr:number[]){
      let ans=0;
      arr.forEach(val => {
        ans=ans+val;
      });
      console.log(ans);
}

total(1,2,3,4,5,6,.7,8)

//extend keywords

interface human{
    name:string,
    age:number
}

interface teacher extends human{
    salary:string,
    id:number
}

const ob:teacher={
    name:"Abhi",
    age:1,
    salary:"DScfds",
    id:23324


}