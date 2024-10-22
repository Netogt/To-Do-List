import './css/App.css'
import Header from './components/Header'
import BodyList from './components/BodyList'
import NewTask from './components/NewTask'
import { TaskContext } from './context/TaskContext'

function App() {

  return (
    <TaskContext>
      <div className='container'>
        <Header />
        <BodyList />
        <NewTask />
      </div>
    </TaskContext>
  )
}

export default App
