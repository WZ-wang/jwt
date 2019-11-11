//并集
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function bj(arr1, arr2) {
//     let set = new Set([...arr1, ...arr2])
//     return Array.from(set)
// }
// console.log(bj(arr1,arr2)) //[ 1, 2, 3, 4, 5, 6 ]

//交集
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// function jj(arr1, arr2) {
//     let set1 = new Set(arr1)
//     let set2 = new Set(arr2)
//     return Array.from(set1).filter(item=>set2.has(item))
// }
// console.log(jj(arr1,arr2))  //[ 3, 4 ]

//差集
let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]
function jj(arr1, arr2) {
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)
    return Array.from(set1).filter(item=>!set2.has(item))
}
console.log(jj(arr1,arr2))  //[ 1, 2 ]