import * as types from "../type-action"
import { AnyAction } from "redux"

export interface homeType {
    currentCategory: string,
    swipers:Array<swiper>
}
export interface swiper{
    url:string
}
let initState: homeType = {
    currentCategory: "all",
    swipers:[]
}

export default function (state: homeType = initState, action: AnyAction): homeType {
    switch (action.type) {
        case types.HOME_CATEGORY:
            return { ...state, currentCategory: action.payload }
        case types.GET_SWIPER:
            return { ...state, swipers: action.payload.data }
        default:
            return state
    }
}