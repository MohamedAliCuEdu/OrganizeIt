import React from "react";
import useTasksContext from "../../hooks/useTasksContext";
import { IoIosStats } from "react-icons/io";
import BoardLoading from "../../components/loading/boardLoading";

function TasksBoard() {
  const { isLoading, taskStats, allTasks } = useTasksContext();
  console.log(taskStats)
  return (
    <div className="tasks-board">
      <h4>
        <IoIosStats />
        tasks Statistics
      </h4>
      {isLoading ? (
        <BoardLoading linesCount={3} />
      ) : (
        <div className="stats">
          <ul>
            <li>
              <span className="status-btn pending-bg">pending</span>
              <span className="count-btn">{taskStats?.pending || 0}</span>
            </li>
            <li>
              <span className="status-btn completed-bg">completed</span>
              <span className="count-btn">{taskStats?.completed || 0}</span>
            </li>
          </ul>
          <div className="total">
            <span className="dark-btn md-btn">total</span>
            <span className="count-btn">{allTasks?.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksBoard;
