import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"
import { Button, Card } from "antd"
import styled from "@emotion/styled"


export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div style={{display:'flex', justifyContent:'center'}}>
            <Card>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登陆' : '注册'}</Button>
            </Card>
        
    </div>
}


const Cont