import useTodoStore from "./useTodoStore"

console.log(Date.now())
const TodoList = () => {
     const todos = useTodoStore(state=>state.todos)
     const deleteTodo = useTodoStore(state=>state.deleteTodo)
     const changeCheckboxState = useTodoStore(state=>state.changeCheckboxState)
   
  return (
    <div className="space-y-4">
       <li  className="border-2 w-full gap-4 justify-between  flex item-center  rounded-2xl p-4 ">
         <input type="checkbox" checked={todos[0]?.checked ?? false} />
         <h1 className={`text-lg ${todos[0]?.checked ?? false ? "text-red-400":"text-white"} flex-1 font-bold`}>Come on whats in your mind</h1>
         <button className="bg-red-500 px-4 rounded-full" >X</button>
          </li>
      {
        todos.map((todo) => (
          <li key={todo.id} className="border-2 w-full gap-4 justify-between  flex item-center  rounded-2xl p-4 ">
         <input type="checkbox" checked={todo?.checked} onChange={() => changeCheckboxState(todo.id)} />
         <h1 className={`text-lg ${todo.checked ? "text-red-400":"text-white"} flex-1 font-bold`}>{todo?.title}</h1>
         <button className="bg-red-500 px-4 rounded-full" onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))
      }
    </div>
  )
}

export default TodoList
