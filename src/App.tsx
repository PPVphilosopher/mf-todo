import './App.scss'
import { TaskForm, TaskList, TaskStat } from './components'
import { useTaskList } from './hooks'

export const App = () => {
  const { addTask } = useTaskList()

  return (
    <div className='App'>
      Task Management App
      <TaskStat />
      <TaskForm addTask={addTask} />
      <TaskList />
    </div>
  )
}
