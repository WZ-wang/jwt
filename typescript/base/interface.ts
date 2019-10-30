//抽象类也可以实现接口
// abstract class People{
//     abstract fly():void;
// }
// class wc extends People{
//     fly(){
//         console.log("fly.....")
//     }
// }
// let w = new wc()
// w.fly()
//接口 定义方法在类中使用
// interface PeopleInterface {
//     name:string;
//     age?:number; //?表示可以不写，不加则必须要写
//     eat():void;
// }
// class People implements PeopleInterface{
//     name:string
//     eat(){
//         console.log("eat....")
//     }
// }
// let p = new People()
// p.eat()


// 接口实现类型校验
// interface PeopleInterface {
//     name:string;
//     age?:number; //?表示可以不写，不加则必须要写
//     [arg:string]:any  //表示其他属性
// }
// let obj:PeopleInterface = {
//     name:"wangcai",
//     height:152
// }

// interface PeopleInterface {
//     (name:string):string
// }
// let info:PeopleInterface = function(name:string) {
//     return  name
// }
// function infos(name:string):PeopleInterface {
//     return info
// }

// arguments的使用
// interface counts{
//     (a:number,b:number,c:number):number
// }
// let sum:counts = (...react)=>[...react].reduce((prev,next)=>prev+next)
// console.log(sum(1,12,3))

//接口约束数组

// interface A {
//     [index:number]:any
// }

// let a:A = ["sss",111]


//接口约束类
// class People {
//     constructor(name: string) {
//     }
// }
// class s {
//     constructor(name: string, age: number) {
//     }
// }
// interface C {
//     new(name: string): People
// }
// function P(cpeo: C, name: string): People {
//     return new cpeo(name)
// }
// P(People, "wangcai")  //类的形参可以比C规定的少但不能超出


export { }







