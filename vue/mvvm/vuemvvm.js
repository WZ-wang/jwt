class Dep{
    constructor(){
        this.subs = [] //存放观察者
    }
    addSub(){
        this.subs.push(watcher)
    }
    change(){
        this.subs.forEach(watcher=>watcher.update())
    }
}

class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldVal = this.get()
    }
    get(){
        Dep.target = this
        let value = ComplierUtil.getVal(this.vm,this.expr)
        Dep.target = null
        return value
    }
    update(){
        let newVal = ComplierUtil.getVal(this.vm,this.expr)
        if(newVal != this.oldVal){
            this.cb(newVal)
        }
    }
}


class Complier {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        let fargment = this.node2fragment(this.el)
        this.complie(fargment)
        this.el.appendChild(fargment)
    }
    isElementNode(node) {
        return node.nodeType == 1 //判断node是不是一个元素
    }
    node2fragment(node) { //文档碎片
        let fargment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = node.firstChild) {
            fargment.appendChild(firstChild)
        }
        return fargment;
    }
    complie(node) { //替换vue数据
        let childNodes = node.childNodes;
        // console.log(childNodes)
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) { //元素节点
                this.complieElement(child)
                this.complie(child)
            } else { //文本节点
                this.complieText(child)
            }
        })
    }
    complieElement(node) {
        let attributes = node.attributes;
        [...attributes].forEach(item => {
            let {
                name,
                value: expr
            } = item; ///?
            if (this.isVue(name)) {
                let [, met] = name.split("-")
                ComplierUtil[met](node, expr, this.vm)
            }
        })
    }
    complieText(node) {
        let content = node.textContent
        let reg = /\{\{(.+?)\}\}/;
        if (reg.test(content)) {
            ComplierUtil["text"](node, content, this.vm)
        }
    }
    isVue(attrName) {
        return attrName.startsWith("v-")
    }
}
ComplierUtil = { //处理vue指令
    getVal(vm, expr) {
        return expr.split(".").reduce((data, current) => {
            return data[current]
        }, vm.$data)
    },
    setVal(vm,expr,value){
        expr.split(".").reduce((data, current,index,arr)=>{
            if(index==arr.length-1){
                return data[current] = value
            }
            return data[current]
        },vm.$data)
    },
    model(node, expr, vm) {
        let f = this.updater["modelUpdata"]
        new Watcher(vm,expr,(newVal)=>{
            f(node,newVal)
        })
        node.addEventListener("input",(e)=>{
            let value = e.target.value
            this.setVal(vm,expr,value)
        })
        let r = this.getVal(vm, expr)
        f(node, r)
    },
    text(node, expr, vm) {
        let f = this.updater["textUpdata"]
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...argu) => {
            new Watcher(vm,argu[1],(newVal)=>{
                f(node,this.getVal(vm,argu[1]))
            })
            return this.getVal(vm, argu[1])
        })
        f(node, content)
    },
    updater: {
        modelUpdata(node, value) {
            node.value = value //元素节点数据的替换
        },
        textUpdata(node, value) {
            node.textContent = value
        }
    }
}
class Observer {
    constructor(data) {
        this.observer(data)
    }
    observer(data) {
        if (data && typeof data == "object") {
            for (let key in data) {
                this.defindReactive(data, key, data[key])
            }
        }
    }
    defindReactive(obj, key, value) {
        this.observer(value)
        let dep = new Dep()
        Object.defineProperty(obj, key, {
            get() {
                Dep.target&&dep.subs.push(Dep.target)
                return value
            },
            set:(newVal)=>{
                if(newVal != value){
                this.observer(newVal)
                    value = newVal
                    dep.change()
                }
            }
        })
    }
}

class Vue { //创建一个vue实例
    constructor(options) {
        this.$data = options.data
        this.$el = options.el
        let computed = options.computed
        if (this.$el) { //判断是否存在el，存在就可以将html传给编译模板
            new Observer(this.$data)
            this.proxyVm(this.$data)
            for (let key in computed){
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                        return computed[key].call(this)
                    }
                })
            }
            new Complier(this.$el, this) //编译模板
        }
    }
    proxyVm(data){
        for (let key in data){
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                }
            })
        }
    }
}