import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
    setNewTask('');
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Ingrese una nueva tarea"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            {!task.completed && (
              <button onClick={() => handleCompleteTask(task.id)}>Completar</button>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
