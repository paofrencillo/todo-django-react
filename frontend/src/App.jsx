import axios from "axios";
import { useEffect, useState } from "react";

import AddTodoCard from "./components/AddTodo/AddTodoCard";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <div className="flex flex-row p-4 gap-4 w-full">
      <AddTodoCard />
      <h1></h1>
    </div>
  );
}
