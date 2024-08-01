import React, { useState, useEffect } from "react";
import NoResults from "../NoResults";
import useTasksContext from "../../hooks/useTasksContext";
import TasksIndex from "./tasksIndex";

function TasksList() {
  console.log("--list")
  const { allTasks, searchInput, statusSP } = useTasksContext();
  const [list, setList] = useState();

  useEffect(() => {
    // filter allTasks:
    const filterTasks = allTasks.filter((t) => {
      let matchStatus = statusSP ? t.status === statusSP : true;
      let matchSearch = searchInput ? t.content.startsWith(searchInput) : true;
      return matchStatus && matchSearch;
    });
    // set list:
    setList(filterTasks);
  }, [allTasks, searchInput, statusSP]);

  return (
    <ul className="tasks-list">
      {list?.length <= 0 ? (
        <NoResults />
      ) : (
        list?.map((task) => <TasksIndex.TaskRow key={task._id} task={task} />)
      )}
    </ul>
  );
}

export default React.memo(TasksList);
