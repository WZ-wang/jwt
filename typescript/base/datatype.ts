let num:number = 555;
console.log(num)

let str:string = "hello"
console.log(str)

let bool:boolean = true
console.log(bool)

let arr1:Array<string> = ["s","s","r"]
console.log(arr1)

let arr2:number[] = [1,5,3]
console.log(arr2)

let all:any = 5555
console.log(all)

function noreutrn(num1:number,num2:number):void{
    console.log(num1+num2)
}
noreutrn(1,5)

function value(num1:number,num2:number):number{
    return num1+num2
}
value(1,4)

function err():never{
    throw "ssss";
}

let nu:null = null
nu=undefined
console.log(nu)

let undef:undefined = undefined
undef=null
console.log(undef)

let dy:any = "hello"
console.log(dy.length)
console.log((dy as string).length)
console.log((<string>dy).length)
// null和undefined是所有类型的子集
export{}
