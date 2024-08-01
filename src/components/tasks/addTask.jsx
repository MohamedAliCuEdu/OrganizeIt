import React from "react";
import useTasksContext from "../../hooks/useTasksContext";
import { MdOutlineAddBox } from "react-icons/md";

function AddTask({}) {
  console.log("add task -------");
  const { newTask, handleNewTask, isPending, addTaskApi } = useTasksContext();
  return (
    <form method="post" onSubmit={addTaskApi}>
      <input
        className="input-flex-field light-input"
        type="text"
        name="content"
        value={newTask}
        placeholder="add new task..."
        onChange={(e) => handleNewTask(e.target.value)}
        maxLength="40"
        required
      />
      <button
        className="xlg-icon-btn dark-btn"
        type="submit"
        disabled={isPending}
      >
        <MdOutlineAddBox />
      </button>
    </form>
  );
}
export default React.memo(AddTask);
