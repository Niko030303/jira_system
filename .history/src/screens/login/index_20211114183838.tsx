import React from "react";


export const LoginScreen = () => {
    return <form>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username"/>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id="username"/>
        </div>

    </form>
}