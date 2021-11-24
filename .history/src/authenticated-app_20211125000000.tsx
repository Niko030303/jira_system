import React from "react"
import { ProjectListScreen } from "./screens/project-list"

export const AuthenticatedApp = () => {
    const {logout} = useAuth()

    return <div>
        <ProjectListScreen />
    </div>
}