import { useState } from 'react';
import useTodoStore from './useTodoStore';
const TodoList = () => {
  
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore(state=>state.addTodo)


  const handleSubmit = async(event) => {
    event.preventDefault();
    if( title.trim() === ""){
      alert("Please enter a what you wanna do");
      return
     }
     await new Promise(resolve=>setTimeout(resolve,1000))
     addTodo({id:Date.now() ,title, completed:false})  
    return  setTitle("")
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-cols'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border rounded-2xl  border-white p-6 my-4 block mx-auto w-[50%] '
        placeholder="write your todo here..."
      />
      <br />
      <button type="submit" className='border-2 p-4 rounded-full '>Add Todo</button>
    </form>
  );
};

export default TodoList;   