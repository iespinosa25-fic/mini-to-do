import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskStats from './components/TaskStats'
import './App.css'

const STORAGE_KEY = 'mini-todo-tasks'

// Carga las tareas guardadas (extra: localStorage)
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  // Guarda las tareas cada vez que cambian
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Variable derivada según el filtro seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const pendingCount = tasks.filter((task) => !task.completed).length

  return (
    <div className="app">
      <div className="card">
        <h1>Mini To-Do App</h1>
        <TaskForm onAdd={addTask} />
        <TaskFilter filter={filter} onChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
        <TaskStats pending={pendingCount} />
      </div>
    </div>
  )
}

export default App
