import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component, ReactNode } from 'react';
import "./index.less"
import { connect } from "react-redux"
import actions from "../../store/actions/home"
import { typeReducer } from "../../store/reducers"
import { homeType } from "../../store/reducers/home"
import { RouteComponentProps } from "react-router"
import Header from "../../components/header"
import { FormComponentProps } from 'antd/lib/form';
import axios from "axios"


type StateProps = ReturnType<typeof mapState>
type DispathProps = typeof actions
type RouterProps = RouteComponentProps
type Props = StateProps & RouterProps & DispathProps & FormComponentProps & {
    children?: ReactNode,
}
class Register extends Component<Props>{
    register = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post("http://localhost:9000/register",values).then(res=>{
                    console.log(res)
                })
            }
          });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header history={this.props.history}>注册</Header>
                <div className="form">
                    <Form onSubmit={this.register} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入邮箱"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your phone!' }],
                            })(
                                <Input
                                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入手机号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                            <a href="http://localhost:8080/?#/login">返回登录</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: '注册' })(Register);
let mapState = (state: typeReducer): homeType => state.home
export default connect(mapState, actions)(WrappedNormalLoginForm);