import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('week3-tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title: cleanTitle, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used inside TaskProvider.');
  return context;
}

export { TaskProvider, useTasks };
