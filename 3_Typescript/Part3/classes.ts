class person{
    name:string;
    age:number;

    constructor(n1:string,n2:number){
        this.name=n1;
        this.age=n2;
    }

    greet():void{
        console.log(`hii,${this.name}`)
    }
}

const obj1=new person("Abhi",22)
console.log(obj1)
const obj2=new person("Sayan",2)
console.log(obj2.greet())

class customer{
    name:string;
    age:number;
    balance:number;

    constructor(n1:string,n2:number,n3:number){
        this.name=n1;
        this.age=n2;
        this.balance=n3;
    }
}

const ob3=new customer("Deepak",23,560)
console.log(ob3.name)
console.log(ob3.age)
console.log(ob3.balance)

// generic template

function value <t>(n:t):t{
   return n;
}
console.log(value(234))
console.log(value("fdsfds"))
console.log(value([10,23,45]))

