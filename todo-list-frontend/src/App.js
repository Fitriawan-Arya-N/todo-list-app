import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://34.134.252.1:5000/api/todos');
        setTodos(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching todos:', err.message);
        setError('Failed to load todos. Please try again later.');
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://34.134.252.1:5000/api/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err.message);
      setError('Failed to delete todo. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <>
          <AddTodoForm onAdd={addTodo} />
          <TodoList todos={todos} onDelete={deleteTodo} />
        </>
      )}
    </div>
  );
};

export default App;
