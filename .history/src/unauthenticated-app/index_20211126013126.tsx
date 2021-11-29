import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <div style={{display:'flex', justifyContent:'center'}}>
            <Card>

            </Card>
        
    </div>
}