import React from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })

    return <form action="">
             <input type="text" value={param.name} onChange={evt => setParam({
                 ...param,
                 name: evt.target.value
             })}/>
             sle
        </form>
}