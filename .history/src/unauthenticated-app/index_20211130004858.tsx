import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"
import { Button, Card } from "antd"
import styled from "@emotion/styled"


export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <Container>
            <Card>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登陆' : '注册'}</Button>
            </Card>
        
    </Container>
}


const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0%.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0) 0 0 ;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`