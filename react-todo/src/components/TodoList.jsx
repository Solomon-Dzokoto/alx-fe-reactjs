import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), title: inputValue, completed: false }]);
    setInputValue("");
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              data-testid={`todo-${todo.id}`}
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.title}
            </span>
            <button data-testid={`delete-${todo.id}`} onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
