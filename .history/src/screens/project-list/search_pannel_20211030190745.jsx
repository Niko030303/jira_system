import React from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })

    return <form action="">
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })}/>
            </div>
            <select value={param.personId onChange={evt => setParam({
                ...param,
                personId = evt.target.value
            })}>
                <option value={""}>负责人</option>
                <option value={""}>负责人</option>
            </select>
             
        </form>
}