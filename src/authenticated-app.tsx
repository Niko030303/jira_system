import React from "react"
import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"
import { Button } from "antd"
import styled from "@emotion/styled"


/**
* grid和flex各自的应用场景
* 1. 要考虑，是一维布局，还是二维布局
* 一般来说，一维布局用flex，二维布局用grid
* 从内容出发：你先有一组内容（数量一般不固定），然后希望他们均匀地分布在容器中，由内容自己的大小决定占据的空间
* 从布局出发：先规划网格（数量一般比较固定），然后再把元素往里填充
* 从内容出发，用flex
* 从布局出发，用grid
*/

export const AuthenticatedApp = () => {
    const {logout} = useAuth()

    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <h3>Logo</h3>
                    <h3>Logo</h3>
                    <h3>Logo</h3>
                </HeaderLeft>
                <HeaderRight>
                    <Button onClick={logout}>登出</Button>
                </HeaderRight>
            </Header>
            <Main>
                <ProjectListScreen />
            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr 6rem;
    height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderRight = styled.div`
`;

const Main = styled.main`
    grid-area: main;
`;