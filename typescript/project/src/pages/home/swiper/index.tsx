import React, { Component } from 'react';
import { Carousel } from 'antd';
import {swiper} from "../../../store/reducers/home"
import "./index.less"
interface Props{
    getSwiper:any,
    swipers:Array<swiper>
}
class Swiper extends Component<Props> {
    componentDidMount(){
        this.props.getSwiper()
        console.log(this.props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Carousel>
                   {
                       this.props.swipers.map((item,index)=>(
                           <div key={index}>
                               <img src="http://pic27.nipic.com/20130313/9252150_092049419327_2.jpg" alt=""/>
                           </div>
                       ))
                   }
                </Carousel>
            </div>
        );
    }
}

export default Swiper;