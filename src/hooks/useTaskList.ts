import { useEffect, useState } from 'react'
import { Task } from '../helpers'

const STORAGE_KEY = 'TASK_LIST'

export const useTaskList = () => {
  const [list, setList] = useState<Task[]>([])

  useEffect(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) setList(JSON.parse(data))
    } catch (_) {}
  }, [])

  return {
    list,
  }
}
