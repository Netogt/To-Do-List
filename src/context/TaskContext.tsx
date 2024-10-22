import { createContext, useContext, ReactNode, useState } from "react";
import { dataType } from "../interfaces";
interface TaskContextProps {
    children: ReactNode
}

interface contextType{
    task: dataType[],
    setTask: (data: dataType[]) => void
}
const context = createContext({} as contextType)

export function TaskContext({ children }: TaskContextProps) {
    const [data, setData] = useState<Array<dataType>>([
        {
            id: 1,
            text: "tarefa",
            checked: false
        },
        {
            id: 2,
            text: "tarefa1",
            checked: true
        }
    ])
    function setTask(data: dataType[]): void {
        setData(data)
    }   
    return (
        <context.Provider value={{task: data, setTask}}>
            {children}
        </context.Provider>
    )
}

export function useTaskContext() {
    return useContext(context)
}