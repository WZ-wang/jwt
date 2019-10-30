interface Pig{
    name:string
}

interface Dog{
    name:string
}

function isDog(anmail:Dog|Pig):anmail is Dog {
    return anmail.name == "wangcai"
}
let dog:Pig={name:"wangcai"}
function test(d:Dog) {
    if(isDog(d)){
        return "dog"
    }else{
        return "pig"
    }
}

console.log(test(dog))

export {}