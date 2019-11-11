import * as types from "../type-action"
import {AnyAction} from "redux"
import {getSwiper} from "../../api/home"
export default{
    setCategory(payload:string):AnyAction{
        return {
            type:types.HOME_CATEGORY,
            payload
        }
    },
    getSwiper(){
        return {
            type:types.GET_SWIPER,
            payload:getSwiper()
        }
    }
}