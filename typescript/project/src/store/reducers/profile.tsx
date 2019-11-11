import * as types from "../type-action"
import {AnyAction} from "redux"
export interface profileType {
}
let initState:profileType = {
}

export default function (state: profileType=initState, action: AnyAction): profileType {
    switch (action.type) {
        default:
            return state
    }
}