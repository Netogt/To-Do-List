import Task from "./Task.tsx"
import { ListProps } from "../interfaces.ts"

export default function List({ dataList}: ListProps) {

    if(dataList.length == 0) return
    return (
        <ul className="list">
            {
                dataList.map( li => 
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