let First:string="ab"

First="cxvxc"

let ab=23
ab=5

// use of any 
let money:any;
money=9;
money="Abhi";
console.log(money.toUpperCase())

let val2:unknown;
val2="Abhi"

if(typeof val2 ==='string')
console.log(val2.toUpperCase())

if(typeof val2 ==='number')
console.log(val2.toFixed(2));

// ----------------------------------------------

//non primitive datatype

let arr:number []=[2,4,5,6,7];
let arr2=[2,1,4,5];
let arr3=[2,1,4,5,"abhi"];
arr3.push("sdcdsf")

let arr4:(string|number|boolean)[]=["Rohit",23,true]

// Tuple is a type of array which has a fixed size and value mentioned in it 
let tuple:[string,number,number]=["Rohit",11,12]

let obj11: {
    name: string;
    age: number;
    gender: string;
}={
    name:"Abhi",
    age:20,
    gender:"Female"
}

let obj2:{name:string,balance:number};

obj2={
    name:"abhi",
    balance:20
}

// Allices

type customer={
    name:string,
    age:number,
    id:string;
}

let customer1:customer={
    name:"An",
    age:20,
    id:"DSFCDS"
}


interface admin{
    name:string,
    age:number,
    post:string
}

let obj3 :admin={
    name:"rohit.",
    age:20,
    post:"                      "
}