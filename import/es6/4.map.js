// Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined。
let map = new Map([["name","wangcai"],["age",100]])
console.log(map)    //Map { 'name' => 'wangcai', 'age' => 100 }
//此时用for of 可以将键值对以数组返回

for(value of map){
    console.log(value)  //[ 'name', 'wangcai' ]  [ 'age', 100 ]
}

//一些常见的方法
// Map.prototype.get(key)
// 返回键对应的值，如果不存在，则返回undefined。

// map.set("age",555)
// console.log(map)  //Map { 'name' => 'wangcai', 'age' => 555 } 值存在就可以替换

map.set("score",999)
console.log(map) //Map { 'name' => 'wangcai', 'age' => 555, 'score' => 999 } 值不存在就相当于添加

let obj = {adress:"beijing"}
map.set(obj,777)
console.log(map)   //Map {'name' => 'wangcai','age' => 100,'score' => 999,{ adress: 'beijing' } => 777 }
obj.adress = "shanghai"
console.log(map)  //Map {'name' => 'wangcai','age' => 100,'score' => 999,{ adress: 'shanghai' } => 777 }
obj = null
console.log(map)  //Map {'name' => 'wangcai','age' => 100,'score' => 999,{ adress: 'shanghai' } => 777 }
//当传递的是对象时，会造成内存泄漏 这种可以用weakmap来解决

