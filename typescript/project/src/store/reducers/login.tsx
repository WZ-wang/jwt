import * as types from "../type-action"
import {AnyAction} from "redux"

export interface loginType {

}
let initState:loginType = {

}

export default function (state: loginType=initState, action: AnyAction): loginType {
    switch (action.type) {
        case types.USER_INFO:
            return {...state,...action.payload}
        default:
            return state
    }
}