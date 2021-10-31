import { SearchPanel } from "./search_panel"
import { List } from "./list"
import { useEffect, useState } from "react"

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('').then(async response =>{
            if(response.ok){
                setList(await response.json())
            }
        })
        return () => {
            cleanup
        }
    }, [param])

    return <div>
        <SearchPanel />
        <List />
    </div>
}