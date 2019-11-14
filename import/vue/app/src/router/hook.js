import store from "@/store"
export default{
    cancelToken:(to,from,next)=>{
        store.commit("removeRequest")
        next()
    },
    position:async (to,from,next)=>{
        //判断是否需要登录
        // console.log(to)
        let needLogin = to.matched.some(item=>item.meta.needLogin)
        // console.log(needLogin)
        if(!store.state.hasPass){
            //验证token
            let res = await store.dispatch("validate")
            if(needLogin){
                if(res){
                    next()
                }else{
                    next("/login")
                }
            }else{
                next()
            }
        }else{
            next()
        }
        
    }
}