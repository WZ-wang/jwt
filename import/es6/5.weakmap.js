// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
let weakmap = new WeakMap()

let obj ={age:100}

weakmap.set(obj,555)
console.log(weakmap)
obj.age=9999
console.log(weakmap)

