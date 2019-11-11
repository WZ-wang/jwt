import React, { Component } from 'react';
import "./index.less"
import { Icon } from "antd"
type Props = {
    currentCategory:string,
    setCategory:any
}
interface State{
    show:boolean
}

class HomeHeader extends Component<Props,State> {
    state = {show:false}
    setHomeCategory = (event:React.MouseEvent<HTMLUListElement>)=>{
        let target:EventTarget  = event.target
        let payload = (target as HTMLUListElement).dataset.type
        this.setState({show:false},()=>{
            this.props.setCategory(payload)
        })
    }
    render() {
        return (
            <div className="header">
                <div>
                    <h1>猫眼电影</h1>
                    <Icon onClick={()=>{this.setState({show:!this.state.show})}} type="bars"></Icon>
                </div>
                <ul onClick={this.setHomeCategory} style={this.state.show?{}:{display:"none"}}>
                    <li data-type="all" className={this.props.currentCategory=="all"?"active":""}>全部影片</li>
                    <li data-type="coming" className={this.props.currentCategory=="coming"?"active":""}>即将上映</li>
                    <li data-type="now" className={this.props.currentCategory=="now"?"active":""}>正在热映</li>
                </ul>
            </div>
        );
    }
}

export default HomeHeader;