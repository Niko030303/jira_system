import { useState } from "react"
import {Re}

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div>
        {
            isRegister ? <ResgisterScreen />
        }
    </div>
}