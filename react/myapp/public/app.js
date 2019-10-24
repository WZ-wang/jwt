let initState = {
    counter: 66,
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "SUB":
            return {
                counter: state.counter - 1
            }
        case "ADD":
            return {
                counter: state.counter + 1
            }
        default:
            return state
    }
}

function createStore(reducer) {
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
            listeners =listeners.filter(item=>item!=listener)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
let store = createStore(reducer)

function render() {
    renderContent(store.getState())
}
render()
let unsubscribe = store.subscribe(render)
let add = document.getElementById("add")
add.addEventListener("click", () => {
    store.dispatch({
        type: "ADD"
    })
    unsubscribe()
})
let sub = document.getElementById("sub")
sub.addEventListener("click", () => {
    store.dispatch({
        type: "SUB"
    })
})

function renderContent(state) {
    let content = document.getElementById("show")
    content.innerHTML = state.counter
}