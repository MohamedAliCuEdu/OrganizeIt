import React from "react";
import TasksIndex from "../components/tasks/tasksIndex";
import PageTitle from "../components/pageTitle";
import useTasksContext from "../hooks/useTasksContext";
import OverlayElement from "../components/overlayElement";
import useLayoutContext from "../hooks/useLayoutContext";
import BulletsLoading from "../components/loading/bulletsLoading";
import NoContent from "../components/noContent";
import { FaTasks } from "react-icons/fa";
import ErrorDiv from "../components/error-div";

function Tasks() {
  const { overlayDisplay } = useLayoutContext();
  const { isLoading, fetchDataErr, allTasks, taskEdit, viewTaskEdit } =
    useTasksContext();
console.log("--page")
  return (
    <main className="tasks-page">
      {overlayDisplay && <OverlayElement callback={viewTaskEdit} />}
      <div className="container">
        <PageTitle title="tasks">
          <FaTasks />
        </PageTitle>
        <header className="tasks-header">
          <div className="header-content">
            <TasksIndex.AddTask />
            <TasksIndex.SearchTask />
          </div>
        </header>
        <TasksIndex.StatusFilter />
        <div className="tasks-content">
          {isLoading ? (
            <BulletsLoading />
          ) : fetchDataErr ? (
            <ErrorDiv errorObj={fetchDataErr} />
          ) : allTasks?.length <= 0 ? (
            <NoContent />
          ) : (
            <TasksIndex.TasksList />
          )}
          <TasksIndex.TasksBoard />
        </div>
        {taskEdit && <TasksIndex.EditTask/>}
      </div>
    </main>
  );
}
export default Tasks;
