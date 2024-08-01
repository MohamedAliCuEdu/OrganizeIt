import React, { useEffect, useState, createContext } from "react";
import { useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosGetData from "../hooks/useAxiosGetData";
import usePrivateAxios from "../hooks/usePrivateAxios";
import useLayoutContext from "../hooks/useLayoutContext";

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const { auth } = useAuth();
  const { handleOverlayDisplay } = useLayoutContext();
  const axiosPrivateApi = usePrivateAxios();
  const [searchParams, setSearchParams] = useSearchParams();

  const [allTasks, setAllTasks] = useState([]);
  const [taskStats, setTaskStats] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [currentTask, setCurrentTask] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [taskEdit, setTaskEdit] = useState(false);

  // fetch user all tasks by axiosPrivateApi:
  const { data, isLoading, fetchDataErr } = useAxiosGetData({
    axiosInstance: axiosPrivateApi,
    url: `/api/tasks/${auth.userId}`,
  });
  useEffect(() => {
    setAllTasks(data.allTasks);
    setTaskStats(data.taskState);
  }, [data]);

  let statusSP = searchParams.get("status");

  const handleStatusSP = React.useCallback((status) => {
    status ? searchParams.set("status", status) : searchParams.delete("status");
    setSearchParams(searchParams);
  }, [searchParams]);

  // handle Task editing Section view:
  const viewTaskEdit = React.useCallback((taskId) => {
    if (taskId) {
      setTaskEdit(true);
      setCurrentTask(allTasks.find((t) => t._id === taskId));
    } else {
      setTaskEdit(false);
    }
    handleOverlayDisplay();
  }, [allTasks]);
  // handle [add_task_input] change:
  const handleNewTask = React.useCallback((value) => {
    setNewTask(value);
  }, []);
  // handle search input change:
  const handleSearchInput = React.useCallback((value) => {
    setSearchInput(value);
  }, []);
  // handle currentTask editing:
  const handleCurrentTask = React.useCallback((value) => {
    setCurrentTask((prev) => ({ ...prev, content: value }));
  }, []);

  // add new task request api:
  const addTaskApi = React.useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsPending(true);
        const res = await axiosPrivateApi.post(`/api/tasks/${auth.userId}`, {
          content: newTask,
        });
        setAllTasks((prev) => [...prev, res.data]);
        setNewTask("");
      } catch (err) {
        console.log(err);
        !err?.response
          ? setErrMsg({ msg: "server not response" })
          : setErrMsg({
              msg: "faild to add task!",
              status: err.response.status,
            });
      } finally {
        setIsPending(false);
      }
    },
    [axiosPrivateApi, newTask]
  );
  // complete task request api:
  const completeTaskApi = React.useCallback(
    async (value, taskId) => {
      try {
        // make a patch request:
        await axiosPrivateApi.patch(
          `/api/tasks/${auth.userId}/${taskId}/complete`,
          {
            is_completed: value,
          }
        );
        // add updates to allTasks state:
        setAllTasks((prev) =>
          prev.map((t) =>
            t._id === taskId
              ? {
                  ...t,
                  is_completed: value,
                  status: value ? "completed" : "pending",
                }
              : t
          )
        );
      } catch (err) {
        console.log(err);
        !err?.response
          ? setErrMsg({ msg: "server not response" })
          : setErrMsg({
              msg: "faild to update task!",
              status: err.response.status,
            });
      } finally {
        setIsPending(false);
      }
    },
    [axiosPrivateApi]
  );
  // update task request api:
  const updateTaskApi = React.useCallback(
    async (e, taskId) => {
      e.preventDefault();
      try {
        await axiosPrivateApi.put(`/api/tasks/${auth.userId}/${taskId}`);
        setAllTasks((prev) =>
          prev.map((t) => (t._id === taskId ? currentTask : t))
        );
      } catch (err) {
        console.log(err);
        !err?.response
          ? setErrMsg({ msg: "server not response" })
          : setErrMsg({
              msg: "faild to save changes!",
              status: err.response.status,
            });
      }
    },
    [axiosPrivateApi, auth, currentTask]
  );
  // delete task request api:
  const deleteTaskApi = React.useCallback(
    async (taskId) => {
      try {
        // make a delete request api:
        await axiosPrivateApi.delete(`/api/tasks/${auth.userId}/${taskId}`);
        // filter tasks:
        setAllTasks((prev) => prev.filter((task) => task._id !== taskId));
      } catch (err) {
        console.log(err);
        !err?.response
          ? setErrMsg({ msg: "server not response" })
          : setErrMsg({
              msg: "faild to delete task!",
              status: err.response.status,
            });
      }
    },
    [axiosPrivateApi, auth]
  );
  // delete task request api:
  const deleteAllTasksApi = React.useCallback(async () => {
    try {
      // make a delete request api:
      await axiosPrivateApi.delete(`/api/tasks/${auth.userId}`);
      // filter tasks:
      setAllTasks([]);
    } catch (err) {
      console.log(err);
      !err?.response
        ? setErrMsg({ msg: "server not response" })
        : setErrMsg({
            msg: "faild to delete all tasks!",
            status: err.response.status,
          });
    }
  }, [axiosPrivateApi, auth]);

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        fetchDataErr,
        allTasks,
        taskStats,
        statusSP,
        handleStatusSP,
        currentTask,
        taskEdit,
        handleCurrentTask,
        viewTaskEdit,
        newTask,
        handleNewTask,
        searchInput,
        handleSearchInput,
        isPending,
        errMsg,
        addTaskApi,
        completeTaskApi,
        updateTaskApi,
        deleteTaskApi,
        deleteAllTasksApi,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
