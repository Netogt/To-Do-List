import { createContext, useContext, useState, useEffect } from "react";
import { TaskContextProps, listTaskType, contextType } from "../interfaces";

const context = createContext({} as contextType)

export function TaskContext({ children }: TaskContextProps) {
    const [darkMode, setDKMode] = useState(false)
    const [data, setData] = useState({
        unChecked: [],
        checked: []
    } as listTaskType)
    function reloadTasks(){
        const dataTask = localStorage.getItem("dataTask")
        if(dataTask){
            const objDataTask = JSON.parse(dataTask)
            setData(objDataTask.data)
            setDKMode(objDataTask.darkMode)
        }
    }
    useEffect(()=>{reloadTasks()},[])
   
    function setTask(data: listTaskType): void {
        setData(data)
        localStorage.setItem("dataTask", JSON.stringify({data, darkMode}))
    }
    function setDarkMode(dark: boolean){
        setDKMode(dark)
        localStorage.setItem("dataTask", JSON.stringify({data, darkMode: dark}))
    }
    return (
        <context.Provider value={{ task: data, setTask, darkMode, setDarkMode}}>
            {children}
        </context.Provider>
    )
}

export function useTaskContext() {
    return useContext(context)
}