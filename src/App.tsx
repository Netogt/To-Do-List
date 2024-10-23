import './css/App.css'
import Header from './components/Header'
import BodyList from './components/BodyList'
import NewTask from './components/NewTask'
import { useTaskContext } from './context/TaskContext'

function App() {
  const {darkMode} = useTaskContext()
  return (
      <div className={darkMode ? 'dark' : 'light'}>
        <Header />
        <BodyList />
        <NewTask />
      </div>
  )
}

export default App
