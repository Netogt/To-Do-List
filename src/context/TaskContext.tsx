import { createContext, useContext, ReactNode } from "react";

interface TaskContextProps {
    children: ReactNode
}

const context = createContext("")

export function TaskContext({ children }: TaskContextProps) {
    
    return (
        <context.Provider value={""}>
            {children}
        </context.Provider>
    )
}

export function useTaskContext() {
    return useContext(context)
}