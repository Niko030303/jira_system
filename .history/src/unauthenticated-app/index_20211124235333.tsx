import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div>
        {
            isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <button>切换到{isRegister ? }</button>
    </div>
}