import { Button, Form, Input } from "antd";
import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {

    const {register, user} = useAuth()

    const handleSubmit = (values: { username: string, password: string}) => {
        
        login(values)
    }

    return <Form onFinish={handleSubmit}>
                <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                
                    {/* <label htmlFor="username">用户名</label> */}
                    <Input placeholder={'用户名'} type="text" id={"username"}/>
                </Form.Item>
                <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
                    {/* <label htmlFor="password">密码</label> */}
                    <Input placeholder={'密码'} type="password" id={"password"}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'} type="primary">登陆</Button>
                </Form.Item>
                
        </Form>
    }