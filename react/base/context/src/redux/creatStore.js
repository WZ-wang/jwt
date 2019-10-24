export default function createStore(reducer) {
    let state;
    let listeners =[]
    function getState() {
        return state
    }
    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(item=>item())
    }
    //初始化state
    dispatch({
        type: "@@dslda"
    })
    //订阅
    function subscribe(listener){
        listeners.push(listener)
        // 返回值是取消订阅
        return function(){
            listeners = listeners.filter(item=>item!=listener)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}