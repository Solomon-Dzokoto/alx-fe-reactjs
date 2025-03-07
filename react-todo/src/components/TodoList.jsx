import useTodoStore from "./useTodoStore";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const todos = useTodoStore(state => state.todos);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const changeCheckboxState = useTodoStore(state => state.changeCheckboxState);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="border-2 w-full gap-4 justify-between flex items-center rounded-2xl p-4">
            <input 
              type="checkbox" 
              checked={todo.checked} 
              onChange={() => changeCheckboxState(todo.id)}
              data-testid={`todo-${todo.id}`}
            />
            <h1 
              className={`text-lg ${todo.checked ? "line-through text-red-400" : "text-white"} flex-1 font-bold`}
              onClick={() => changeCheckboxState(todo.id)}
            >
              {todo.title}
            </h1>
            <button 
              className="bg-red-500 px-4 py-2 rounded-full"
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-${todo.id}`}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
