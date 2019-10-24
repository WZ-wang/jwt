import * as types from "../actions-types"
export default function couner(state={counter:55},action){
    switch (action.type) {
        case types.SUB:
            return {
                counter: state.counter - action.payload
            }
        case types.ADD:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}