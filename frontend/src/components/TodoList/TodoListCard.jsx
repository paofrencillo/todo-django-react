import { Card } from "@material-tailwind/react";
import TodoList from "./TodoList";

export default function TodoListCard() {
  return (
    <Card className="w-96 p-2">
      <TodoList />
    </Card>
  );
}
