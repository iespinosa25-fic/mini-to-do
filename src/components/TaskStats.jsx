function TaskStats({ pending }) {
  return (
    <footer className="task-stats">
      {pending === 1
        ? 'Queda 1 tarea pendiente'
        : `Quedan ${pending} tareas pendientes`}
    </footer>
  )
}

export default TaskStats
