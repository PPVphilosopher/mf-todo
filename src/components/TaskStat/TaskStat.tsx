import { useMemo } from 'react'
import { Task } from '../../helpers'
import './style.scss'

type Props = {
  list: Task[]
}

export const TaskStat = ({ list }: Props) => {
  const data = useMemo(() => {
    const hours = list.reduce((sum, task) => sum + task.time, 0)

    const days = Math.round((hours / 8) * 100) / 100
    const daysString = days.toString().split('.')

    daysString[0] = daysString[0].padStart(3, '0')

    return {
      count: list.length.toString().padStart(3, '0'),
      days: daysString.join('.'),
      hours: hours.toString().padStart(3, '0'),
    }
  }, [list])

  return (
    <div className='TaskStat'>
      <div className='TaskStat__box'>
        <span>Total Tasks</span>
        <div className='TaskStat__box__value'>{data.count}</div>
      </div>

      <div className='TaskStat__box'>
        <span>Total Days</span>
        <div className='TaskStat__box__value'>{data.days}</div>
      </div>

      <div className='TaskStat__box'>
        <span>Total Hours</span>
        <div className='TaskStat__box__value'>{data.hours}</div>
      </div>
    </div>
  )
}
