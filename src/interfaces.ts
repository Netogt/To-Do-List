import { ReactNode } from "react"

export interface dataType{
    id: number,
    text: string,
    checked: boolean
}
export interface TaskContextProps {
    children: ReactNode
}
export interface listTaskType {
    [key: string]: dataType[] 
}
export interface contextType {
    task: listTaskType,
    darkMode: boolean,
    setTask: (data: listTaskType) => void,
    setDarkMode: (dark: boolean) => void
}
export interface ListProps {
    dataList: dataType[]
}