import './App.scss'
import { TaskForm, TaskList, TaskStat } from './components'
import { useTaskList } from './hooks'

export const App = () => {
  const { list, addTask, deleteTask } = useTaskList()

  return (
    <div className='App'>
      Task Management App
      <TaskStat list={list} />
      <TaskForm addTask={addTask} />
      Todo list
      <TaskList list={list} deleteTask={deleteTask} />
    </div>
  )
}
