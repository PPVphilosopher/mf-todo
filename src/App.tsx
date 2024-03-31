import './App.scss'
import { TaskForm, TaskList, TaskStat } from './components'

export const App = () => {
  return (
    <div className='App'>
      Task Management App
      <TaskStat />
      <TaskForm />
      <TaskList />
    </div>
  )
}
