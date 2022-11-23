import FormSubmitButton from "./FormSubmitButton";

function TodoItems({ todoList, deleteItem, deleteAllItems }) {
  function onSubmit(e) {
    e.preventDefault();
    if (confirm("Do you really want to clear all items?")) {
      deleteAllItems();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row mb-3 ms-1 me-1 mt-3 col-2">
        <FormSubmitButton buttonText={"Clear All"} />
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <ul className="mt-3">
          <b className="ms-3">Items:</b>
          {todoList.map(({ id, text }) => {
            return (
              <li
                className="px-2 mt-1 mb-1 ms-2"
                key={id}
                onClick={() => {
                  deleteItem(id);
                }}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
}

export default TodoItems;
