let res = [1,2]
let [a,b] = res
console.log(a,b) //1 2
res[0] = 666
console.log(a,b)//1 2  数组内数据是基本数据时是深copy，即数据存在栈里面
let obj = {age:100}
let [o,x] = [obj,5]
console.log(o,x)  //{ age: 100 } 5
obj.age = 6666
console.log(o,x)  //{ age: 6666 } 5  数组内数据存在堆里面的时候是浅copy 对象一样
let arr = [1,2,3]

let [a,...argus] = arr
console.log(a,argus)  //1 [ 2, 3 ]
