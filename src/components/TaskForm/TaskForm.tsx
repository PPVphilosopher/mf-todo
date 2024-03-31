import { SubmitHandler, useForm } from 'react-hook-form'
import { Task } from '../../helpers'
import './style.scss'

type Inputs = Omit<Task, 'id'>

type Props = {
  addTask: (title: string, time: number) => void
}

export const TaskForm = ({ addTask }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { title, time } = data
    addTask(title.trim(), +time)
    reset()
  }

  return (
    <div className='TaskForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Task title
          <input
            {...register('title', {
              required: true,
              pattern: /[^\s]+/,
              maxLength: 128,
            })}
          />
          {errors.title && <span>invalid title</span>}
        </label>

        <label>
          Time Required(in Hrs)
          <input
            type='number'
            {...register('time', { required: true, min: 0, max: 24 })}
          />
          {errors.time && <span>invalid time</span>}
        </label>

        <input type='submit' value='Add' />
      </form>
    </div>
  )
}
