function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Marcar "${task.text}" como completada`}
      />
      <span className="task-text" onClick={() => onToggle(task.id)}>
        {task.text}
      </span>
      <button
        className="btn btn-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Eliminar "${task.text}"`}
      >
        Eliminar
      </button>
    </li>
  )
}

export default TaskItem
