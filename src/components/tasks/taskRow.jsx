import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useTasksContext from "../../hooks/useTasksContext";

function TaskRow({ task }) {
  console.log("row task -------");
  const { _id, content, status, is_completed, created_at } = task;
  const { viewTaskEdit, deleteTaskApi, completeTaskApi } = useTasksContext();

  console.log(is_completed);
  return (
    <li className={`task-row ${is_completed && "completed"}`}>
      <div className="task-content">
        <div className="input-div">
          <input
            type="checkbox"
            name="is_completed"
            id={`complete-${_id}`}
            checked={is_completed}
            onChange={(e) => completeTaskApi(e.target.checked, _id)}
          />
          <label hrmlfor={`complete-${_id}`}>{content}</label>
        </div>
        <div className="down">
          <div className="info">
            <p className={`status-btn ${status}-bg`}>{status}</p>
            <span className="date">{created_at}</span>
          </div>
          <div className="task-options">
            <FaEdit
              className="edit"
              onClick={() => {
                viewTaskEdit(_id);
              }}
            />
            <FaTrashAlt className="delete" onClick={() => deleteTaskApi(_id, status)} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default TaskRow;
