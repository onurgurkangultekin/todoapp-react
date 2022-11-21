import { useState } from "react";
import AddForm from "./AddForm";
import TodoItems from "./TodoItems";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 16324325432, text: "Buy Sugar" },
    { id: 21443634531, text: "Eat Carrots" },
  ]);

  function deleteItem(id) {
    setTodoList((todoList) => todoList.filter((rec) => rec.id !== id));
  }

  const addTask = (userInput) => {
    const newValue = { text: userInput, id: Date.now() };
    setTodoList((todoList) => [newValue, ...todoList]);
  };

  return (
    <div className="container">
      <div className="row mb-1 ms-1 me-1 mt-2">
        <AddForm addTask={addTask} />
      </div>
      <div className="row mb-3 ms-1 me-1 mt-3">
        <TodoItems entries={todoList} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
