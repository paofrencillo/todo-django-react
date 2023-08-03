import { Card, CardBody } from "@material-tailwind/react";
import InputTitle from "./InputTitle";
import InputDesc from "./InputDesc";
import AddTodoButton from "./AddTodoButton";

export default function AddTodoCard() {
  return (
    <Card className="w-80 h-64">
      <CardBody>
        <InputTitle />
        <InputDesc />
        <AddTodoButton />
      </CardBody>
    </Card>
  );
}
