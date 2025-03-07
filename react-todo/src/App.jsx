import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div className="px-[8rem] space-y-8">
      <h1 className="text-center text-[3rem] font-extrabold ">ADD TODOS</h1>
      <AddTodoForm />
      <TodoList/>
    </div>
  );
};

export default App;
