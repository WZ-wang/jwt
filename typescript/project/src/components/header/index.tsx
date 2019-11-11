import React from "react"
import "./index.less"
import {Icon} from "antd"

interface Props{
    children:any,
    history:any
}
export default function(props:Props){
    return(
        <div className="head">
            <Icon type="left" onClick={()=>props.history.goBack()}></Icon>
            <p>{props.children}</p>
        </div>
    )
}