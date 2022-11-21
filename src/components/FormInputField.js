function FormInputField({ value, onChange }) {
  return (
    <input
      className="px-2 mt-2 mb-2 ms-1"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="enter a new task"
    />
  );
}

export default FormInputField;
