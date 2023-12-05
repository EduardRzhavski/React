import React, { useReducer, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map((task, index) =>
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todosArr, dispatch] = useReducer(todoReducer, []);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch({ type: 'SET_TODOS', payload: storedTodos });
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosArr));
  }, [todosArr]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { text: taskInput, completed: false };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskInput('');
    }
  };

  const updateTaskCompletion = (index) => {
    dispatch({ type: 'TOGGLE_TASK', payload: index });
  };

  const deleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
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
