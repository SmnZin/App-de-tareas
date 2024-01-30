import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../task";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); // Estado inicial

  function createTask(task) {
    // Funcion para crear una tarea
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    // Funcion para eliminar una tarea
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
