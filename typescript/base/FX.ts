//泛型的使用
// function People<T>(name:T) :T {
//     return name
// }
// console.log(People<string>("wangcai"))
// console.log(People("wangcai")) //类型推论可以不用加类型，会自动识别

//接口
// interface People<T>{
//     name:T,
//     call(num:T):T
// }
// let p:People<string> = {
//     name:"wangcai",
//     call(callName){
//         return callName
//     }
// } 
// console.log(p.call("zhangsan"))
 
//多个泛型
// function chhc <A,B>(con:[A,B]) :[B,A] {
//     return [con[1],con[0]]
// }
// console.log(chhc(["a",2]))

//类
// class Maths<T>{
//     private list : T[] = [];
//     add(a:T){
//         this.list.push(a)
//     }
//     public get getList(){
//         return this.list
//     }
// }
// let m = new Maths<number>()
// m.add(1)
// m.add(5)
// console.log(m.getList)

//type
// type t<T> = (name:T)=>T

// let test:t<string> = function(name:string) {
//     return name
// }
// console.log(test("wangcai"))









export {}