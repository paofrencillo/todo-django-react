import { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemSuffix,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import TrashIcon from "./icons/trashIcon";

export default function TodoList() {
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
    <>
      {todos.map(function (todo, index) {
        return (
          <List key={index}>
            <ListItem
              ripple={false}
              className="py-1 pr-1 pl-4 hover:bg-purple-50"
            >
              <div className="w-3/5">
                <Typography variant="h6">{todo.title}</Typography>
                <Typography variant="small" className="break-all">
                  {todo.description}
                </Typography>
              </div>
              <ListItemSuffix>
                <IconButton variant="text" color="blue-gray">
                  <TrashIcon />
                </IconButton>
              </ListItemSuffix>
            </ListItem>
            <hr className="h-0.5 bg-purple-100 border-0 dark:bg-purple-300 px-3"></hr>
          </List>
        );
      })}
    </>
  );
}
