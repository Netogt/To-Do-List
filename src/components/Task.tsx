import { dataType } from "../interfaces.ts"
import { useTaskContext } from "../context/TaskContext.tsx"

export default function Task({ id, text, checked }: dataType) {
    const { task, setTask } = useTaskContext()
    let listType: string = "unChecked"
    let lastList: string = "checked"
    if (checked == true) {
        listType = "checked"
        lastList = "unChecked"
    }
    let currentList = task[listType]
    let nextList = task[lastList]
    const currentTask = currentList.find(t => t.id == id)

    function changeStatus() {
        if (currentTask) {
            currentTask.checked = !currentTask.checked
            currentList.splice(currentList.indexOf(currentTask), 1)
            nextList.push(currentTask)
            setTask({
                [listType]: currentList,
                [lastList]: nextList
            })
        }
    }
    function removeTask() {
        if (currentTask) {
            currentList.splice(currentList.indexOf(currentTask), 1)
            setTask({
                [listType]: currentList,
                [lastList]: nextList
            })
        }
    }

    return (
        <li>
            <span style={{ display: 'block' }} onClick={() => changeStatus()}>
                {checked == false ? <UnCheck /> : <Check />}
            </span>
            <div>
                <p style={checked == true ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                    {text}
                </p>
            </div>
            <svg onClick={() => removeTask()}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16" >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </li>
    )
}

function UnCheck() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
        </svg>
    )
}

function Check() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
        </svg>
    )
}