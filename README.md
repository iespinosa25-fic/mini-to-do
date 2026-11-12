# Mini To-Do App

Archivos de `src/` para tu proyecto de Vite.

## Cómo usarlos

```bash
npm create vite@latest mi-todo-app -- --template react
cd mi-todo-app
npm install
```

Luego copia el contenido de la carpeta `src/` de este zip dentro de la carpeta
`src/` de tu proyecto (reemplaza `App.jsx` y `main.jsx`, y agrega `App.css` y la
carpeta `components/`). Puedes borrar `index.css` y `assets/` si no los usas.

```bash
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Estructura

```
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
```

Extra incluido: las tareas se guardan en `localStorage`.
