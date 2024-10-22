import { useTaskContext } from "../context/TaskContext"
import List from "./List"

export default function BodyList(){
   
    return(
        <main className="bodyList"> 
            <List></List>
            <hr />
            <List></List>
        </main>
    )
}