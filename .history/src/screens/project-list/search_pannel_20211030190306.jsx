import React from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })

    return <form action="">
             <input type="text" value={param.name}/>
        </form>
}