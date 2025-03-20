import { useState } from 'react';
import useTodoStore from './useTodoStore';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      return;
    }
    
    addTodo({
      id: Date.now(),
      title: title.trim(),
      checked: false
    });
    
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center justify-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-2xl border-white p-4 w-[50%]"
        placeholder="Add a new todo"
      />
      <button 
        type="submit" 
        className="border-2 p-4 rounded-full hover:bg-white hover:text-black transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;