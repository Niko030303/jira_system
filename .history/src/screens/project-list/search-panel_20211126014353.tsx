import { Input } from "antd"
import React from "react"

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}

// 说明书，教别人怎么用
interface SearchPanelProps {
    users: User[],
    param: {
        name:string;
        personId: string;
    },
    setParam: (param:SearchPanelProps['param']) => void; // void代表什么也不返回
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {

    return <form action="">
            <div>
                <Input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })}/>
            </div>
            <Select value={param.personId} onChange={evt => setParam({
                ...param,
                personId : evt.target.value
            })}>
                <option value={""}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
                
            </select>
             
        </form>
}