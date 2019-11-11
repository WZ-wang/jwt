import * as types from "../type-action"
import {AnyAction} from "redux"

export interface mineType {
}
let initState:mineType = {
}

export default function (state: mineType=initState, action: AnyAction): mineType {
    switch (action.type) {
        default:
            return state
    }
}