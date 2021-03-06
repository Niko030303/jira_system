import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div style={{display:'flex', justifyContent:'center'}}>
            
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登陆' : '注册'}</button>
    </div>
}