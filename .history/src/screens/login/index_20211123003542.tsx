import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {

    const {login, user} = useAuth()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }

    return <form onSubmit={handleSubmit}>
        {
            user
        }
        登陆成功，用户名：{user?.name}
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={"username"}/>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={"password"}/>
        </div>
        <button type="submit">注册</button>
    </form>
}