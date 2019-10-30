"use strict";
exports.__esModule = true;
function isDog(anmail) {
    return anmail.name == "wangcai";
}
var dog = { name: "wangcai" };
function test(d) {
    if (isDog(d)) {
        return "dog";
    }
    else {
        return "pig";
    }
}
console.log(test(dog));
