import React from "react"
import { User } from "./search-panel"
import { Table } from "antd"
import { spawn } from "child_process"

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
        sor
    },{
        title:'负责人',
        render(value, project){
            return <span>
                <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </span>
        }
    }]} dataSource={list} />
    

}