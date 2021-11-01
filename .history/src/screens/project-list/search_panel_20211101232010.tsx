import React from "react"

// 说明书，教别人怎么用
interface SearchPanelProps {
    users: User[],
    param: {
        
    }
}

export const SearchPanel = ({users, param, setParam}) => {

    return <form action="">
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })}/>
            </div>
            <select value={param.personId} onChange={evt => setParam({
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