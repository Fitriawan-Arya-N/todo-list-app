import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      axios
        .post('http://34.134.252.1:5000/api/todos', { title: newTodo, completed: false })
        .then((response) => {
          const createdTodo = response.data; // Assuming the backend returns the created todo object
          onAdd(createdTodo); // Pass the full todo object to the parent
          setNewTodo('');
        })
        .catch((error) => console.error('Error adding todo:', error.response || error.message));
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
