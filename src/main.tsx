import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskContext } from './context/TaskContext'
import App from './App.tsx'
import './css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </StrictMode>,
)
