import React from "react";
import useTasksContext from "../../hooks/useTasksContext";

function StatusFilter() {
  console.log("--status")
  const { statusSP, handleStatusSP } = useTasksContext();

  return (
    <div className="status-filter filter-btns">
      <button onClick={() => handleStatusSP("")} className="dark-btn md-btn">
        all
      </button>
      <button
        onClick={() => handleStatusSP("pending")}
        className={`${
          statusSP === "pending" && "active"
        } white-gray-btn dark-hover md-btn`}
      >
        pending
      </button>
      <button
        onClick={() => handleStatusSP("completed")}
        className={`${
          statusSP === "completed" && "active"
        } white-gray-btn dark-hover md-btn`}
      >
        completed
      </button>
    </div>
  );
}
export default React.memo(StatusFilter);
