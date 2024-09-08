import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/tasklist';
import TaskForm from './components/taskform';
import Notification from './components/notification';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setNotification('Task added successfully!');
    setTimeout(() => setNotification(null), 3000);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    setNotification('Task updated successfully!');
    setTimeout(() => setNotification(null), 3000);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setNotification('Task deleted successfully!');
    setTimeout(() => setNotification(null), 3000);
  };

  const markAsCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        markAsCompleted={markAsCompleted}
      />
      {notification && <Notification message={notification} />}
    </div>
  );
}

export default App;
