import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import {Button, Form, Input} from 'antd'
import Long

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {

    const {login, user} = useAuth()

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
                    <LongButton htmlType={'submit'} type="primary">登陆</LoButton>
                </Form.Item>
                
        </Form>
    }