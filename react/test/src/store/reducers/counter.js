import * as types from "../type-actions"

export default function (state={number:0},action){
    switch (action.type) {
        case types.ADD:
            return { number:state.number+1}
        case types.SUB:
            return { number:state.number-1}
        default:
            return state
    }
}