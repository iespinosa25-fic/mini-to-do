
## Cómo usarlos

```bash
npm create vite@latest mi-todo-app -- --template react
cd mi-todo-app
npm install
```

npm run dev
```

Abre la URL  http://localhost:5173

## Estructura

[```
src/
├── App.jsx              # Estado: tasks y filter + addTask, toggleTask, deleteTask, filteredTasks
├── App.css              # Estilos
├── main.jsx
└── components/
    ├── TaskForm.jsx     # Input + botón (Enter o clic)
    ├── TaskList.jsx     # Renderiza tareas filtradas con key
    ├── TaskItem.jsx     # Checkbox, texto tachado, botón eliminar
    ├── TaskFilter.jsx   # Todas / Pendientes / Completadas
    └── TaskStats.jsx    # Contador de pendientes

 
 
 las tareas se guardan en `localStorage`.
]
