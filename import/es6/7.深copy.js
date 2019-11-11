let obj = {name:"wangcai",age:{number:100}}
function getNewObj(obj) {
    if(typeof obj === "object"){
        let newObj = {}
        for (let key in obj){
            newObj[key] = getNewObj(obj[key])
        }
        return newObj
    }else{
        return obj
    }
}
console.log(getNewObj(obj))