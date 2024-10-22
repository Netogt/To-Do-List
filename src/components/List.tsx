import { useEffect, useState } from "react"
import { useTaskContext } from "../context/TaskContext.tsx"
import { dataType } from "../interfaces.ts"
import Task from "./Task.tsx"
interface ListProps {
    typeList: string
}
export default function List({ typeList }: ListProps) {
    const { task } = useTaskContext()
    const [list, setList] = useState([] as dataType[])

    useEffect(() => {
        if (typeList == "checked") {
            setList(task.filter(t => t.checked == true))
        } else{
            setList(task.filter(t => t.checked == false))
        }
    }, [])
    if(list.length == 0) return
    return (
        <ul className="list">
            {
                list.map( li => 
                    <Task 
                        key={li.id}
                        id={li.id}
                        text={li.text}
                        checked={li.checked}
                    />
                )
            }
        </ul>
    )
}