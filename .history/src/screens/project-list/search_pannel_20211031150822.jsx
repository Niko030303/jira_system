import React from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })

    const [users, setUsers] = useState([])
    

    return <form action="">
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })}/>
            </div>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId = evt.target.value
            })}>
                <option value={""}>负责人</option>
                {
                    users.map(user => <option value={user.id}>{user.name}</option>)
                }
                
            </select>
             
        </form>
}