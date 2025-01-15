import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setError('Todo cannot be empty!');
      return;
    }

    try {
      const response = await axios.post('http://34.134.252.1:5000/api/todos', {
        title: newTodo,
        completed: false,
      });
      const createdTodo = response.data;
      onAdd(createdTodo);
      setNewTodo(''); // Reset form
      setError(''); // Clear error
    } catch (err) {
      console.error('Error adding todo:', err.response || err.message);
      setError('Failed to add todo. Please try again.');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddTodoForm;
