import { useState } from "react";
import FormInputField from "./FormInputField";
import FormSubmitButton from "./FormSubmitButton";

function AddForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  function changeHandler(e) {
    setUserInput(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-7">
          <FormInputField value={userInput} onChange={changeHandler} />
        </div>
        <div className="col-5">
          <FormSubmitButton />
        </div>
      </div>
    </form>
  );
}

export default AddForm;
