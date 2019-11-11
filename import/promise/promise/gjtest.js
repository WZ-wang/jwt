// let Promise = require("./promise")



let p = new Promise((resolve,reject)=>{
    resolve("mmm")
})
.then(data=>console.log("data2=>>",data),err=>console.log("err2=>>",err))
.then(data=>console.log("data1=>>",data),err=>console.log("err1=>>",err))







// let fs = require("fs")

// function read(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf8", (err, res)=> {
//             if (err) reject(err)
//             resolve(res)
//         })
//     })
// }

// read("info.txt")
// .then(data=>console.log("data1=>>",data),err=>console.log("err1=>>",err))
// .then(data=>console.log("data2=>>",data),err=>false)
// .then(data=>console.log("data3=>>",data),err=>console.log("err3=>>",err))












// .then(data=>console.log("data1=>>",data),err=>console.log("err1=>>",err))
// .then(data=>console.log("data2=>>",data),err=>false)
// .then(data=>console.log("data3=>>",data),err=>console.log("err3=>>",err))
// data1=>> age.txt
// data2=>> undefined
// data3=>> undefined







// .then(data=>console.log("data1=>>",data),err=>console.log("err1=>>",err))//data1=>> age.txt
// .then(data=>console.log("data2=>>",data),err=>console.log("err2=>>",err))//data2=>> undefined