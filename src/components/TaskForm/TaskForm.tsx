import { SubmitHandler, useForm } from 'react-hook-form'
import { Task } from '../../helpers'
import './style.scss'

type Inputs = Omit<Task, 'id'>

type Props = {
  addTask: (title: string, time: number) => void
}

export const TaskForm = ({ addTask }: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { title, time } = data
    addTask(title.trim(), +time)
    reset()
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div className='TaskForm__label'>Task title</div>
        <input
          className='TaskForm__input'
          maxLength={128}
          required
          {...register('title')}
        />
      </label>

      <label>
        <div className='TaskForm__label'>Time Required(in Hrs)</div>
        <input
          className='TaskForm__input'
          type='number'
          min={0}
          max={24}
          required
          {...register('time')}
        />
      </label>

      <input className='TaskForm__submit' type='submit' value='Add' />
    </form>
  )
}
