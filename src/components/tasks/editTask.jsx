import React from "react";
import useTasksContext from "../../hooks/useTasksContext";
import CloseBtn from "../buttons/closeBtn";
import useLayoutContext from "../../hooks/useLayoutContext";

function EditTask() {
  const { handleOverlay } = useLayoutContext();
  const { currentTask, handleCurrentTask, updateTaskApi, viewTaskEdit } =
    useTasksContext();
  const { _id, content, status, created_at } = currentTask;

  return (
    <div className="task-edit-section">
      <div className="banner">
        <CloseBtn
          callBack={() => {
            viewTaskEdit();
            handleOverlay();
          }}
        />
      </div>
      <form onSubmit={(e) => updateTaskApi(e, _id)}>
        <h4>edit task:</h4>
        <input
        className="input-xlg-field light-input"
          type="text"
          name="content"
          value={content}
          onChange={(e) => handleCurrentTask(e.target.value)}
          required
          minLength={1}
          maxLength={40}
          placeholder="task..."
        />
        <div className="info">
          <span className={`status-btn ${status}-bg`}>{status}</span>
          <span className="date">{created_at}</span>
        </div>
        <div className="form-btns">
          <button
            className="md-btn dark-btn"
            type="reset"
            value="reset"
            onClick={() => handleCurrentTask("")}
          >
            reset
          </button>
          <button className="md-btn dark-btn" type="submit" value="save">
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
