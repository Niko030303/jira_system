import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import {Button, Form, Input} from 'antd'

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {

    const {login, user} = useAuth()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }

    return <Form onSubmit={handleSubmit}>
                <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
                
                    <label htmlFor="username">用户名</label>
                    <Input placeholder={'用户名'} type="text" id={"username"}/>
                </Form.Item>
                <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
                    <label htmlFor="password">密码</label>
                    <Input placeholder={'密码'} type="password" id={"password"}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'} type="primary">登陆</Button>
                </Form.Item>
                
        </Form>
    }