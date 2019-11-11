let Promise = require("./promise")
let promise = new Promise((resolve,reject)=>{
    // resolve("买")
    reject("没钱")
    // reject("没钱")
    // throw new err()
})

promise.then(data=>console.log("data1=>>",data),err=>console.log("err1=>>",err))