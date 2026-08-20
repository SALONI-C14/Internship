import React from 'react';
import { useTasks } from '../../context/TaskContext.jsx';
import './TaskItem.css';

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button
        className="task-item__delete"
        type="button"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
