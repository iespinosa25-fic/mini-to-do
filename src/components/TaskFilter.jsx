const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'active', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
]

function TaskFilter({ filter, onChange }) {
  return (
    <div className="task-filter">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={`btn btn-filter ${filter === value ? 'active' : ''}`}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter
