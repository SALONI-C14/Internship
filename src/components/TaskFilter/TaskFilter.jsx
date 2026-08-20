import React from 'react';
import { useTasks } from '../../context/TaskContext.jsx';
import './TaskFilter.css';

const filters = ['all', 'active', 'completed'];

function TaskFilter() {
  const { filter, setFilter } = useTasks();
  return (
    <div className="task-filter" aria-label="Filter tasks">
      {filters.map((option) => (
        <button
          key={option}
          type="button"
          className={filter === option ? 'is-active' : ''}
          onClick={() => setFilter(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
