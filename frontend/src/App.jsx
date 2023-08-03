import AddTodoCard from "./components/AddTodo/AddTodoCard";
import TodoListCard from "./components/TodoList/TodoListCard";
import "./App.css";

export default function App() {
  return (
    <div className="flex flex-row p-4 gap-4 w-full">
      <AddTodoCard />
      <TodoListCard />
    </div>
  );
}
