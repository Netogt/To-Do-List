import { useTaskContext } from "../context/TaskContext"
import { dataType } from "../interfaces"
import { KeyboardEvent } from "react"
export default function NewTask() {
    const { task, setTask } = useTaskContext()
    if(!task) return
    function addNewTask(event: KeyboardEvent<HTMLInputElement>) {
        if(event.key != "Enter") return
        const eTarget = event.target as HTMLInputElement
        const allTasks = [...task["unChecked"], ...task["checked"]]
        const newId = allTasks.reduce((total, currentValue): dataType => {
            total = total.id > currentValue.id ? total : currentValue;
            return total
        })
        setTask({
            unChecked: [...task.unChecked, {
                id: newId.id + 1,
                text: eTarget.value,
                checked: false
            }],
            checked: task.checked
        })
        eTarget.value = ""
    }
   
    return (
        <div className="newTask">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <input type="text" name="newTask" onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => addNewTask(event)}/>
            </div>
        </div>
    )
}