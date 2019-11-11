import * as types from "../type-actions"
import {State} from "../type/state"
import {Action} from "../actions/counter"
export default function(state:State={number:0},action:Action){
    switch (action.type) {
        case types.ADD:
            return {...state,number:state.number+1}
        case types.SUB:
            return {...state,number:state.number-1}
        default:
            return state
    }
}