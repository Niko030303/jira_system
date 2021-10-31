import { SearchPanel } from "./search_panel"
import { List } from "./list"
import { useEffect, useS } from "react"

export const ProjectListScreen = () => {

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