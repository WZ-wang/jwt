import * as types from "../actions-types"
export default function couner(state=[],action){
    switch (action.type) {
        case types.GETLIST:
            return state=action.payload
        default:
            return state
    }
}