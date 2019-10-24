function bindActionCreators(action,dispatch){
    return function (...arg){
       return dispatch(action(...arg))
    }
}

export default function (action,dispatch){
    if(typeof action == "function"){
        bindActionCreators(action,dispatch)
    }
    let obj = {}
    for (let key in action){
        obj[key]=bindActionCreators(action[key],dispatch)
    }
    return obj
}