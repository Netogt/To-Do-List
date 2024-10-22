import { dataType } from "../interfaces.ts"
import Task from "./Task.tsx"
interface ListProps {
    dataList: dataType[]
    listType: string
}
export default function List({ dataList}: ListProps) {
    if(!dataList) return

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