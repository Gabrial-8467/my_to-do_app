import React, { useState } from 'react';
import './taskitem.css';

const TaskItem = ({ task, editTask, deleteTask, markAsCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (newDescription.trim()) {
      editTask(task.id, { ...task, description: newDescription });
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
            className="task-input"
          />
          <button onClick={handleEdit} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span className="task-desc">{task.description}</span>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
          <button onClick={() => markAsCompleted(task.id)} className="complete-btn">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
