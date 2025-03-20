import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-center text-[3rem] font-extrabold ">ADD TODOS</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
