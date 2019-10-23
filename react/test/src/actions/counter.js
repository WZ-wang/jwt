export function add(){
    return {
        type:"ADD"
    }
}

export function sub(){
    return {
        type:"SUB"
    }
}

export function asyncAdd(){
    return function(dispatch,getState){
        setTimeout(() => {
            dispatch(add())
        }, 2000);
    }
}