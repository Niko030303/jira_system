import React from "react"
export const List = ({list, users}) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr>
                    <td>{project.name}</td>
                    <td>{project.personId}</td>
                </tr>)
            }
        </tbody>
    </table>

}