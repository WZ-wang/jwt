// 普通的类
// class Person{
//     private name
//     private age:number
//     constructor(name:string,age){
//         this.name=name
//         this.age = age
//     }
//     public get getName():string{
//         return this.name
//     }
//     public set setAge(newAge:number){
//         this.age= newAge
//     }
// }
// let p = new Person("wangcai",100)
// console.log(p.getName)
// p.setAge = 50
// console.log(p.age) 通过get获取数据set修改数据


// 继承
// class Person{
//     public name
//     constructor(name:string){
//         this.name=name
//     }
//     public score(score:number):string{
//         return `${this.name}得了${score}分`
//     }
// }
// class Student extends Person{
//     constructor(name) {
//         super(name);
//         this.name = name
//     }
//     public getScore(score:number):any{
//         console.log(super.score(score))//通过super.方法名调用父类的方法
//     }
// }
// let s = new Student("wangcai")
// // console.log(s.score(55))
// s.getScore(5)

//抽象类 
// abstract class Person{
//     public name
//     constructor(name:string){
//         this.name=name
//     }
//     public score(score:number):string{
//         return `${this.name}得了${score}分`
//     }
// }
// let p = new Person()  不能new


//静态属性
// class Person{
//     public name:string
//     constructor(name){
//         this.name=name
//     }
//     static score(score:number):string{
//         return `${this.name}得了${score}分`
//     }
// }

// let p = new Person("xiaoqiang")
// // console.log(p.score(5))  //静态属性不能通过对象调用 只能直接用类名
// console.log(Person.score(444))

//函数
// function fly():void{
//     console.log("飞.....")
// }

// function eat(food:string):string{
//     return `吃的是${food}`
// }

// let add =function add(num1:number,num2:number):void{
//     console.log(num1+num2)
// }

// fly()
// console.log(eat("米饭"))
// add(1,3)


export {}