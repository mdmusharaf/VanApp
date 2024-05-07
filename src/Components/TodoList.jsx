import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState(" ");

  const change = (e) => {
    setNewTask(e.target.value);
  };
  const newChange = () => {
    const task = [...todo, newTask];
    console.log(task);
    setTodo(task);
  };
  return (
    <>
      <h1 className="text-5xl py-4 text-center">To Do List</h1>

      <div className="flex justify-center py-8">
        <input
          type="text"
          className="w-2/4 rounded-sm border-black outline-double mr-4 "
          onChange={change}
        />
        <button
          onClick={newChange}
          className="bg-orange-400 rounded-md px-8 py-1">
          Add task
        </button>
      </div>
      <div className="text-center">
        {todo.map((item, index) => (
          <h1 className="text-2xl" key={index}>
            {item}
          </h1>
        ))}
      </div>
    </>
  );
}

export default TodoList;
