import List from "./List"
import { useTaskContext } from "../context/TaskContext"

export default function BodyList(){
    const { task } = useTaskContext()
 
    return(
        <main className="bodyList"> 
            <List dataList={task.unChecked}></List>
            <hr />
            <List dataList={task.checked}></List>
        </main>
    )
}