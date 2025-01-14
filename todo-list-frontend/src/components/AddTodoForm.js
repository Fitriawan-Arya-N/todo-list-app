import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      axios
        .post('http://34.135.238.204:5000/api/todos', { title: newTodo, completed: false })
        .then(() => {
          onAdd(newTodo);
          setNewTodo('');
        })
        .catch((error) => console.error('Error adding todo:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
