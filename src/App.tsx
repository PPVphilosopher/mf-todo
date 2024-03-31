import './App.scss'
import { TaskForm, TaskList, TaskStat } from './components'
import { useTaskList } from './hooks'

export const App = () => {
  const { list, addTask } = useTaskList()

  return (
    <div className='App'>
      Task Management App
      <TaskStat list={list} />
      <TaskForm addTask={addTask} />
      <TaskList />
    </div>
  )
}
