import axios from "../lib/axiosRequest"

export const getCategory = ()=>{  //影片分类
    return axios.request({
        url:"/category"
    })
}
export const getSlide = ()=>{  //轮播图数据
    return axios.request({
        url:"/slides"
    })
}
export const getMovie = (init)=>{  //电影数据
    return axios.request({
        url:`/lessonList/${init.id}?size=${init.size}&offset=${init.offset}`
    })
}