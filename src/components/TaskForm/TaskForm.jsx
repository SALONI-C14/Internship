import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext.jsx';
import './TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="new-task">
        New task
      </label>
      <input
        id="new-task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
