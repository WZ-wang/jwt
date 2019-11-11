let arr=[1,5,2,6,5,2]
let set = new Set(arr) //里面值唯一，可以进行数组去重 arr必须是iterable这样的的可迭代的对象，里面的值可以任意
console.log(set)  //Set { 1, 5, 2, 6 }

//一些常见的方法
set.add(8888)
console.log(set)  //Set { 1, 5, 2, 6, 8888 }
console.log(set.has(1))  //true
set.delete(5)
console.log(set)  //Set { 1, 2, 6, 8888 }
set.forEach(item=>console.log(item))
set.clear()
console.log(set)  //Set {}