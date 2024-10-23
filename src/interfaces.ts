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
    setTask: (data: listTaskType) => void
}
export interface ListProps {
    dataList: dataType[]
}