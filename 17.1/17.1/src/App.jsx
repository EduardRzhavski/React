import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TodoApp = () => {
  const [todosArr, setTodosArr] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodosArr(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosArr));
  }, [todosArr]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { text: taskInput, completed: false };
      setTodosArr([...todosArr, newTask]);
      setTaskInput('');
    }
  };

  const updateTaskCompletion = (index) => {
    const updatedTodos = [...todosArr];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodosArr(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todosArr.filter((_, i) => i !== index);
    setTodosArr(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {todosArr.map((task, index) => (
          <li
            key={index}
            onClick={() => updateTaskCompletion(index)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
            <span
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => deleteTask(index)}
            >
              ❌
            </span>
            {task.completed ? (
              <span style={{ marginLeft: '5px' }}>✅</span>
            ) : (
              <span style={{ marginLeft: '5px' }}>❌</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;