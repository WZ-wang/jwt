import * as types from "../type-actions"
import {push} from "connected-react-router"
interface ADD{
    type:typeof types.ADD
}
interface SUB{
    type:typeof types.SUB
}

export type Action = ADD | SUB
export default{
    add():ADD{
        return {
            type:types.ADD
        }
    },
    sub():SUB{
        return {
            type:types.SUB
        }
    },
    go(path:string):any{
        return push(path)
    }
}