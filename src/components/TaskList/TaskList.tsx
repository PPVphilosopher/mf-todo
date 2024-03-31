import { Task } from '../../helpers'
import './style.scss'

type Props = {
  list: Task[]
  deleteTask: (id: string) => void
}

export const TaskList = ({ list, deleteTask }: Props) => {
  const onDelete = (task: Task) => {
    if (window.confirm(`Are you sure to delete task "${task.title}" ?`))
      deleteTask(task.id)
  }

  return (
    <table className='TaskList'>
      <thead>
        <tr>
          <th>Task Title</th>
          <th>Time Required(in Hrs)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.time}</td>
            <td>
              <button
                className='TaskList__action'
                onClick={() => onDelete(task)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
