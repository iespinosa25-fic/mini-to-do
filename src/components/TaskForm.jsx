import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  // Se ejecuta al presionar Enter o al hacer clic en "Agregar"
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué tienes pendiente?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-add">
        Agregar
      </button>
    </form>
  )
}

export default TaskForm
