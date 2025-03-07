import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [
    { id: 1, title: "Learn React", checked: false },
    { id: 2, title: "Build a Todo App", checked: false }
  ],
  addTodo: (todo) => set((state) => ({ 
    todos: [...state.todos, todo] 
  })),
  deleteTodo: (id) => set((state) => ({ 
    todos: state.todos.filter((todo) => todo.id !== id) 
  })),
  changeCheckboxState: (id) => set((state) => ({
    todos: state.todos.map(todo => (
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    ))
  }))
}));

export default useTodoStore;
