const API = process.env.REACT_APP_API_URL;

export async function fetchTodos() {
  const res = await fetch(`${API}/todos`);
  return await res.json();
}

export async function addTodo(task) {
  const res = await fetch(`${API}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task })
  });
  return await res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${API}/todos/${id}`, { method: 'DELETE' });
  return await res.json();
}

export async function summarizeTodos() {
  const res = await fetch(`${API}/summarize`, { method: 'POST' });
  return await res.json();
}
