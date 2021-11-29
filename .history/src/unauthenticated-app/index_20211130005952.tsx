import { useState } from "react"
import { RegisterScreen } from "./register"
import { LoginScreen } from "./login"
import { Button, Card, Divider } from "antd"
import styled from "@emotion/styled"
import logo from '../assets/'

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    return <Container>
            <ShadowCard>
                {isRegister ? <RegisterScreen /> : <LoginScreen />}
                <Divider />
                <a onClick={() => setIsRegister(!isRegister)}>{isRegister ? '已经有账号了？直接登陆' : '没有账号？注册新账号'}</a>
            </ShadowCard>
        
    </Container>
}

const Header = styled.header`
    background: url();
`

const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0%.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`