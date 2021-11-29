import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import {Form, Input} from 'antd'

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
                <Form.Item name={'username'}>
                
                    <label htmlFor="username">用户名</label>
                    <Input placeholder={'用户名'} type="text" id={"username"}/>
                </Form.Item>
                <Form.Item>
                    <label htmlFor="password">密码</label>
                    <input type="password" id={"password"}/>
                </Form.Item>
                <button type="submit">登陆</button>
        </Form>
    }