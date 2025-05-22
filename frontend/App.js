import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { fetchTodos, addTodo, deleteTodo, summarizeTodos } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const handleAdd = async (task) => {
    await addTodo(task);
    getTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    getTodos();
  };

  const handleSummarize = async () => {
    setStatusMsg('Summarizing...');
    try {
      const response = await summarizeTodos();
      setStatusMsg(response.message);
    } catch (err) {
      setStatusMsg('Failed to send summary.');
    }
    setTimeout(() => setStatusMsg(''), 3000);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 Todo Summary Assistant</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
      <button onClick={handleSummarize}>Summarize & Send to Slack</button>
      {statusMsg && <p>{statusMsg}</p>}
    </div>
  );
}

export default App;
