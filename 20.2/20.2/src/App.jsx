import React, { useState } from 'react';

const TodoApp = () => {
  const initialTodos = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo App</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.name}
            <button onClick={() => toggleCompletion(index)}>
              {todo.completed ? '✅' : '❌'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
