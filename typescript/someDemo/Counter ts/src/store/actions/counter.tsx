import * as types from "../type-actions"
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
    }
}