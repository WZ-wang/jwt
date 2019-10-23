import axios from "axios"
export function getFilmList(){
    return {
        type:"GETFILMLIST"
    }
}

export function getFilm(){
    return function(dispatch,getState){
        axios.get("http://m.maoyan.com/ajax/movieOnInfoList?token=").then(res=>{
            console.log(res)
        })
    }
}