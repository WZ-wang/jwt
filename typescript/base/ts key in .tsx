//keyof
// interface People{
//     name:string,
//     age:number
// }

// type PeopleKey = keyof People
// function getUser(p:People,key:PeopleKey){
//     console.log(p[key])
// }
// let peo:People = {
//     name:"wangcai",
//     age:100
// } 
// getUser(peo,"name")
//in

// interface People{
//     name:string,
//     age:number
// }

// type PeopleKey = {
//     [key in keyof People]:People[key]
// }

// function getUser(p:PeopleKey){
//     console.log(p)
// }
// let peo:People = {
//     name:"wangcai",
//     age:100
// } 

// getUser(peo)


//ReturnType
interface People{
    name:string,
    age:number
}
function getUser(p:People):People{
    return p
}
let peo:People = {
    name:"wangcai",
    age:100
} 
getUser(peo)
type rPeople = ReturnType<typeof getUser>
let test:rPeople = { name:"wangcai",age:100}

export {}