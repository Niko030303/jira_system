import React from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })

    return <form action="">
        <div>
            
        </div>
             <input type="text" value={param.name} onChange={evt => setParam({
                 ...param,
                 name: evt.target.value
             })}/>
             
        </form>
}