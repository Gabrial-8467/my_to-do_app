import React from 'react';
import TaskItem from './taskitem';
import './tasklist.css';

const TaskList = ({ tasks, editTask, deleteTask, markAsCompleted }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          markAsCompleted={markAsCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
