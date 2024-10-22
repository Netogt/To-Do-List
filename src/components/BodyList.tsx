import { useEffect, useState } from "react"
import List from "./List"
import { useTaskContext } from "../context/TaskContext"
import { dataType } from "../interfaces"

export default function BodyList(){
    const { task } = useTaskContext()
    const [unCheck, setUnCheck] = useState<dataType[]>([])
    const [Check, setCheck] = useState<dataType[]>([])
    
    useEffect(() => {
        setUnCheck(task.unChecked)    
        setCheck(task.checked)
        
    }, [task["unChecked"]])
    
    return(
        <main className="bodyList"> 
            <List dataList={unCheck} listType="unChecked"></List>
            <hr />
            <List dataList={Check} listType="checked"></List>
        </main>
    )
}