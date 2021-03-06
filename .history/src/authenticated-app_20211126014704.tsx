
import React from "react"
import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"

export const AuthenticatedApp = () => {
    const {logout} = useAuth()

    return <div>
        <Button onClick={logout}>登出</Button>
        <ProjectListScreen />
    </div>
}