import * as types from "../actions-types"
export default function couner(state={counter:5},action){
    switch (action.type) {
        case types.SUBTIME:
            return {
                counter: state.counter - 1
            }   
        case types.ADDTIME:
            return {
                counter: state.counter + 1
            }
        default:
            return state
    }
}