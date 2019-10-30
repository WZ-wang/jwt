//类型兼容

// interface People{
//     name:string
// }
// let a : People;
// let b = {name:"sss",age:5555}
// a=b
// console.log(a)

//函数形参
// type x = (name:string)=>string
// type y = (name:string,age:number)=>string
// let a:x;
// let b:y;
// b=a

//函数返回值
// type x = (name:string)=>{name:string}
// type y = (name:string)=>{name:string,age:number}
// let a:x;
// let b:y;
// a=b
//函数的返回值和形参都是必须的所以形参的数要存在

// 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的






export {}