import InputTitle from "./InputTitle";
import InputDesc from "./InputDesc";
import AddTodoButton from "./AddTodoButton";

export default function AddTodoCard() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <InputTitle />
        <InputDesc />
        <AddTodoButton />
      </div>
    </div>
  );
}
