let PEDDING = "PEDDING"
let RESOLVED = "RESOLVED"
let REJECTED = "REJECTED"

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError("Chaining cycle detected for promise #<Promise>"))
    }
    let called;
    if ((typeof x === "object" && x !== null) | typeof x === "function") {
        try {
            let then = x.then
            if (typeof then === "function") {
                then.call(x,y=>{
                    if(called) return;
                    called=true
                    resolvePromise(promise2,y,resolve,reject)
                },err=>{
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if(called) return;
            called=true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

class Promise {
    constructor(extor) {
        this.value = undefined
        this.err = undefined
        this.stuas = PEDDING
        this.onrejectCallback = []
        this.onresolveCallback = []
        let resolve = (value) => {
            if (this.stuas === PEDDING) {
                this.value = value
                this.stuas = RESOLVED
                this.onresolveCallback.forEach(item => item())
            }
        }
        let reject = (err) => {
            if (this.stuas === PEDDING) {
                this.err = err
                this.stuas = REJECTED
                this.onrejectCallback.forEach(item => item())
            }
        }
        try {
            extor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onfufilled, onreject) {
        onfufilled = typeof onfufilled == "function" ? onfufilled : value=>value
        onreject = typeof onreject == "function" ? onreject : err=>{throw err}
        let promise2 = new Promise((resolve, reject) => {
            if (this.stuas === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onfufilled(this.value)
                        resolve(x)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }
            if (this.stuas === REJECTED) {
                try {
                    let x = onreject(this.err)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }
            if (this.stuas === PEDDING) {
                this.onresolveCallback.push(() => {
                    try {
                        let x = onfufilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
                this.onrejectCallback.push(() => {
                    try {
                        let x = onreject(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }
}

Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
      dfd.resolve = resolve;
      dfd.reject = reject;
    });
    return dfd;
  }

module.exports = Promise