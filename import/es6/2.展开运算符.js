let arr = [1,2,3]
let newArr = [...arr]
console.log(newArr)// [1,2,3]  数组内数据是基本数据时是深copy，即数据存在栈里面
// let obj = {age:100}
// let arr1 = [obj,5,10]
// let newArr1 = [...arr1]
// console.log(newArr1)  //[{ age: 100 } ,5, 10]
// obj.age = 6666
// console.log(newArr1)  //[ { age: 6666 }, 5, 10 ]  数组内数据存在堆里面的时候是浅copy 对象一样
// 对象也是这样 数组里splice也是这种情况

//对象里要想不受影响可以这样写
// let obj = {name:"wangcai",age:{number:100}}
// let newObj = {...obj,age:{...obj.age}}
// console.log(newObj)  //{ name: 'wangcai', age: { number: 100 } }
// obj.age = 6666
// console.log(newObj) //{ name: 'wangcai', age: { number: 100 } }

//采用JSON.parse(JSON.stringify(obj))
let obj = {name:"wangcai",age:{number:100}}
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)  //{ name: 'wangcai', age: { number: 100 } }
obj.age = 6666
console.log(newObj)  //{ name: 'wangcai', age: { number: 100 } }