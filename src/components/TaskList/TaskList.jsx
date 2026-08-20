import React from 'react';
import { useTasks } from '../../context/TaskContext.jsx';
import TaskItem from '../TaskItem/TaskItem.jsx';
import './TaskList.css';

function TaskList() {
  const { tasks, filter } = useTasks();
  const visibleTasks = tasks.filter(
    (task) =>
      filter === 'all' ||
      (filter === 'active' ? !task.completed : task.completed)
  );
  if (!visibleTasks.length)
    return (
      <p className="empty-message">
        No {filter === 'all' ? '' : filter} tasks yet.
      </p>
    );
  return (
    <ul className="task-list">
      {visibleTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
