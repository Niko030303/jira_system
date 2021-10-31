import { SearchPanel } from "./search_pannel"
import {}

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
        <SearchPannel />
        <List />
    </div>
}