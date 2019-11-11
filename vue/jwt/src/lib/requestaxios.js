import axios from "axios";
import store from "../store"
import {getLocal} from "./local"

class AxiosRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV == "production" ? "/" : "http://localhost:3000"
        this.timeout = 3000;
        this.requestTimes = {}
    }
    maxinit(options) {
        return {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
    }
    setInterceptor(instance,url){
        instance.interceptors.request.use(config=>{
            config.headers.Authorization = getLocal("token")
            if(!this.requestTimes){
                store.commit("loading")
            }
            this.requestTimes[url] = url
            return config
        })
        instance.interceptors.response.use(res=>{
            delete this.requestTimes[url]
            if(!this.requestTimes){
                store.commit("unloading")
            }
            return res.data
        })
    }

    request(options) {
        let instance = axios.create()
        this.setInterceptor(instance,options.url)
        let config = this.maxinit(options)
        return instance(config)
    }
}
export default new AxiosRequest;