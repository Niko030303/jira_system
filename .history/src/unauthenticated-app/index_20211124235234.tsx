import { useState } from "react"
import {Regis}

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div>
        {
            isRegister ? <ResgisterScreen />
        }
    </div>
}