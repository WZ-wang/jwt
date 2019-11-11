import React, { Component } from 'react';
import { connect } from "react-redux"
import actions from "../../store/actions/profile"
import { typeReducer } from "../../store/reducers"
import { profileType } from "../../store/reducers/profile"
import { RouteComponentProps } from "react-router"
import Header from "../../components/header"
import { Alert, Button, Descriptions } from 'antd';
import "./index.less"
import axios from "axios"
type StateProps = ReturnType<typeof mapState>
type DispathProps = typeof actions
type RouterProps = RouteComponentProps
type Props = StateProps & RouterProps & DispathProps & {
    children?: any
}
class Profile extends Component<Props> {
    loginOut() {
        axios.get("http://localhost:9000/logout").then(res => {
            console.log(res)
            this.props.go("/login")
        })
    }
    render() {
        console.log(this.props)
        let main;
        if (this.props.data) {
            main = (
                <div className="userInfo">
                    <Descriptions title="当前用户信息">
                        <Descriptions.Item label="用户名">{this.props.data.username}</Descriptions.Item>
                        <Descriptions.Item label="邮箱">{this.props.data.email}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{this.props.data.phone}</Descriptions.Item>
                    </Descriptions>
                    <Button type="danger" onClick={() => this.loginOut()} block style={{ margin: ".3rem 0" }}>
                        退出登录
                    </Button>
                </div>
            )
        } else {
            main = (
                <div>
                    <Alert
                        message="当前还没登录"
                        description="请选择登录或注册"
                        type="warning"
                    />
                    <Button type="primary" onClick={() => this.props.go("/login")} block style={{ margin: ".3rem 0" }}>
                        登录
                    </Button>
                    <Button type="primary" onClick={() => this.props.go("/register")} block style={{ margin: ".3rem 0" }}>
                        注册
                    </Button>
                </div>
            )
        }
        return (
            <div>
                <Header history={this.props.history}>个人中心</Header>
                {main}
            </div>
        );
    }
}
let mapState = (state: typeReducer): any => ({ ...state.profile, data: { ...state.login.data }})
export default connect(mapState, actions)(Profile);