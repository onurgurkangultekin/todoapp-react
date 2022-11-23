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
    <div className="row mb-1 ms-1 me-1 mt-2">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-7">
            <FormInputField value={userInput} onChange={changeHandler} />
          </div>
          <div className="col-5">
            <FormSubmitButton buttonText={"Add Item"} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
