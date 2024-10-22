import { createContext, useContext, ReactNode, useState } from "react";
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
        unChecked: [
            {
                id: 1,
                text: "tarefa",
                checked: false
            }
        ],
        checked: [
            {
                id: 2,
                text: "tarefa1",
                checked: true
            }
        ]
    } as listTaskType)

    function setTask(data: listTaskType): void {
        setData(data)
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