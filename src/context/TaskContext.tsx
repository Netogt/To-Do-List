import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { dataType } from "../interfaces";

interface TaskContextProps {
    children: ReactNode
}
interface listTaskType {
    [key: string]: dataType[] 
}
interface contextType {
    task: listTaskType,
    setTask: (data: listTaskType) => void
}
const context = createContext({} as contextType)

export function TaskContext({ children }: TaskContextProps) {
    const [data, setData] = useState({
        unChecked: [],
        checked: []
    } as listTaskType)
    function reloadTasks(){
        const RLTask = localStorage.getItem("dataTask")
        if(RLTask){
            setData(JSON.parse(RLTask))
        }
    }
    useEffect(()=>{reloadTasks()},[])
    function setTask(data: listTaskType): void {
        setData(data)
        localStorage.setItem("dataTask" ,JSON.stringify(data))
    }
    return (
        <context.Provider value={{ task: data, setTask }}>
            {children}
        </context.Provider>
    )
}

export function useTaskContext() {
    return useContext(context)
}