// let fs = require("fs")
// function* read(){ 
//     let a = yield "hello1"
//     console.log(a) //2
//     let b = yield "hello2"
//     console.log(b) //3
//     let c = yield "hello3"
//     console.log(c) //4
// }
// // 如何给a,b,c赋值
// let it = read();
// console.log(it.next(1))  //{ value: 'hello1', done: false }
// console.log(it.next(2))  //{ value: 'hello2', done: false }
// console.log(it.next(3))  //{ value: 'hello3', done: false }
// console.log(it.next(4))  //{ value: undefined, done: true }


// let fs = require("fs").promises
// let path = require("path")
// function* read(){ 
//    let res = yield fs.readFile(path.join(__dirname,"./name.txt"),"utf-8")
//    let res2 = yield fs.readFile(path.join(__dirname,res),"utf-8")
// }
// let it = read();
// Promise.resolve(it.next().value)
// .then(data=>Promise.resolve(it.next(data).value)
// .then(data=>console.log(data)))





// let fs = require("fs").promises
// let co = require("co")
// let path = require("path")
// function* read(){ 
//    let res = yield fs.readFile(path.join(__dirname,"./name.txt"),"utf-8")
//    let res2 = yield fs.readFile(path.join(__dirname,res),"utf-8")
//    return res2  //res2就是要的结果
// }
// co(read).then(data=>console.log(data)) //此时需要给生成器指定一个返回值





// async await
let fs = require("fs").promises
let path = require("path")
async function read(){ 
   let res = await fs.readFile(path.join(__dirname,"./name.txt"),"utf-8")
   let res2 = await fs.readFile(path.join(__dirname,res),"utf-8")
   return res2
}
read().then(data=>console.log(data))