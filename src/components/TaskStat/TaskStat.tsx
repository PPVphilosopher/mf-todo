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
      <div>
        <span>Total Tasks</span>
        <span>{data.count}</span>
      </div>

      <div>
        <span>Total Days</span>
        <span>{data.days}</span>
      </div>

      <div>
        <span>Total Hours</span>
        <span>{data.hours}</span>
      </div>
    </div>
  )
}
