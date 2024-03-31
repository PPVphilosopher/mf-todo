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

  const updateList = (newList: Task[]) => {
    setList(newList)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
  }

  const addTask = (title: string, time: number) => {
    updateList([
      ...list,
      {
        id: crypto.randomUUID(),
        title,
        time,
      },
    ])
  }

  const deleteTask = (id: string) => {
    updateList(list.filter((task) => task.id !== id))
  }

  return {
    list,
    addTask,
    deleteTask,
  }
}
