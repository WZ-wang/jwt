import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component, ReactNode } from 'react';
import "./index.less"
import { connect } from "react-redux"
import actions from "../../store/actions/login"
import { typeReducer } from "../../store/reducers"
import { loginType } from "../../store/reducers/login"
import { RouteComponentProps } from "react-router"
import Header from "../../components/header"
import { FormComponentProps } from 'antd/lib/form';
import axios from "axios"
type StateProps = ReturnType<typeof mapState>
type DispathProps = typeof actions
type RouterProps = RouteComponentProps
type Props = StateProps & RouterProps & FormComponentProps & DispathProps & {
    children?: ReactNode,
}
class Login extends Component<Props>{
    login = () => {
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post("http://localhost:9000/login",values).then(res=>{
                   if(res.data.code===0){
                       this.props.addUser(res.data)
                       this.props.go("/")
                   }
                })
            }
          });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header history={this.props.history}>登录</Header>
                <div className="form">
                    <Form onSubmit={this.login} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
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
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <a href="http://localhost:8080/?#/register">立即注册</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }

}
const WrappedNormalLoginForm = Form.create({ name: '登录' })(Login);
let mapState = (state: typeReducer): loginType => state.login
export default connect(mapState, actions)(WrappedNormalLoginForm);