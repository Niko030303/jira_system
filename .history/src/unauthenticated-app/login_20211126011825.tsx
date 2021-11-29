import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import {Form} from 'antd'

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
                    <Input type="text" id={"username"}/>
                </Form.Item>
                <div>
                    <label htmlFor="password">密码</label>
                    <input type="password" id={"password"}/>
                </div>
                <button type="submit">登陆</button>
        </form>
    }