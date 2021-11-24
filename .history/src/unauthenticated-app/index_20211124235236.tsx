import { useState } from "react"
import { RegisterScreen } from "./register"

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div>
        {
            isRegister ? <ResgisterScreen />
        }
    </div>
}