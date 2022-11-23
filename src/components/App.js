import { useState } from "react";
import AddForm from "./AddForm";
import TodoItems from "./TodoItems";
import WarningMessage from "./WarningMessage";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 16324325432, text: "Buy Sugar" },
    { id: 21443634531, text: "Eat Carrots" },
  ]);

  const [showWarning, setShowWarning] = useState(false);

  function deleteItem(id) {
    setTodoList((todoList) => todoList.filter((rec) => rec.id !== id));
  }

  function deleteAllItems() {
    setTodoList([]);
  }

  function doesItemExist(userInput) {
    const exist = todoList.findIndex((item) => item.text === userInput);
    return exist >= 0 ? true : false;
  }

  const addTask = (userInput) => {
    userInput = userInput.trim();
    const itemExists = doesItemExist(userInput);
    setShowWarning(itemExists);
    if (!itemExists) {
      const newValue = { text: userInput, id: Date.now() };
      setTodoList((todoList) => [newValue, ...todoList]);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddForm addTask={addTask} />
      <WarningMessage showWarning={showWarning} />
      <TodoItems todoList={todoList} deleteItem={deleteItem} deleteAllItems={deleteAllItems} />
    </div>
  );
}

export default App;
