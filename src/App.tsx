import './App.scss'
import { TaskForm, TaskList, TaskStat } from './components'
import { useTaskList } from './hooks'

export const App = () => {
  const { list, addTask, deleteTask } = useTaskList()

  return (
    <div className='App'>
      <div>
        <h1>Task Management App</h1>
        <TaskStat list={list} />
      </div>

      <TaskForm addTask={addTask} />

      <div>
        <h2>Todo list</h2>
        <TaskList list={list} deleteTask={deleteTask} />
      </div>
    </div>
  )
}
