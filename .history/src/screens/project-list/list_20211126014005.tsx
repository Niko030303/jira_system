import React from "react"
import { User } from "./search-panel"
import { Table } from "antd"

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string
}

interface ListProps {
    list: Project[];
    users: User[]
}

export const List = ({list, users}: ListProps) => {
    return <Table pagination={false} columns={[{
        title:'名称',
        dataIndex: 'name'
    },{
        title:'负责人',
        render(value, project)
    }]} dataSource={list}>
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    
                </tr>)
            }
        </tbody>
    </table>

}