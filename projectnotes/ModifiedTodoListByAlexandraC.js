import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { value: newTodo, status: 'open' }]);
      setNewTodo('');
    }
  };

  const changeTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const deleteTodo = (indexOfTodo) => {
    setTodos(todos.filter((val, i) => i !== indexOfTodo));
  };

  const completeTodo = (indexOfTodo) => {
    const newTodos = todos;
    newTodos[indexOfTodo] = { ...newTodos[indexOfTodo], status: 'completed' };
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Guest list</h2>
      <input
        value={newTodo}
        type="text"
        onChange={changeTodo}
        placeholder="add text"
      />
      <button onClick={addTodo}>Add guest</button>
      {todos.map((todo, index) => (
        <div
          key={`user-${todo.index}`}
          // {`user-${todo.index}`}
          style={{
            textDecoration: todo.status === 'open' ? 'inherit' : 'line-through',
          }}
        >
          *{todo.value}{' '}
          <button onClick={() => completeTodo(index)}>Complete</button>{' '}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
