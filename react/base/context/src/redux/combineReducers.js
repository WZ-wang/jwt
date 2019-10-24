export default function(reduers){
    return function(state={},action){
        let obj = {}
        for(let key in reduers){
            obj[key] = reduers[key](state[key],action)
        }
        return obj
    }
}