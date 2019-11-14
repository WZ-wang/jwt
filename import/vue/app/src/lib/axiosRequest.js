import axios from "axios"
import {Toast} from "cube-ui"
import store from "@/store"
class axiosRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV === "product" ? "/" : "http://localhost:3000/api"
        this.timeout = 3000
        this.getUrls = {}
        this.toast = Toast.$create({
            time: 0,
            txt: '加载中...'
        })
    }
    setInterceptors(instance, url) {
        instance.interceptors.request.use(config => {
            config.headers.token = localStorage.getItem("token")
            if(Object.keys(this.getUrls).length === 0){
                this.toast.show()
            }
            //将每个请求保存,在别的页面直接取消不在请求
            let CancelToken = axios.CancelToken
            config.cancelToken = new CancelToken(function executor(c){
                store.commit("setRequest",c)
            })
            this.getUrls[url] = url
            return config
        }, err => {
            return Promise.reject(err)
        })
        instance.interceptors.response.use(response => {
            delete this.getUrls[url]
            if(Object.keys(this.getUrls).length === 0){
                this.toast.hide()
            }
            if (response.data.code === 0) {
                return response.data.data
            }
        }, err => {
            if(Object.keys(this.getUrls).length === 0){
                this.toast.hide()
            }
            return Promise.reject(err)
        })
    }
    request(options) {
        let instance = axios.create()
        this.setInterceptors(instance, options.url)
        let config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout
        }
        return instance(config)
    }
}

export default new axiosRequest