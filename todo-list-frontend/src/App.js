import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the backend
    axios
      .get('http://34.135.238.204:5000/api/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (newTodoTitle) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, title: newTodoTitle, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://34.135.238.204:5000/api/todos/${id}`)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error('Error deleting todo:', error));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
