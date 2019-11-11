let obj = {
    name: "wangcai",
    age: [1, 2]
}

function updateView() {
    console.log("视图更新")
}

function observe(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj
    }
    if(Array.isArray(obj)){
        Object.setPrototypeOf(obj, copyArray)
        for(let i=0; i<obj.length; i++){
            let item = obj[i];
            observe(item)
        }
    }else{
        for (let key in obj) {
            defineRative(obj, key, obj[key])
        }
    }
    
}

function defineRative(obj, key, value) {
    observe(value)
    Object.defineProperty(obj, key, {
        get() {
            console.log("获得数据")
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                observe(newValue)
                value = newValue
                updateView()
            }
        }
    })
}

let array = Array.prototype
let copyArray = Object.create(array)
;['push','shift','pop','splice'].forEach(method=>{
    copyArray[method] = function(...argu){
        updateView()
        array[method].call(this,...argu)
    }
})


observe(obj)
console.log(obj.age.push(3))